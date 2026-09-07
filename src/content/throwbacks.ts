import type { Throwback } from "@/lib/content-types";

/**
 * Real tracks worth another listen (researched, not invented) — replaced
 * the earlier placeholder catalog. The first four are the picks Uyai
 * named directly; the last two are hidden gems pulled in from the wider
 * underground/alté scene. Homepage shows the first four via slice(0,4),
 * so keep that order intentional. Cover art sourced from official Apple
 * Music listings.
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
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/28/63/b8/2863b87d-8d64-e11a-c9f1-98a88a6a21b4/5060450066839.png/1200x1200bb.jpg",
  },
  {
    slug: "elestee-poisn",
    title: "POISN",
    artistName: "Elestee",
    year: "2023",
    blurb: "The EP that leaned harder into Afropop after her more alternative debut, released the same year she signed to Mavin.",
    whyItMatters:
      "POISN is the hinge in Elestee's catalogue — proof the Mavin Academy grad who was battle-rapping online at twelve could write a hook as easily as she could write around one.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ac/44/d1/ac44d154-b68b-a5e6-ca75-c4043f7c2e1f/23UM1IM51684.rgb.jpg/1200x1200bb.jpg",
  },
  {
    slug: "mavo-tumo-weto",
    title: "Tumo Weto",
    artistName: "Mavo",
    year: "2023",
    blurb: "A deep cut off his debut album Ukanigbe that took over two years to actually become a hit.",
    whyItMatters:
      "Tumo Weto reached No. 1 on Apple Music Nigeria in January 2026 — more than two years after release. A reminder that a real song doesn't need a release-week push to eventually find its audience.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/92/68/8d/92688d24-7e61-a51a-8b94-7cdd28396e90/0.jpg/1200x1200bb.jpg",
  },
  {
    slug: "odumodublvck-woto-woto-seasoning",
    title: "Woto Woto Seasoning",
    artistName: "Odumodublvck ft. Black Sherif",
    year: "2025",
    blurb: "The Eziokwu deluxe cut that paired Nigeria's loudest rapper with Ghana's most melodic one.",
    whyItMatters:
      "Odumodublvck already redefined what Nigerian rap could sound like on Eziokwu proper — Woto Woto Seasoning is the victory-lap bonus track that still hits like an album opener.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/17/03/25/170325f6-7a22-279c-0023-c111eb35b3c2/23UM1IM57758.rgb.jpg/1200x1200bb.jpg",
  },
  {
    slug: "tim-lyre-i-do",
    title: "I Do",
    artistName: "Tim Lyre",
    year: "2024",
    blurb: "A log-drum-powered alté cut from one of Lagos alté's most consistent voices, part of the Chop Life Crew.",
    whyItMatters:
      "Tim Lyre traded a law degree for the alté underground and has been one of its steadiest songwriters since — I Do is the kind of unflashy record that keeps a scene's foundation solid.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/65/c6/45/65c6458f-18ba-4c27-c8d0-60ff64da5046/766214668862.jpg/1200x1200bb.jpg",
  },
  {
    slug: "oluwamillar-alubarika",
    title: "Alubarika",
    artistName: "OluwaMillar",
    year: "2024",
    blurb: "A Yoruba-language rap breakthrough single that reads as much like a prayer as a flex.",
    whyItMatters:
      "OluwaMillar raps in the lineage of Olamide and Reminisce at a moment when Afrobeats has mostly moved past rap — Alubarika is proof that lineage isn't finished.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3a/19/5d/3a195d8e-a169-1ab3-8323-3f1c9da5d1f5/8721093999300.png/1200x1200bb.jpg",
  },
];

export function getThrowback(slug: string) {
  return throwbacks.find((t) => t.slug === slug);
}
