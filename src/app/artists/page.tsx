import type { Metadata } from "next";
import { artists } from "@/content/artists";
import { ArtistCard } from "@/components/artist-card";
import { HubHeader } from "@/components/hub-header";

export const metadata: Metadata = {
  title: "Artists",
  description: "A closer look at the artists making noise beneath the surface.",
};

export default function ArtistsPage() {
  return (
    <>
      <HubHeader
        index="03"
        eyebrow="Artists"
        title="ARTISTS"
        dek="A closer look at the artists making noise beneath the surface."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3">
          {artists.map((a) => (
            <ArtistCard key={a.slug} artist={a} />
          ))}
        </div>
      </section>
    </>
  );
}
