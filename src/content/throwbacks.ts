import type { Throwback } from "@/lib/content-types";

export const throwbacks: Throwback[] = [
  {
    slug: "midnight-transit",
    title: "Midnight Transit",
    artistName: "Larry Uche",
    year: "2011",
    blurb: "A one-off single that never got a proper release and still shows up on the right playlists.",
    whyItMatters:
      "Before 'alté' had a name, records like this were already doing the work — guitar-driven, unhurried, allergic to the trends around it. Fifteen years on it sounds less dated than most of what charted that year.",
  },
  {
    slug: "iron-gate",
    title: "Iron Gate",
    artistName: "The Recess Collective",
    year: "2015",
    blurb: "A five-piece live band's only recorded output, self-released on a burned CD-R.",
    whyItMatters:
      "The Recess Collective broke up before anyone outside their campus knew they existed. What's left is one recording, badly mixed, that a generation of producers still quietly cite as an influence.",
  },
  {
    slug: "harmattan-freestyle",
    title: "Harmattan Freestyle",
    artistName: "Debo Vintage",
    year: "2013",
    blurb: "A radio freestyle that outlived the show it aired on.",
    whyItMatters:
      "The station shut down in 2016. The freestyle survived as a ripped MP3 passed around Bluetooth and, later, WhatsApp — a reminder that distribution doesn't have to be official to work.",
  },
  {
    slug: "second-hand-smoke",
    title: "Second Hand Smoke",
    artistName: "Yewande Cole",
    year: "2017",
    blurb: "An EP that sold out its only vinyl pressing in a week and was never repressed.",
    whyItMatters:
      "Yewande Cole stepped away from music two years later. 'Second Hand Smoke' is the clearest evidence of what could have been next — and proof the underground doesn't always get a second act.",
  },
];

export function getThrowback(slug: string) {
  return throwbacks.find((t) => t.slug === slug);
}
