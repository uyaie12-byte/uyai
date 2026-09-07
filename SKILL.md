---
name: underground-draft-website
description: Build the Underground Draft music media website — editorial blog, signature content series, live/DJ session hubs, an artist-camp application flow, and a newsletter landing capture — in a dark, high-contrast editorial visual language modeled on NATIVE, Deeds Magazine, and Purp Kulture. Use this whenever building, extending, or restyling the Underground Draft site.
---

# Underground Draft — Website Build Skill

This is a build spec for a Claude Code agent. It packages the brand system, information
architecture, and phased build plan for the Underground Draft website so the site can be
built (or rebuilt/extended) consistently across sessions.

Underground Draft is a modern African music media company: it discovers, documents, and
amplifies music and culture through journalism, visual storytelling, live performances, DJ
sessions, and community. The website is its home base — archive, newsletter funnel, and now
the application portal for its first artist-development residency ("The Camp").

Before building, **re-verify the three reference sites live** (thenativemag.com,
deedsmag.com, purpkulture.com) — layouts change. Use WebFetch/browser tools to check current
nav structure, hero treatment, and card design before locking in components, per the "research
and confirm everything" project rule. Treat the design notes below as a starting hypothesis,
not ground truth.

---

## 1. Brand system

**Name:** Underground Draft
**Vision:** Become a trusted place where people discover artists, understand the culture, and
experience music in new ways — not just report on it.

**Core values:** Music Discovery, Culture First, Creativity, Community, Authenticity,
Storytelling.

**Personality:** Curious, opinionated, stylish, youthful, intentional, niche-before-mainstream.
Write UI copy (buttons, empty states, form labels) in this voice — direct, a little wry, never
corporate.

**Logo & motif:** A vinyl record. Treat it as a recurring system element, not a static mark:
- A subtle vinyl-spin loading/transition animation (CSS/Framer Motion — a rotating record
  disc, ~2–4s per rotation, ease-linear).
- "Now Spinning" as the label for a persistent "currently featured track/story" module.
- "On Rotation" as a recurring homepage/newsletter section.
- Circular crop treatments for artist/DJ imagery in a few key spots (not everywhere — reserve
  it so it stays special).

### Visual language (synthesized from the three references)

All three references share a family resemblance worth adopting wholesale:
- **Near-black backgrounds with off-white/white type** — high contrast, premium-editorial,
  not flat pure black (`#0A0A0A`–`#111111` range reads better than `#000`).
- **Bold, large display headlines**, noticeably heavier than body copy — the size/weight jump
  between headline and body is what gives these sites their "magazine cover" feel.
- **Card-based modular grids** for story previews, each card carrying a category/tag chip
  (e.g. "Cover Story," "Afrobeats," "EP," "Interview").
- **Photography-first** — every article preview has a strong image; treat imagery as load-
  bearing, not decorative.
- **Sticky horizontal nav**, primary categories only (5–7 max), search icon, hamburger on
  mobile.
- **Newsletter/community callouts repeated** through the page, not just in the footer.
- **Generous whitespace despite the dark theme** — dark ≠ cramped; keep line-length and
  padding editorial.
- Trending/ranked list modules and "Load more" pagination (Purp Kulture) are good patterns
  for the Music Discovery and Weekly Recap hubs specifically.

### Design tokens (placeholder — confirm/replace before final launch)

Ship with these as real, working tokens so the site looks finished in review, but flag them
as swappable once an actual brand palette/typeface is chosen:

```
--bg:            #0B0B0C   /* near-black canvas */
--bg-raised:     #16161A   /* cards, nav-on-scroll */
--fg:            #F5F3EE   /* primary text, off-white */
--fg-muted:      #9C9A96   /* secondary text */
--accent:        #E8A33D   /* vinyl-label amber — CTAs, tags, "on rotation" highlights */
--accent-2:      #7C5CFF   /* optional secondary accent — "underground" violet, sparingly */
--border:        #2A2A2E
```

Typography: a bold grotesk/display face for headlines (e.g. Space Grotesk, Archivo, or Anton
at large sizes) paired with a clean humanist sans for body copy (e.g. Inter or General Sans).
Load via `next/font` (Google Fonts) so there's no external stylesheet dependency. Headlines set
in tight tracking/leading; body copy in a comfortable 17–18px / 1.6 line-height.

---

## 2. Information architecture

```
/                      Home
/articles                Editorial hub (filterable)
/articles/[slug]         Article detail
/discovery                Music Discovery hub
/discovery/[series]       Series page (Hidden Gems, Deep Cuts, New Music Friday, etc.)
/commentary                Commentary hub (Rollout Breakdown, opinion, analysis)
/sessions/live             Live Sessions archive
/sessions/dj               DJ Sessions archive
/culture                   Visual storytelling + "The Designer vs The Art"
/the-camp                  The Camp — flagship landing page
/the-camp/apply            Camp application form
/community                 Newsletter + WhatsApp/Snapchat community links
/about                      Brand story, values, team
/contact                    Press / partnerships / advertising
```

