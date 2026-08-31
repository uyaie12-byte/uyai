# Underground Draft

The website for Underground Draft — a modern African music media brand.
Build spec: [`SKILL.md`](./SKILL.md) (also installed as the
`underground-draft-website` Claude Code skill).

## Status

**Phase 0 (Setup) + Phase 1 (Landing/waitlist page)** — see Skill §7 for the
full phase plan. The full site shell, editorial system, and The Camp haven't
been built yet; `/` currently serves the pre-launch waitlist page and will be
replaced by the real homepage in Phase 2.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 + `next/font`. See
Skill §6 for the full rationale and the planned MDX/forms additions.

## Getting started

```bash
npm install
npm run dev
```

- `/` and `/notify` — the pre-launch waitlist landing (identical content;
  `/notify` is the permanent standalone link for social/ads).
- `POST /api/subscribe` — `{ email, source }` → stores the signup.

## Design tokens

All colors/fonts live in `src/app/globals.css` as CSS variables mapped into
the Tailwind theme (`@theme inline`), so components use classes like
`bg-accent` / `text-fg-muted` rather than hex values — change a token once,
restyle the site. These are a **working placeholder palette** (Skill §9 open
decision); swap the hex values in `globals.css` when a final brand palette
is chosen.

## Newsletter / waitlist storage

`src/lib/subscribers.ts` is a zero-dependency default: it writes to
`data/subscribers.json` (gitignored) for local/dev querying, and — if
`SUBSCRIBE_WEBHOOK_URL` is set — also POSTs every signup to that URL as JSON.
See `.env.example`.

**This does not persist in production as-is.** Serverless hosts (Vercel
included) run API routes on a read-only filesystem, so the local JSON file
won't survive a deploy. Before launch, set `SUBSCRIBE_WEBHOOK_URL` to a
webhook backed by whichever ESP is chosen (Beehiiv/ConvertKit/Mailchimp) or
an Airtable/Google Sheets automation — no code changes needed, see Skill §9.

## Deploying

Recommended: connect this repository to [Vercel](https://vercel.com) (zero
config for Next.js, instant preview URLs per branch/PR). This repo does not
push deploys itself — connect the GitHub repo in the Vercel dashboard once,
and every push to this branch gets a preview URL automatically.
