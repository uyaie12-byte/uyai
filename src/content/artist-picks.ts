import type { ArtistPick } from "@/lib/content-types";

/**
 * "On Rotation" — what we're actually playing right now, in our own
 * editorial voice. Not tied to a single featured artist (see the
 * ArtistSpotlightSection for that), so artistName/artistSlug stay unset
 * here — the section renders the brand mark instead of a photo, and
 * skips the "View profile" link when there's no artist to point to.
 */
export const artistPicks: ArtistPick[] = [
  {
    slug: "2026-09-on-rotation",
    month: "September 2026",
    intro: "No theme, no tie-in — just two real ones we've had on repeat this month.",
    picks: [
      { title: "Attention", by: "Fola", note: "Afrosounds, smooth and unhurried — his first since \"Ginger Me\" properly landed." },
      { title: "Back 2 U", by: "Seyi Vibez", note: "The kind of hook that's stuck for a week before you've noticed." },
    ],
  },
];

export function getLatestArtistPick() {
  return artistPicks[0];
}
