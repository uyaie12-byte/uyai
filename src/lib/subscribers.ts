import { promises as fs } from "fs";
import path from "path";

export type SubscribeSource = "home" | "article" | "footer" | "about";

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
 * form works end-to-end (Skill §6) without picking an ESP first (Skill §9 —
 * open decision). It's queryable (`data/subscribers.json`, gitignored) for
 * local dev and demos.
 *
 * IMPORTANT for production: most serverless hosts (Vercel included) run this
 * route on a read-only filesystem, so this file will NOT persist submissions
 * once deployed. Set SUBSCRIBE_WEBHOOK_URL to a webhook (Zapier/Make, an
 * Airtable/Google Sheets automation, or a Beehiiv/ConvertKit/Mailchimp
 * webhook) and this module posts every signup there as well — that's the
 * one env var to swap in once the real ESP is chosen, no code changes.
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

export async function addSubscriber(
  rawEmail: string,
  source: SubscribeSource
): Promise<SubscribeResult> {
  const email = rawEmail.trim().toLowerCase();
  if (!email || !isValidEmail(email)) {
    return { ok: false, error: "That doesn't look like a valid email." };
  }

  const entry: StoredSubscriber = { email, source, createdAt: new Date().toISOString() };

  const [duplicate] = await Promise.all([
    appendToLocalFile(entry),
    postToWebhook(entry),
  ]);

  console.log(`[subscribers] +${email} (${source})`);
  return { ok: true, duplicate };
}
