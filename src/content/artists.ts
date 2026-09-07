import type { Artist } from "@/lib/content-types";

/**
 * Real artists (researched, not invented) — replaced the earlier
 * placeholder roster. Several also show up in content/releases.ts or
 * content/throwbacks.ts; reusing the same cover art there is intentional
 * (a real EP/single cover doubling as an artist's lead image is a normal
 * music-press convention, not a placeholder).
 */
export const artists: Artist[] = [
  {
    slug: "osa",
    name: "OSÁ",
    discipline: "Multi-disciplinary",
    location: "New York, NY",
    tagline: "Nigerian-American songcraft that doesn't rush to explain itself.",
    bio: "OSÁ is a Nigerian-American singer-songwriter and producer based in New York, blending Afrobeat with R&B, hip-hop and electronic textures — influences he traces to Wizkid on one side and Frank Ocean on the other. He started producing during the pandemic, put out his debut single \"Ijoya\" in 2021, and released his first EP, Roll Bounce, in 2023. His second project, FEELS, arrived in September 2026 after a phone-free listening session in Brooklyn — seven tracks about caring about someone, losing your way in it, and finding yourself again.",
    tags: ["Afrobeat", "R&B", "New York"],
    spotlight: true,
    image:
      "https://substackcdn.com/image/fetch/$s_!dNBs!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45307e9c-9b36-4a9d-9a9d-097a6a92f78e_2289x3433.jpeg",
  },
  {
    slug: "odunsi-the-engine",
    name: "Odunsi (The Engine)",
    discipline: "Multi-disciplinary",
    location: "Lagos, NG",
    tagline: "One of the artists who invented what \"alté\" means.",
    bio: "Born Bowofoluwa Olufisayo Odunsi, he broke through in 2018 with his debut album Rare — Headies- and Soundcity MVP-nominated, and enough to get him profiled by The New York Times a year later as part of Nigerian music's new guard. Odunsi is widely regarded as one of the pioneers of Alté, the genre-blurring Lagos scene that reshaped what Nigerian pop was allowed to sound like.",
    tags: ["Alté", "Rap", "Lagos"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Odunsi_on_Soulection_Radio.jpg/330px-Odunsi_on_Soulection_Radio.jpg",
  },
  {
    slug: "elestee",
    name: "Elestee",
    discipline: "Vocalist",
    location: "Port Harcourt, NG",
    tagline: "Genre-fluid Mavin signee who started with rap battles at twelve.",
    bio: "Born Treasure Apiafi Banigo, Elestee wrote her first songs at nine and was entering online rap battles by twelve. After three years in the Mavin Academy — the label's artist-development program — she was unveiled as a full Mavin Records signee in 2023, the same year she released POISN, an EP that leaned harder into Afropop after her more alternative debut. She still moves between hip-hop, Afropop and alternative production without picking a lane.",
    tags: ["Afropop", "Rap", "Mavin"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ac/44/d1/ac44d154-b68b-a5e6-ca75-c4043f7c2e1f/23UM1IM51684.rgb.jpg/1200x1200bb.jpg",
  },
  {
    slug: "mavo",
    name: "Mavo",
    discipline: "Vocalist",
    location: "Ekpoma, Edo State, NG",
    tagline: "\"Burbur Music\" — his word for Afrobeats, swag bounce, rap and slang, all at once.",
    bio: "Born Oseremen Marvin Ukanigbe, Mavo started recording for fun in a secondary-school music club and released his first track on his 20th birthday. He's a medical student at Afe Babalola University by day and one of Nigeria's fastest-rising new voices otherwise — 2025 alone brought \"Escaladizzy,\" \"Money Constant\" with Wizkid, and \"Body (Danz)\" with CKay, his first Nigerian No. 1.",
    tags: ["Afrobeats", "Rap", "Edo"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/92/68/8d/92688d24-7e61-a51a-8b94-7cdd28396e90/0.jpg/1200x1200bb.jpg",
  },
  {
    slug: "tim-lyre",
    name: "Tim Lyre",
    discipline: "Multi-disciplinary",
    location: "Lagos, NG",
    tagline: "Traded a law degree for the Lagos alté underground.",
    bio: "Tim Lyre picked up his stage name from a promoter who said he reminded them of a lyrebird — an uncanny mimic of any sound. He got his law degree in 2016 and has spent the years since as a pillar of Lagos alté, part of the Chop Life Crew alongside MOJO AF, Ronehi and Cubix. His music sets outernational poetry against a psychedelic Lagos backdrop, pulling as much from juju legend Ebenezer Obey as from John Legend.",
    tags: ["Alté", "Afro-fusion", "Lagos"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/65/c6/45/65c6458f-18ba-4c27-c8d0-60ff64da5046/766214668862.jpg/1200x1200bb.jpg",
  },
  {
    slug: "oluwamillar",
    name: "OluwaMillar",
    discipline: "Rapper",
    location: "Oyo, NG",
    tagline: "Yoruba-language rap in the Olamide and Reminisce lineage.",
    bio: "Born Favour Joshua Oparemi in Oyo, OluwaMillar raps almost entirely in Yoruba at a moment when most of Afrobeats has moved past rap. His breakthrough single \"Alubarika\" is as much a prayer as a flex, and his debut EP, Agbalagbi, pushed the fine-lyricism case further — proof that Nigerian hip-hop's Yoruba tradition isn't finished.",
    tags: ["Rap", "Yoruba", "Oyo"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3a/19/5d/3a195d8e-a169-1ab3-8323-3f1c9da5d1f5/8721093999300.png/1200x1200bb.jpg",
  },
];

export function getArtist(slug: string) {
  return artists.find((a) => a.slug === slug);
}
