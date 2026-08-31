/**
 * Shared content types for The Underground Draft.
 *
 * Plain typed TS data for now (git-versioned, zero external dependency —
 * same rationale as the original stack decision to start with MDX/data
 * files before a headless CMS). Every entry carries the same shape a CMS
 * or MDX frontmatter schema would, so swapping the source later is a
 * content-layer change, not a redesign: see `src/content/*.ts`.
 */

export type Discipline = "Producer" | "Vocalist" | "Songwriter" | "DJ" | "Rapper" | "Multi-disciplinary";

export type Artist = {
  slug: string;
  name: string;
  discipline: Discipline;
  location: string;
  tagline: string;
  bio: string;
  tags: string[];
  spotlight?: boolean;
  links?: { label: string; href: string }[];
};

export type ReleaseType = "Single" | "EP" | "Album";

export type Release = {
  slug: string;
  title: string;
  artistName: string;
  artistSlug?: string;
  type: ReleaseType;
  date: string; // ISO
  blurb: string;
  tags: string[];
  listenHref?: string;
};

export type ArticleCategory = "Interview" | "Review" | "Culture" | "Commentary";

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: ArticleCategory;
  author: string;
  date: string; // ISO
  tags: string[];
  body: string[]; // paragraphs
};

export type Throwback = {
  slug: string;
  title: string;
  artistName: string;
  year: string;
  blurb: string;
  whyItMatters: string;
};

export type ArtistPick = {
  slug: string;
  artistName: string;
  artistSlug?: string;
  month: string; // e.g. "August 2026"
  intro: string;
  picks: { title: string; by: string; note: string }[];
};