Primary nav (5–7 items max, matching the references' restraint): **Music · Commentary ·
Sessions · Culture · The Camp · [search icon]**. Community + About + Contact live in the
footer and a secondary/utility nav, not the main bar.

### Content pillars → hub mapping

Map every blueprint content pillar and signature series to a real route so nothing from the
brand doc gets lost:

| Blueprint item | Route |
|---|---|
| Album/song reviews, editorials, interviews, news, think pieces, essays, recaps | `/articles` (tag-filtered) |
| Artists You Should Know, Hidden Gems, Songs You Missed, New Music Friday, Producer Spotlight, Underground Playlist, Campus Artist Spotlight | `/discovery/[series]` |
| Rollout Breakdown, album reactions, industry analysis | `/commentary` |
| On Rotation | Homepage module + `/discovery/on-rotation` |
| Weekly Recap | `/commentary/weekly-recap` (or `/articles?tag=weekly-recap`) |
| Deep Cuts | `/discovery/deep-cuts` |
| The Designer vs The Art, Creative Process | `/culture` |
| Live Sessions | `/sessions/live` |
| DJ Sessions | `/sessions/dj` |
| WhatsApp / Snapchat community | `/community` |
| The Camp (residency) | `/the-camp`, `/the-camp/apply` |

---

## 3. Page specs

**Home (`/`)**
1. Hero — current cover story: full-bleed image, headline, dek, category tag.
2. "Now Spinning" strip — the vinyl-motif module, one featured track/story.
3. Latest grid — 6–9 article cards across pillars, tag chips visible.
4. "On Rotation" module — weekly picks (songs/albums/producers), ranked-list style.
5. The Camp promo band — short pitch + "Apply now" / "Get notified" CTA, visually distinct
   (this is the site's #1 conversion goal right now — treat it like a hero, not a footer note).
6. Newsletter capture block (see §4).
7. Sessions teaser — latest Live/DJ session video + link to archive.
8. Footer — nav, social icons (IG, X, YouTube, TikTok), WhatsApp/Snapchat community links,
   newsletter form repeated.

**Articles hub (`/articles`)** — filter bar by category/tag, card grid, load-more pagination
(no full page reloads).

**Article detail (`/articles/[slug]`)** — hero image, headline, dek, author + date + tags,
body (rich text/MDX — support embeds for Spotify/YouTube), related articles (3, same tag),
share row, newsletter CTA at the ~60% scroll mark.

**Discovery hub + series pages** — same card grid pattern as Articles, scoped by series; each
series page gets its own one-line description of what it's for (pull from the blueprint,
e.g. Deep Cuts: "Amazing non-single songs from established artists — go beyond the hits.").

**Sessions (`/sessions/live`, `/sessions/dj`)** — video-forward grid (embedded players),
minimal chrome, moody imagery consistent with "warehouse-inspired" / "intimate session"
descriptions in the blueprint. Each entry: artist/DJ name, one still, embedded video, date.

**Culture (`/culture`)** — "The Designer vs The Art" and Creative Process features: cover art
breakdowns, designer/creative interviews. Slightly more visual/portfolio-like card treatment
than the news-y Articles hub.

---

## 4. The Camp (residency) flow — priority feature

`/the-camp` is the flagship landing page for the artist-development residency. It should feel
like a standalone event brand living under the Underground Draft umbrella (own hero, own
accent moment) while keeping the same type system, nav, and footer.

Sections:
1. Hero — camp name/edition, one-line pitch, dates/location (placeholder until confirmed),
   primary CTA "Apply now."
2. About the camp — format, who it's for (producers/singers/songwriters), what happens
   (workshops, mentorship, final showcase).
3. Curriculum/tracks — if defined; otherwise a placeholder structure to fill in later.
4. Mentors/faculty — grid of bios/photos (placeholder entries acceptable at build time).
5. Past editions/gallery — leave as an empty-state component ("First cohort — photos coming
   soon") since this is likely edition #1.
6. FAQ — accordion.
7. Apply CTA — repeated, links to `/the-camp/apply`.

`/the-camp/apply` — the application/registration form. Fields to include by default (confirm
exact list with Uyai before final launch):
name, email, phone, city/location, discipline (producer/vocalist/songwriter/DJ/other),
portfolio/SoundCloud/Spotify link, one short-answer question ("Why do you want to attend?"),
consent checkbox for future communications. Submit → confirmation screen + confirmation email.
Store submissions somewhere queryable from day one (see §6) — don't let applications land only
in an inbox.

---

## 5. Newsletter / landing capture

Two distinct surfaces, both needed:

1. **A standalone pre-launch/announcement landing page** — single-purpose, minimal chrome
   (logo, one line of copy, email field, submit). Purpose: capture emails for "newsletters and
   announcements such as the camp" before the full site is live, or to run as an ad-landing
   page independent of the full site. Build this as its own route (`/notify` or similar) so it
   can be linked from social/ads on its own.
2. **A persistent capture module** embedded on Home, at the bottom of every article, and in
   the footer once the full site is live — same email-only form, low friction.

Both forms should hit the same subscriber list. Don't build two separate audiences by
accident.

---

## 6. Tech stack

Recommended default — practical to build in Claude Code, cheap to host, easy to hand off:

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS, with the tokens in §1 wired into `tailwind.config` as theme colors
  and fonts (not hard-coded hex values scattered through components)
- **Content:** MDX files for articles/series entries at first (fast to seed, git-versioned,
  zero external dependency). Structure content as data (frontmatter: title, dek, image, tags,
  date, author) so swapping in a headless CMS (Sanity/Contentful) later is a content-layer
  change, not a redesign.
- **Forms:** Camp application + newsletter — start with a serverless API route
  (`/app/api/*`) that writes to a simple store (Airtable or Google Sheets via API, or a hosted
  form service like Formspree) so submissions are queryable without standing up a database.
  Confirm which email/newsletter tool (Beehiiv, ConvertKit, Mailchimp, etc.) Uyai wants before
  wiring the final integration — build the form UI and a working stub endpoint either way.
- **Motion:** Framer Motion, used sparingly — vinyl-spin, hover states, page-transition
  fades. Don't over-animate; the references are confident, not flashy.
- **Deployment:** Vercel (zero-config for Next.js, generous free tier, instant preview URLs
  per PR — useful for showing Uyai progress).
- **Fonts:** load via `next/font/google` (see §1) — no external font CDN.

---

## 7. Build phases

Work in this order, and treat each phase as a shippable checkpoint (deploy a preview after
each one so progress is visible, not just described):

**Phase 0 — Setup**
Scaffold Next.js + TypeScript + Tailwind. Wire design tokens from §1 into the Tailwind theme.
Set up `next/font` for the type pairing. Get a blank page deployed to Vercel first, before any
real content, so the pipeline is proven.

**Phase 1 — Landing/waitlist page**
Build the standalone notify/waitlist page first (§6, item 1): logo, vinyl motif, one-liner,
email capture, working submit → confirmation state. This is the fastest path to something
Uyai can share publicly while the full site is built out. Ship this before Phase 2.

**Phase 2 — Core shell**
Global nav, footer, dark theme applied site-wide, homepage structure with placeholder content
in every module from §3. Get the full page skeleton navigable end-to-end before writing real
articles.

**Phase 3 — Editorial system**
Article card component, article detail template, MDX pipeline, Articles hub with filtering.
Seed with 6–10 placeholder articles covering a spread of the blueprint's content pillars so
the grid and filters are demonstrably working, not empty.

**Phase 4 — Discovery, Commentary, Culture, Sessions hubs**
Reuse the card/grid system from Phase 3 for each hub in the mapping table (§2). Seed 2–3
placeholder entries per hub.

**Phase 5 — The Camp**
Build `/the-camp` and `/the-camp/apply` per §5, including the working application form and
its submission storage.

**Phase 6 — Community + About + Contact**
Lower-priority static/utility pages.

**Phase 7 — Polish pass**
Responsive check at mobile/tablet/desktop, vinyl-spin loading transition, hover states,
newsletter module wired everywhere, basic SEO (meta tags, OG images per article), accessibility
pass (contrast on the dark theme, focus states, alt text).

---

## 8. Acceptance checklist

Before calling any phase done, confirm:
- [ ] Design tokens (not raw hex) are used throughout — changing `--accent` in one place
      restyles the whole site.
- [ ] Every route in §2's IA exists and is reachable from nav or footer (no orphan pages).
- [ ] Card component is shared/reused across Articles, Discovery, Commentary, Culture — not
      four near-duplicate components.
- [ ] Newsletter form and Camp application form both actually submit somewhere and show a
      real confirmation state (no dead-end forms).
- [ ] Site is usable on mobile — nav collapses, cards stack, forms are usable one-handed.
- [ ] Contrast between `--fg` and `--bg` passes WCAG AA at body-text size.
- [ ] A fresh `next build` completes with no errors before considering a phase shipped.

---

## 9. Open decisions to confirm with Uyai (don't silently guess on these)

- Final color palette and typeface (tokens above are a working placeholder).
- The Camp: actual dates, location, price/free, application deadline, mentor list.
- Which newsletter/ESP tool to integrate (Beehiiv/ConvertKit/Mailchimp/other).
- Domain name / hosting account access.
- Whether MDX-as-content is acceptable long-term or a CMS is wanted from day one (affects
  who on the team can publish articles without a developer).
