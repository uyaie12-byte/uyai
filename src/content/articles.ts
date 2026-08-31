import type { Article } from "@/lib/content-types";

export const articles: Article[] = [
  {
    slug: "kaeya-interview-nobody-was-supposed-to-hear-this",
    title: "Nobody Was Supposed To Hear This",
    dek: "KAEYA on writing songs like diary entries, and what happened when the group chat found out.",
    category: "Interview",
    author: "Chidera Obi",
    date: "2026-08-20",
    tags: ["Interview", "Alté"],
    body: [
      "KAEYA didn't plan on anyone hearing 'Low Light.' It was a voice memo, recorded on a Tuesday, sent to exactly four people. Three months later it's the song a growing group chat quotes at each other unprompted.",
      "\"I write like nobody's going to hear it,\" she says. \"The second I think about an audience, the song gets worse. So I just... don't think about it until it's too late to lie to myself.\"",
      "That instinct is the through-line of everything she's released so far — unfiltered, harmonically dense, allergic to the radio edit. We talked about church choir loft, the myth of the 'organic' come-up, and why she still won't announce her own shows.",
    ],
  },
  {
    slug: "review-ancestor-log",
    title: "Ancestor Log Is A Sample Crate As Time Machine",
    dek: "Obinna Dread's new EP turns his grandfather's highlife records into amapiano's future.",
    category: "Review",
    author: "Femi Adewale",
    date: "2026-08-11",
    tags: ["Review", "Amapiano"],
    body: [
      "There's a version of this EP that's a novelty — 'producer samples grandpa's records' is a pitch, not a project. 'Ancestor Log' is not that version.",
      "What Obinna Dread does across five tracks is closer to translation than sampling: guitar licks from a 1978 highlife pressing, chopped and re-pitched until they sit inside a log drum pattern like they were always meant to be there.",
      "It shouldn't work as well as it does. The best compliment I can give it: by track three, you stop noticing which parts are 40 years old.",
    ],
  },
  {
    slug: "culture-the-living-room-studio-era",
    title: "The Living Room Studio Era",
    dek: "Why the best EPs of the year were recorded in one week, in someone's apartment, with the neighbors probably complaining.",
    category: "Culture",
    author: "Amaka Chukwu",
    date: "2026-08-05",
    tags: ["Culture", "Scene Report"],
    body: [
      "Ask five emerging artists where they recorded their last project and at least three will say some version of: a living room, a bedroom, a friend's spare room with a mattress against the wall for sound treatment.",
      "This isn't a budget story, or not only one. It's a deliberate rejection of the polished studio session in favor of something rougher and faster — a project finished before the idea has time to get precious.",
      "Tega In Stereo's 'Low Tide' is maybe the clearest example this year: recorded in a week, mixed by a friend, released with almost no promotion, and it's one of the most talked-about EPs on this list.",
    ],
  },
  {
    slug: "commentary-the-drill-cadence-problem",
    title: "The Drill Cadence Problem, And Why Nnamdi X Doesn't Have It",
    dek: "A lot of Nigerian drill sounds identical right now. 'Draft One' is a reminder that it doesn't have to.",
    category: "Commentary",
    author: "Femi Adewale",
    date: "2026-07-29",
    tags: ["Commentary", "Drill"],
    body: [
      "There's a pocket, a specific triplet cadence, that's become shorthand for 'drill' in the current wave — and it's starting to flatten everything it touches.",
      "'Draft One' doesn't avoid the pocket entirely, but Nnamdi X treats it as one tool among several, snapping in and out of double-time over loops that sound pulled from a dusty jazz record rather than a drill pack.",
      "It's a small thing. It's also the difference between a tape that sounds like a scene and one that sounds like an artist.",
    ],
  },
  {
    slug: "interview-shortwave-the-room-decides-nothing",
    title: "The Room Decides Nothing",
    dek: "Shortwave on reading a crowd, ignoring a crowd, and why her parties don't post the address until the day of.",
    category: "Interview",
    author: "Chidera Obi",
    date: "2026-07-22",
    tags: ["Interview", "DJ"],
    body: [
      "\"People think reading the room means giving them what they came for,\" Shortwave says. \"Sometimes it means giving them something they didn't know they wanted yet, and trusting they'll catch up.\"",
      "That trust has built her a following that shows up without knowing the location in advance — a logistics nightmare by design, meant to keep the parties feeling like something you found, not something that found you.",
    ],
  },
  {
    slug: "culture-pressed-to-vinyl-first",
    title: "Pressed To Vinyl First",
    dek: "Moyo Analog won't release a song digitally until it exists on a physical record. We asked why.",
    category: "Culture",
    author: "Amaka Chukwu",
    date: "2026-07-15",
    tags: ["Culture", "Vinyl"],
    body: [
      "In an era where a song can be everywhere within an hour of finishing it, Moyo Analog's rule sounds almost perverse: nothing goes digital until it's been pressed to a small vinyl run first, even if that run is a hundred copies and takes six weeks.",
      "\"It slows me down in a way that's good for the work,\" she says. \"If I know it's permanent before anyone hears it, I make different decisions.\"",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
