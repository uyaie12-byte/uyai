import Link from "next/link";
import { artists } from "@/content/artists";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionLabel } from "@/components/section-label";
import { Tag } from "@/components/tag";

export function ArtistSpotlightSection() {
  const spotlighted = artists.filter((a) => a.spotlight);

  return (
    <section className="border-b-[3px] border-ink bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionLabel index="03" title="Artist Spotlight" tone="paper" />
          <Link
            href="/artists"
            className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-paper hover:text-red"
          >
            All artists →
          </Link>
        </div>

        <div className="mt-10 grid gap-16 md:grid-cols-2 md:gap-10">
          {spotlighted.map((artist) => (
            <Link key={artist.slug} href={`/artists/${artist.slug}`} className="group block">
              <ImagePlaceholder
                label={artist.name}
                sublabel={`${artist.discipline} — ${artist.location}`}
                ratio="aspect-[16/11]"
                pattern="halftone"
                tone="paper"
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              <div className="mt-5">
                <Tag tone="red">{artist.discipline}</Tag>
                <p className="mt-3 font-display text-4xl leading-[0.95] tracking-wide sm:text-5xl">
                  {artist.name}
                </p>
                <p className="mt-2 max-w-md text-balance font-sans text-base text-muted-2">
                  {artist.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
