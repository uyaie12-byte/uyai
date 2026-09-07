// api/subscribe.js
//
// Vercel serverless function that adds an email to a Mailchimp audience.
// The API key never touches the browser — it lives only in environment
// variables set in the Vercel project dashboard (or a local .env file,
// see .env.example). Both signup forms on the landing page POST here.
//
// Required environment variables:
//   MAILCHIMP_API_KEY       e.g. "abc123def456...-us21"
//   MAILCHIMP_AUDIENCE_ID   the Audience/List ID, e.g. "a1b2c3d4e5"
//
// Optional:
//   MAILCHIMP_SERVER_PREFIX   derived automatically from the API key's
//                              suffix (the part after the last "-") if
//                              not set explicitly, e.g. "us21".
//   MAILCHIMP_DOUBLE_OPTIN    "true" to send a confirmation email before
//                              subscribing (Mailchimp status "pending").
//                              Defaults to "false" (subscribe immediately).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function inferServerPrefix(apiKey) {
  const key = String(apiKey || "");
  const dash = key.lastIndexOf("-");
  return dash === -1 ? null : key.slice(dash + 1);
}

function readMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  return {
    apiKey,
    audienceId: process.env.MAILCHIMP_AUDIENCE_ID,
    serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX || inferServerPrefix(apiKey),
    doubleOptIn: String(process.env.MAILCHIMP_DOUBLE_OPTIN || "").toLowerCase() === "true",
  };
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "object") return req.body;
  try {
    return JSON.parse(req.body);
  } catch (err) {
    return {};
  }
}

async function addToMailchimp({ apiKey, audienceId, serverPrefix, doubleOptIn }, email, tags) {
  const auth = Buffer.from("anystring:" + apiKey).toString("base64");
  const res = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: doubleOptIn ? "pending" : "subscribed",
        ...(tags && tags.length ? { tags } : {}),
      }),
    }
  );

  if (res.ok) return { ok: true };

  const errBody = await res.json().catch(() => ({}));

  // Already on the list — that's a success from the visitor's point of view.
  if (errBody.title === "Member Exists") {
    return { ok: true, alreadySubscribed: true };
  }

  return {
    ok: false,
    status: 502,
    error: errBody.detail || "Something went wrong — please try again in a moment.",
    detail: errBody,
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const config = readMailchimpConfig();
  if (!config.apiKey || !config.audienceId || !config.serverPrefix) {
    console.error("Mailchimp isn't configured — set MAILCHIMP_API_KEY and MAILCHIMP_AUDIENCE_ID.");
    return res.status(500).json({
      ok: false,
      error: "Signups aren't connected yet. Try again shortly.",
    });
  }

  const body = parseBody(req);

  // Honeypot: a hidden field real visitors never fill in. If it's set,
  // pretend success without ever calling Mailchimp.
  if (body.company) {
    return res.status(200).json({ ok: true });
  }

  const email = String(body.email || "").trim();
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: "Enter a valid email address." });
  }

  const source = typeof body.source === "string" ? body.source.slice(0, 40) : "";

  try {
    const result = await addToMailchimp(config, email, source ? [source] : []);
    if (!result.ok) {
      console.error("Mailchimp error:", result.detail);
      return res.status(result.status || 502).json({ ok: false, error: result.error });
    }
    return res.status(200).json({ ok: true, alreadySubscribed: !!result.alreadySubscribed });
  } catch (err) {
    console.error("Mailchimp request failed:", err);
    return res.status(502).json({
      ok: false,
      error: "Something went wrong — please try again in a moment.",
    });
  }
};
