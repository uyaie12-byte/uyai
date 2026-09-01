# The Underground Draft — Pre-Launch Landing Page

A standalone, temporary pre-launch landing page for **The Underground Draft**.
This is **separate** from the main Underground Draft website (which is being
built independently and is not finished yet). This page exists only to
capture email signups before the full site launches, and will be swapped
out once the main site is ready.

## What's here

- `index.html` — the entire landing page (self-contained HTML/CSS/JS, no
  build step, no dependencies).
- `logo-mark.png` — the real Underground Draft vinyl icon, used in the
  header/footer.
- `logo-badge.png` — the full wordmark badge (vinyl + "UNDERGROUND DRAFT"
  ring text), baked into the OG image; kept as a spare asset for future use.
- `favicon.ico`, `favicon-32x32.png`, `favicon-192.png`, `favicon-512.png`,
  `apple-touch-icon.png` — favicon set generated from the real logo.
- `og-image.png` — 1200×630 Open Graph / Twitter card image, built from the
  real logo badge.
- `site.webmanifest` — basic PWA/favicon manifest.

## Deploying

This is static — deploy `index.html` and the asset files as-is to Vercel,
Netlify, GitHub Pages, or any static host. No build step required.

## Wiring up the email signup

Both signup forms (hero + footer) currently validate the email client-side,
show a polished success state, and store the address in `localStorage` as a
demo fallback — **no email is actually sent anywhere yet**.

To go live, open `index.html`, find the `FORM_ENDPOINT` constant near the
bottom of the file, and point it at your email provider's form-submission
endpoint (Mailchimp, Beehiiv, ConvertKit, Formspree, etc.):

```js
var FORM_ENDPOINT = "https://formspree.io/f/xxxxxxx";
```

Once set, submissions POST there as JSON (`{ "email": "..." }`) instead of
just being stored locally.

## Before going live

- Replace the `https://theundergrounddraft.com/` placeholders in the
  `<head>` (canonical URL, `og:url`, `og:image`, `twitter:image`) with the
  real domain this page is deployed to.
- Social links in the footer already point to the real Instagram
  (`instagram.com/theugdraft`) and X (`x.com/theugdraft`) accounts. Add
  TikTok/YouTube links once those accounts exist.
- Set `FORM_ENDPOINT` as described above.
