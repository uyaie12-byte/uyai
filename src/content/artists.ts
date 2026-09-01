import type { Artist } from "@/lib/content-types";

export const artists: Artist[] = [
  {
    slug: "kaeya",
    name: "KAEYA",
    discipline: "Vocalist",
    location: "Lagos, NG",
    tagline: "Alté-soul with a drum-and-bass undertow.",
    bio: "KAEYA writes like she's narrating a diary she doesn't expect anyone to read — which is exactly why people can't stop listening. Raised between Surulere and a church choir loft, she folds gospel harmony into low-slung, bass-heavy production that never quite sits still. Her live sets are word-of-mouth only; there's no tour poster, just a group chat that grows every time she plays.",
    tags: ["Alté", "Soul", "Lagos"],
    spotlight: true,
    links: [{ label: "Instagram", href: "https://instagram.com" }],
  },
  {
    slug: "obinna-dread",
    name: "Obinna Dread",
    discipline: "Producer",
    location: "Enugu, NG",
    tagline: "Amapiano log drums built from highlife samples.",
    bio: "Obinna started sampling his grandfather's highlife record collection because he couldn't afford new sample packs. Three years later that's the whole sound — amapiano low end under chopped guitar licks that sound decades older than the beat around them. He builds everything on headphones in a one-room studio and refuses to explain the process.",
    tags: ["Amapiano", "Highlife", "Production"],
    spotlight: true,
  },
  {
    slug: "tega-in-stereo",
    name: "Tega In Stereo",
    discipline: "Songwriter",
    location: "Port Harcourt, NG",
    tagline: "Alternative R&B for people who read the credits.",
    bio: "Tega treats a song like a short story — verse as setup, bridge as the turn nobody saw coming. Her EP 'Low Tide' was recorded almost entirely in one week in a friend's living room, and it shows: intimate, unpolished in the right places, built to be heard on headphones at 1am.",
    tags: ["R&B", "Songwriting", "Port Harcourt"],
  },
  {
    slug: "shortwave",
    name: "Shortwave",
    discipline: "DJ",
    location: "Abuja, NG",
    tagline: "Afro-house sets that never announce the drop.",
    bio: "Shortwave built a following by refusing to play what the room asked for — until the room started asking for what she plays instead. Her sets move through afro-house, kwaito, and half-remembered amapiano edits with no visible seams. She's the resident selector at three parties that don't post their location until the day of.",
    tags: ["Afro-house", "DJ", "Abuja"],
  },
  {
    slug: "nnamdi-x",
    name: "Nnamdi X",
    discipline: "Rapper",
    location: "Lagos, NG",
    tagline: "Drill cadences over dusty jazz loops.",
    bio: "Nnamdi X raps like the beat owes him money — fast, specific, unbothered by hooks. His breakout tape 'Draft One' was recorded in a friend's bedroom studio and leaked before it was finished, which he now claims was the plan all along.",
    tags: ["Drill", "Rap", "Lagos"],
  },
  {
    slug: "moyo-analog",
    name: "Moyo Analog",
    discipline: "Multi-disciplinary",
    location: "Ibadan, NG",
    tagline: "Tape hiss, live horns, and no interest in genre.",
    bio: "Moyo records to tape on purpose — the hiss is the point. Part bandleader, part visual artist, she designs every one of her own single covers and refuses to release anything digitally before it's pressed to vinyl first, even in small runs.",
    tags: ["Experimental", "Live", "Ibadan"],
  },
];

export function getArtist(slug: string) {
  return artists.find((a) => a.slug === slug);
}
