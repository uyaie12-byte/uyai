import type { Release } from "@/lib/content-types";

/**
 * Real releases from Nigerian indie/underground artists (researched, not
 * invented) — replaced the earlier placeholder catalog once there was
 * actual current music worth pointing at. Ordered newest first. Cover
 * art sourced from official Apple Music listings.
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
    image:
      "https://substackcdn.com/image/fetch/$s_!dwWE!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3cb8cbb1-62f1-46d5-8a5d-dfc4b41cfb95_3000x3000.png",
  },
  {
    slug: "lodu-wine-and-honey",
    title: "Wine & Honey",
    artistName: "Lodù",
    type: "EP",
    date: "2026-07-31",
    blurb: "A seven-track debut that settles into Afro-soul and doesn't rush it — a confident first real introduction.",
    tags: ["Afro-soul", "Afro-fusion"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c9/d9/47/c9d947b4-c674-90d4-4e39-f708962a6fdb/5059449340036.png/1200x1200bb.jpg",
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
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/25/17/95/251795f4-486f-c872-9c13-33d4b853f57c/5063904663424_cover.jpg/1200x1200bb.jpg",
  },
  {
    slug: "danpapa-gta-ikeja-no-go-thief",
    title: "Ikeja (No Go Thief)",
    artistName: "Danpapa GTA",
    type: "Single",
    date: "2026-01-09",
    blurb: "Gritty, specific, very Lagos — a single that sounds like it was written on a danfo.",
    tags: ["Rap"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/c8/b1/b8c8b16a-3cd9-6b49-61dc-97145469a5c9/5063904164204_cover.jpg/1200x1200bb.jpg",
  },
];

export function getRelease(slug: string) {
  return releases.find((r) => r.slug === slug);
}
