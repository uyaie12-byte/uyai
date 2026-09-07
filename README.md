# The Underground Draft — Pre-Launch Landing Page

A standalone, temporary pre-launch landing page for **The Underground Draft**.
This is **separate** from the main Underground Draft website (which is being
built independently and is not finished yet). This page exists only to
capture email signups before the full site launches, and will be swapped
out once the main site is ready.

## What's here

- `index.html` — the entire landing page (self-contained HTML/CSS/JS, no
  build step, no front-end dependencies).
- `api/subscribe.js` — a Vercel serverless function both signup forms POST
  to. It adds the email to a Mailchimp audience server-side, so the API key
  never reaches the browser.
- `logo-mark.png` — the real Underground Draft vinyl icon, used in the
  header/footer.
- `logo-badge.png` — the full wordmark badge (vinyl + "UNDERGROUND DRAFT"
  ring text), baked into the OG image; kept as a spare asset for future use.
- `favicon.ico`, `favicon-32x32.png`, `favicon-192.png`, `favicon-512.png`,
  `apple-touch-icon.png` — favicon set generated from the real logo.
- `og-image.png` — 1200×630 Open Graph / Twitter card image, built from the
  real logo badge.
- `site.webmanifest` — basic PWA/favicon manifest.
- `.env.example` — template for the Mailchimp environment variables (copy to
  `.env` for local dev with `vercel dev`; never commit real values).

## Deploying

This needs a host that runs the `/api/subscribe` serverless function
alongside the static files — **Vercel** is the easiest fit (it auto-detects
the `api/` folder, no config needed). Netlify/Cloudflare Pages work too but
`api/subscribe.js` would need porting to their function format first, so
Vercel is the path of least resistance.

1. Push this repo to Vercel (import the GitHub repo, or `vercel deploy`
   from this directory).
2. Set the three Mailchimp environment variables (below) in the Vercel
   project's **Settings → Environment Variables**, for the Production
   environment.
3. Redeploy so the function picks up the new env vars.

## Connecting Mailchimp (do this to go live)

1. **Create an Audience** in Mailchimp if you don't have one yet
   (Audience → All contacts → Create Audience).
2. **Get an API key**: Account → Extras → API keys → Create A Key. It looks
   like `abc123def456...-us21` — the `-us21` suffix at the end is your
   server prefix.
3. **Get the Audience ID**: Audience → All contacts → Settings → Audience
   name and defaults. Listed as "Audience ID".
4. In the Vercel dashboard, add these environment variables:
   - `MAILCHIMP_API_KEY` — the full key from step 2
   - `MAILCHIMP_AUDIENCE_ID` — the ID from step 3
   - (`MAILCHIMP_SERVER_PREFIX` is optional — it's inferred automatically
     from the suffix of the API key, so you only need to set it if that
     inference is ever wrong.)
5. Redeploy. Both forms on the page now add signups straight to that
   Mailchimp audience.

**Never paste the API key into the HTML, into chat, or commit it to git.**
It only ever belongs in the Vercel project's environment variables (or a
local, gitignored `.env` file — see `.env.example`).

By default, submissions are subscribed immediately (Mailchimp status
`subscribed`). To require double opt-in (a confirmation email before
they're subscribed) instead, set `MAILCHIMP_DOUBLE_OPTIN=true`.

Each form tags its signups on the way in — `landing-hero` or
`landing-newsletter` — so you can see in Mailchimp which section of the
page people signed up from.

## Sending the newsletter

This page only handles **capturing** signups — actually sending campaigns
to the list happens entirely inside Mailchimp itself (Campaigns → Create
Campaign), the same as it would for any other Mailchimp audience. There's
nothing to configure here for that part.

## Local development

```
npm i -g vercel   # if you don't have it
vercel dev
```

`vercel dev` reads `.env` locally (copy `.env.example` and fill in real
values) and serves `index.html` plus `api/subscribe.js` together on
`localhost`, exactly as it runs in production.

## Before going fully live

- Replace the `https://theundergrounddraft.com/` placeholders in
  `index.html`'s `<head>` (canonical URL, `og:url`, `og:image`,
  `twitter:image`) with the real domain this page is deployed to.
- Social links in the footer already point to the real Instagram
  (`instagram.com/theugdraft`) and X (`x.com/theugdraft`) accounts. Add
  TikTok/YouTube links once those accounts exist.
- Set the three Mailchimp environment variables as described above.
