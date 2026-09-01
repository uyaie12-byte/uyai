import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export type SubscribeSource = "home" | "article" | "footer" | "about" | "the-camp" | "popup";

export type SubscribeResult =
  | { ok: true; duplicate: boolean }
  | { ok: false; error: string };

const DATA_FILE = path.join(process.cwd(), "data", "subscribers.json");

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type StoredSubscriber = { email: string; source: SubscribeSource; createdAt: string };

/**
 * Local, file-based subscriber store.
 *
 * This is a deliberately zero-dependency default so the newsletter/waitlist
 * form works end-to-end without an ESP configured. It's queryable
 * (`data/subscribers.json`, gitignored) for local dev and demos.
 *
 * IMPORTANT for production: most serverless hosts (Vercel included) run this
 * route on a read-only filesystem, so this file will NOT persist submissions
 * once deployed — Mailchimp (below) is the real store once MAILCHIMP_API_KEY
 * is set. This stays as a local-dev convenience and a best-effort fallback.
 */
async function appendToLocalFile(entry: StoredSubscriber): Promise<boolean> {
  try {
    let existing: StoredSubscriber[] = [];
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    if (existing.some((s) => s.email.toLowerCase() === entry.email.toLowerCase())) {
      return true; // already recorded locally — treat as duplicate, not an error
    }
    existing.push(entry);
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2));
    return false;
  } catch (err) {
    // Read-only fs (production serverless) or similar — non-fatal, the
    // webhook path (if configured) is still attempted below.
    console.warn("[subscribers] local file store unavailable:", err);
    return false;
  }
}

async function postToWebhook(entry: StoredSubscriber): Promise<void> {
  const url = process.env.SUBSCRIBE_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entry),
    });
  } catch (err) {
    console.warn("[subscribers] webhook post failed:", err);
  }
}

/**
 * Mailchimp Marketing API — the real ESP. Requires MAILCHIMP_API_KEY (an
 * API key from Account → Extras → API keys — note the "-usNN" suffix,
 * that's the datacenter this module reads the key apart to find the right
 * host) and MAILCHIMP_AUDIENCE_ID (an Audience's ID, from Audience →
 * Settings → Audience name and defaults).
 *
 * Uses PUT against the member's MD5-hashed-email resource, which upserts:
 * a first-time email is created "subscribed", a returning one is left as
 * whatever status it already has (so a past unsubscribe isn't silently
 * re-subscribed). Then tags the member with `source` (home/article/
 * footer/about/the-camp/popup) so the audience can be segmented by where
 * someone signed up.
 *
 * Best-effort like the webhook above: a Mailchimp hiccup shouldn't be the
 * reason a visitor sees an error after typing their email, so failures are
 * logged, not thrown. The one exception is an email Mailchimp itself flags
 * as invalid — our own regex check already screens most of those, but
 * this surfaces anything it missed.
 *
 * Note: unlike some ESPs, Mailchimp does NOT send a welcome email through
 * this API call by default. To send one, turn on "Send a final welcome
 * email" under the Audience's Signup form settings, or build an Automation
 * (Journey) triggered on "Signs up".
 */
async function postToMailchimp(
  entry: StoredSubscriber
): Promise<{ configured: boolean; ok: boolean; error?: string }> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!apiKey || !audienceId) return { configured: false, ok: false };

  const dc = apiKey.split("-").pop();
  if (!dc || dc === apiKey) {
    console.warn('[subscribers] MAILCHIMP_API_KEY is missing its datacenter suffix (e.g. "-us21")');
    return { configured: true, ok: false };
  }

  const memberHash = crypto.createHash("md5").update(entry.email).digest("hex");
  const auth = `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`;
  const memberUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members/${memberHash}`;

  try {
    const res = await fetch(memberUrl, {
      method: "PUT",
      headers: { "content-type": "application/json", authorization: auth },
      body: JSON.stringify({
        email_address: entry.email,
        status_if_new: "subscribed",
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      console.warn(`[subscribers] Mailchimp rejected ${entry.email}: ${res.status}`, body);
      // Mailchimp's "Invalid Resource" for a malformed address is the one
      // worth telling the visitor about; auth/rate-limit/outage is ours.
      if (res.status === 400) {
        return { configured: true, ok: false, error: "That doesn't look like a valid email." };
      }
      return { configured: true, ok: false };
    }

    // Fire-and-forget: tag the member with its source. Doesn't block the
    // response, and a failure here doesn't undo the subscription above.
    fetch(`${memberUrl}/tags`, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: auth },
      body: JSON.stringify({ tags: [{ name: entry.source, status: "active" }] }),
    }).catch((err) => console.warn("[subscribers] Mailchimp tag failed:", err));

    return { configured: true, ok: true };
  } catch (err) {
    console.warn("[subscribers] Mailchimp request failed:", err);
    return { configured: true, ok: false };
  }
}

export async function addSubscriber(
  rawEmail: string,
  source: SubscribeSource
): Promise<SubscribeResult> {
  const email = rawEmail.trim().toLowerCase();
  if (!email || !isValidEmail(email)) {
    return { ok: false, error: "That doesn't look like a valid email." };
  }

  const entry: StoredSubscriber = { email, source, createdAt: new Date().toISOString() };

  const [duplicate, mailchimp] = await Promise.all([
    appendToLocalFile(entry),
    postToMailchimp(entry),
    postToWebhook(entry),
  ]);

  if (mailchimp.error) {
    return { ok: false, error: mailchimp.error };
  }

  console.log(
    `[subscribers] +${email} (${source})${mailchimp.configured ? (mailchimp.ok ? " → mailchimp ok" : " → mailchimp failed") : ""}`
  );
  return { ok: true, duplicate };
}
