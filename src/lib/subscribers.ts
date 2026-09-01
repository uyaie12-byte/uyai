import { promises as fs } from "fs";
import path from "path";

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
 * once deployed — Beehiiv (below) is the real store once BEEHIIV_API_KEY is
 * set. This stays as a local-dev convenience and a best-effort fallback.
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
 * Beehiiv subscription API — the real ESP. Requires BEEHIIV_API_KEY (a
 * publication API key from Beehiiv Settings → Integrations → API) and
 * BEEHIIV_PUBLICATION_ID (starts with "pub_", same settings page).
 *
 * `utm_medium` carries our `source` (home/article/footer/about/the-camp/
 * popup) through as a Beehiiv subscription tag, so the audience can be
 * segmented by where someone signed up without any extra Beehiiv setup.
 *
 * Best-effort like the webhook above: a Beehiiv hiccup shouldn't be the
 * reason a visitor sees an error after typing their email, so failures are
 * logged, not thrown. The one exception is an email Beehiiv itself flags
 * as invalid/undeliverable — our own regex check already screens most of
 * those, but this surfaces anything it missed.
 */
async function postToBeehiiv(
  entry: StoredSubscriber
): Promise<{ configured: boolean; ok: boolean; error?: string }> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  if (!apiKey || !publicationId) return { configured: false, ok: false };

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: entry.email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "underground-draft-website",
          utm_medium: entry.source,
        }),
      }
    );

    if (res.ok) return { configured: true, ok: true };

    const body = await res.text().catch(() => "");
    console.warn(`[subscribers] Beehiiv rejected ${entry.email}: ${res.status} ${body}`);

    // 400 here is Beehiiv's own "invalid/undeliverable email" — worth
    // telling the visitor. Anything else (auth, rate limit, outage) is
    // our problem, not theirs, so stay silent and keep the local/webhook
    // paths as the safety net.
    if (res.status === 400) {
      return { configured: true, ok: false, error: "That doesn't look like a valid email." };
    }
    return { configured: true, ok: false };
  } catch (err) {
    console.warn("[subscribers] Beehiiv request failed:", err);
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

  const [duplicate, beehiiv] = await Promise.all([
    appendToLocalFile(entry),
    postToBeehiiv(entry),
    postToWebhook(entry),
  ]);

  if (beehiiv.error) {
    return { ok: false, error: beehiiv.error };
  }

  console.log(
    `[subscribers] +${email} (${source})${beehiiv.configured ? (beehiiv.ok ? " → beehiiv ok" : " → beehiiv failed") : ""}`
  );
  return { ok: true, duplicate };
}
