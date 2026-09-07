import type { Throwback } from "@/lib/content-types";

/**
 * Real tracks worth another listen (researched, not invented) — replaced
 * the earlier placeholder catalog. The first four are the picks Uyai
 * named directly; the last two are hidden gems pulled in from the wider
 * underground/alté scene. Homepage shows the first four via slice(0,4),
 * so keep that order intentional.
 */
export const throwbacks: Throwback[] = [
  {
    slug: "odunsi-the-engine-star-signs",
    title: "Star Signs",
    artistName: "Odunsi (The Engine) ft. Runtown",
    year: "2018",
    blurb: "Two verses of nascent love hedged entirely in zodiac talk, from Odunsi's debut album Rare.",
    whyItMatters:
      "Rare helped define what \"alté\" even meant before the word was doing overtime online — Star Signs is the least serious-sounding track on it and one of the most quietly influential.",
  },
  {
    slug: "elestee-poisn",
    title: "POISN",
    artistName: "Elestee",
    year: "2023",
    blurb: "The EP that leaned harder into Afropop after her more alternative debut, released the same year she signed to Mavin.",
    whyItMatters:
      "POISN is the hinge in Elestee's catalogue — proof a mechanical engineering graduate turned musical chameleon could write a hook as easily as she could write around one.",
  },
  {
    slug: "mavo-tumo-weto",
    title: "Tumo Weto",
    artistName: "Mavo",
    year: "2023",
    blurb: "A deep cut off his debut album Ukanigbe that took over two years to actually become a hit.",
    whyItMatters:
      "Tumo Weto reached No. 1 on Apple Music Nigeria in January 2026 — more than two years after release. A reminder that a real song doesn't need a release-week push to eventually find its audience.",
  },
  {
    slug: "odumodublvck-woto-woto-seasoning",
    title: "Woto Woto Seasoning",
    artistName: "Odumodublvck ft. Black Sherif",
    year: "2025",
    blurb: "The Eziokwu deluxe cut that paired Nigeria's loudest rapper with Ghana's most melodic one.",
    whyItMatters:
      "Odumodublvck already redefined what Nigerian rap could sound like on Eziokwu proper — Woto Woto Seasoning is the victory-lap bonus track that still hits like an album opener.",
  },
  {
    slug: "tim-lyre-i-do",
    title: "I Do",
    artistName: "Tim Lyre",
    year: "2024",
    blurb: "A log-drum-powered alté cut from one of Lagos alté's most consistent voices, part of the Chop Life Crew.",
    whyItMatters:
      "Tim Lyre traded a law degree for the alté underground and has been one of its steadiest songwriters since — I Do is the kind of unflashy record that keeps a scene's foundation solid.",
  },
  {
    slug: "oluwamillar-alubarika",
    title: "Alubarika",
    artistName: "OluwaMillar",
    year: "2024",
    blurb: "A Yoruba-language rap breakthrough single that reads as much like a prayer as a flex.",
    whyItMatters:
      "OluwaMillar raps in the lineage of Olamide and Reminisce at a moment when Afrobeats has mostly moved past rap — Alubarika is proof that lineage isn't finished.",
  },
];

export function getThrowback(slug: string) {
  return throwbacks.find((t) => t.slug === slug);
}
