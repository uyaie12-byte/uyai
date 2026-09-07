import type { Release } from "@/lib/content-types";

/**
 * Real releases from Nigerian indie/underground artists (researched, not
 * invented) — replaced the earlier placeholder catalog once there was
 * actual current music worth pointing at. Ordered newest first.
 */
export const releases: Release[] = [
  {
    slug: "osa-feels",
    title: "FEELS",
    artistName: "OSÁ",
    artistSlug: "osa",
    type: "EP",
    date: "2026-09-07",
    blurb:
      "Seven tracks about caring too much, losing the plot, and finding your way back — with Toyé, Stomy, Aema and Nosa along for parts of the ride.",
    tags: ["R&B", "Afrobeat"],
  },
  {
    slug: "lodu-wine-and-honey",
    title: "Wine & Honey",
    artistName: "Lodù",
    type: "EP",
    date: "2026-07-31",
    blurb: "A seven-track debut that settles into Afro-soul and doesn't rush it — a confident first real introduction.",
    tags: ["Afro-soul", "Afro-fusion"],
  },
  {
    slug: "reespect-r-is-for-romance",
    title: "R Is for Romance",
    artistName: "Reespect",
    type: "EP",
    date: "2026-02-13",
    blurb:
      "Bar-heavy rap loosened up with R&B vocals, released alongside a docu-series and a comic book. Ambitious, and it mostly lands.",
    tags: ["Rap", "R&B"],
  },
  {
    slug: "danpapa-gta-ikeja-no-go-thief",
    title: "Ikeja (No Go Thief)",
    artistName: "Danpapa GTA",
    type: "Single",
    date: "2026-01-09",
    blurb: "Gritty, specific, very Lagos — a single that sounds like it was written on a danfo.",
    tags: ["Rap"],
  },
];

export function getRelease(slug: string) {
  return releases.find((r) => r.slug === slug);
}
