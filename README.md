# The Underground Draft

The website for The Underground Draft — an independent African music &amp;
culture platform. Editorial, signature series, artist discovery, and a
newsletter, in a zine/print visual language (cream paper, ink black, poster
red, condensed display type, grain/halftone texture).

> **Note on history:** the site was originally scaffolded from
> [`SKILL.md`](./SKILL.md) (dark amber/violet "editorial" system modeled on
> NATIVE/Deeds/Purp Kulture). A later, more specific creative brief —
> referencing print/zine flyers and an Arres Music–style UI — replaced that
> visual system with the one described below. `SKILL.md` is kept for the
> original information-architecture/content-model thinking, but its palette
> and homepage layout notes are superseded; treat this README as current.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 + `next/font`. Content
is plain typed TS data under `src/content/*.ts` for now (git-versioned, zero
external dependency) — see **Content model** below for how to add real
entries or swap in a CMS later.

## Getting started

```bash
npm install
npm run dev
```

## Routes

```
/                 Home
/the-draft        Editorial hub (interviews, reviews, culture, commentary)
/the-draft/[slug] Article detail
/new-music        New release hub
/new-music/[slug] Release detail
/artists          Artist directory
/artists/[slug]   Artist profile
/archive          Throwback archive
/archive/[slug]   Throwback detail
/about            Brand story + vision + contact
```

Nav is deliberately five items: **The Draft · New Music · Artists · Archive
· About**. Every one of those is a real page — no orphan links.

## Design system

- **Tokens** — `src/app/globals.css`: `--paper` / `--ink` / `--red` /
  `--charcoal` / `--muted` / `--muted-2`, mapped into the Tailwind theme via
  `@theme inline`. Components use `bg-paper`, `text-ink`, `text-red`, etc. —
  never raw hex — so the palette changes in one place.
- **Type** — Anton (display, oversized headlines), Archivo (body), IBM Plex
  Mono (the small "technical/editorial" labels — section numbers, dates,
  tags — that sit next to the huge headlines).
- **Texture** — a fixed film-grain overlay (`.grain` on `<body>`, SVG
  turbulence, no image asset) plus halftone/stripe/grid patterns used on
  `ImagePlaceholder` (see below).
- **Motifs** — `BrandMark` (the vinyl-seal wordmark logo), `StampBadge`
  (rotated circular stamps for "NEW" / featured callouts), `Tag` (square
  category chips — no rounded pills), `Rule` (heavy/thin horizontal rules).
- **No real photography yet.** `ImagePlaceholder` renders a bordered,
  textured frame with the item's own name set in type instead of a stock
  photo or a broken `<img>` — swap it for a real `next/image` per entry
  once photography exists; keep the border/ratio/registration-tick frame.

## Content model

Typed data + a couple of helpers per content type, under `src/content/`:

- `artists.ts` — `Artist` (bio, discipline, tags, spotlight flag)
- `releases.ts` — `Release` ("New Music": singles/EPs/albums)
- `articles.ts` — `Article` ("The Draft": Interview/Review/Culture/Commentary)
- `throwbacks.ts` — `Throwback` (the Archive)
- `artist-picks.ts` — `ArtistPick` (the recurring "Artist Pick" feature)

Shared types are in `src/lib/content-types.ts`. To add a real entry, add an
object to the relevant array — the hub pages, homepage sections, and detail
routes (`generateStaticParams`) all pick it up automatically. Swapping this
for MDX or a headless CMS later is a content-layer change, not a redesign,
as long as the same shape is preserved.

All seed content (artist names, quotes, releases) is invented placeholder
copy for demo purposes — replace with real artists/releases before launch.

## Newsletter

`src/lib/subscribers.ts` + `POST /api/subscribe`: writes to
`data/subscribers.json` (gitignored, local/dev only) and, if
`SUBSCRIBE_WEBHOOK_URL` is set, also POSTs every signup there as JSON — see
`.env.example`. **This does not persist in production as-is**: serverless
hosts (Vercel included) run API routes on a read-only filesystem, so the
local JSON file won't survive a deploy. Before launch, set
`SUBSCRIBE_WEBHOOK_URL` to a webhook backed by whichever ESP is chosen
(Beehiiv/ConvertKit/Mailchimp) or an Airtable/Google Sheets automation — no
code changes needed.

The form is used in four places (`EmailCaptureForm`'s `source` prop tags
which): the homepage Newsletter section, every article footer, the site
footer, and the About page — all the same subscriber list.

## Deploying

Connect this repository to [Vercel](https://vercel.com) (zero-config for
Next.js, instant preview URLs per branch/PR). This repo does not push
deploys itself — connect the GitHub repo in the Vercel dashboard once, and
every push to this branch gets a preview URL automatically.
