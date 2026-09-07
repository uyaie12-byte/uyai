import type { ArtistPick } from "@/lib/content-types";

export const artistPicks: ArtistPick[] = [
  {
    slug: "2026-08-kaeya",
    artistName: "KAEYA",
    artistSlug: "kaeya",
    month: "August 2026",
    intro:
      "This month's Artist Pick goes to KAEYA — five things on rotation in her studio right now, in her own words.",
    picks: [
      { title: "Ancestor Log EP", by: "Obinna Dread", note: "I haven't turned this off in two weeks." },
      { title: "Midnight Transit", by: "Larry Uche", note: "My mother played this in the car. It still holds up." },
      { title: "any Yewande Cole", by: "—", note: "I wish more people knew about 'Second Hand Smoke.'" },
      { title: "church choir arrangements", by: "—", note: "Not a song, but it's where half my harmonies come from." },
      { title: "Low Tide", by: "Tega In Stereo", note: "We recorded in the same week, different rooms. Kindred project." },
    ],
  },
];

export function getLatestArtistPick() {
  return artistPicks[0];
}
