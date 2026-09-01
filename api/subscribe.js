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

function serverPrefixFromKey(key) {
  const parts = String(key || "").split("-");
  return parts.length > 1 ? parts[parts.length - 1] : null;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix =
    process.env.MAILCHIMP_SERVER_PREFIX || serverPrefixFromKey(apiKey);
  const doubleOptIn = String(process.env.MAILCHIMP_DOUBLE_OPTIN || "").toLowerCase() === "true";

  if (!apiKey || !audienceId || !serverPrefix) {
    console.error("Mailchimp env vars missing: check MAILCHIMP_API_KEY / MAILCHIMP_AUDIENCE_ID.");
    return res.status(500).json({
      ok: false,
      error: "Signups aren't connected yet. Try again shortly.",
    });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (err) {
      body = {};
    }
  }
  body = body || {};

  // Honeypot: a hidden field real visitors never fill in. If it's set,
  // silently pretend success without calling Mailchimp.
  if (body.company) {
    return res.status(200).json({ ok: true });
  }

  const email = String(body.email || "").trim();
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: "Enter a valid email address." });
  }

  const source = typeof body.source === "string" ? body.source.slice(0, 40) : "";
  const tags = source ? [source] : undefined;

  try {
    const mcRes = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + Buffer.from("anystring:" + apiKey).toString("base64"),
        },
        body: JSON.stringify({
          email_address: email,
          status: doubleOptIn ? "pending" : "subscribed",
          ...(tags ? { tags } : {}),
        }),
      }
    );

    if (mcRes.ok) {
      return res.status(200).json({ ok: true });
    }

    const errBody = await mcRes.json().catch(() => ({}));

    // Already on the list — treat as success, not an error.
    if (errBody.title === "Member Exists") {
      return res.status(200).json({ ok: true, alreadySubscribed: true });
    }

    console.error("Mailchimp error:", mcRes.status, errBody);
    return res.status(502).json({
      ok: false,
      error: errBody.detail || "Something went wrong — please try again in a moment.",
    });
  } catch (err) {
    console.error("Mailchimp request failed:", err);
    return res.status(502).json({
      ok: false,
      error: "Something went wrong — please try again in a moment.",
    });
  }
};
