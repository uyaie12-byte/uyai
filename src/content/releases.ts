import type { Release } from "@/lib/content-types";

export const releases: Release[] = [
  {
    slug: "kaeya-low-light",
    title: "Low Light",
    artistName: "KAEYA",
    artistSlug: "kaeya",
    type: "Single",
    date: "2026-08-14",
    blurb: "Three minutes of church-loft harmony over a bassline that refuses to resolve.",
    tags: ["Alté", "Soul"],
  },
  {
    slug: "obinna-dread-ancestor-log",
    title: "Ancestor Log",
    artistName: "Obinna Dread",
    artistSlug: "obinna-dread",
    type: "EP",
    date: "2026-08-09",
    blurb: "Five tracks of amapiano log drum built entirely from a highlife sample crate.",
    tags: ["Amapiano", "Highlife"],
  },
  {
    slug: "tega-low-tide",
    title: "Low Tide",
    artistName: "Tega In Stereo",
    artistSlug: "tega-in-stereo",
    type: "EP",
    date: "2026-08-02",
    blurb: "Recorded in a week, in a living room. Sounds like it. In the best way.",
    tags: ["R&B"],
  },
  {
    slug: "nnamdi-x-draft-one",
    title: "Draft One",
    artistName: "Nnamdi X",
    artistSlug: "nnamdi-x",
    type: "Album",
    date: "2026-07-27",
    blurb: "The tape that leaked before it was finished — now the finished version, officially.",
    tags: ["Drill", "Rap"],
  },
  {
    slug: "moyo-analog-tape-no-4",
    title: "Tape No. 4",
    artistName: "Moyo Analog",
    artistSlug: "moyo-analog",
    type: "Single",
    date: "2026-07-19",
    blurb: "Live horns, hiss and all — pressed to a run of 100 before it ever went digital.",
    tags: ["Experimental"],
  },
  {
    slug: "shortwave-radio-edit-vol-2",
    title: "Radio Edit, Vol. 2",
    artistName: "Shortwave",
    artistSlug: "shortwave",
    type: "EP",
    date: "2026-07-11",
    blurb: "Four afro-house edits from sets she's played but never posted.",
    tags: ["Afro-house", "DJ"],
  },
];

export function getRelease(slug: string) {
  return releases.find((r) => r.slug === slug);
}
