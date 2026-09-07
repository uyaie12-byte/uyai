import type { ArtistPick } from "@/lib/content-types";

/**
 * Real tracks, framed in our own editorial voice rather than as an
 * artist's own words — we don't have OSÁ's actual picks, and putting a
 * first-person quote in a real person's mouth without one would be a
 * fabrication, not an editorial call. Ties the section to the current
 * spotlight/cover story without inventing a quote to do it.
 */
export const artistPicks: ArtistPick[] = [
  {
    slug: "2026-09-osa",
    artistName: "OSÁ",
    artistSlug: "osa",
    month: "September 2026",
    intro: "OSÁ's FEELS just landed — five more real ones we've had on rotation around it this month.",
    picks: [
      { title: "Wine & Honey", by: "Lodù", note: "Same unhurried, patient energy as FEELS — a real Afro-soul debut." },
      {
        title: "Woto Woto Seasoning",
        by: "Odumodublvck ft. Black Sherif",
        note: "The victory-lap energy FEELS never reaches for, on purpose.",
      },
      { title: "I Do", by: "Tim Lyre", note: "Same log-drum, no-rush songwriting instinct." },
      { title: "Alubarika", by: "OluwaMillar", note: "Proof the scene's still got range beyond R&B." },
      { title: "Star Signs", by: "Odunsi (The Engine) ft. Runtown", note: "The alté lineage FEELS is quietly part of." },
    ],
  },
];

export function getLatestArtistPick() {
  return artistPicks[0];
}
