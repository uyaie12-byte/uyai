import Link from "next/link";
import { artists } from "@/content/artists";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionLabel } from "@/components/section-label";
import { StampBadge } from "@/components/stamp-badge";
import { Tag } from "@/components/tag";
import { Reveal } from "@/components/reveal";

/**
 * One artist at a time — a single, larger feature rather than a grid, so
 * it reads as "this is who we're watching right now" instead of a
 * roster. Swap `spotlight: true` in content/artists.ts to change who's
 * up; this layout is built to hold exactly one.
 */
export function ArtistSpotlightSection() {
  const artist = artists.find((a) => a.spotlight);
  if (!artist) return null;

  return (
    <section className="border-b-[3px] border-ink bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionLabel index="03" title="Artist Spotlight" tone="paper" />
          <Link
            href="/artists"
            className="link-underline font-mono text-sm font-semibold uppercase tracking-[0.15em] text-paper hover:text-red"
          >
            All artists →
          </Link>
        </Reveal>

        <Reveal delay={100} className="mt-10 grid gap-10 md:grid-cols-12 md:items-center md:gap-14">
          <Link href={`/artists/${artist.slug}`} className="group relative block md:col-span-6">
            <div className="absolute -top-6 -left-4 z-10 hidden animate-figure-bob sm:block">
              <StampBadge text="Spotlight" tone="red" size={92} />
            </div>
            {artist.image ? (
              <div className="card-media-paper aspect-[4/5] overflow-hidden border border-paper/40">
                {/* eslint-disable-next-line @next/next/no-img-element -- external press/CDN-hosted image, not part of next/image's optimized domain set */}
                <img
                  src={artist.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            ) : (
              <ImagePlaceholder
                label={artist.name}
                sublabel={`${artist.discipline} — ${artist.location}`}
                ratio="aspect-[4/5]"
                pattern="halftone"
                tone="paper"
                className="card-media-paper"
              />
            )}
          </Link>

          <div className="md:col-span-6">
            <Tag tone="red">{artist.discipline}</Tag>
            <Link href={`/artists/${artist.slug}`} className="group block">
              <p className="link-underline mt-4 font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl">
                {artist.name}
              </p>
            </Link>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
              {artist.location}
            </p>
            <p className="mt-5 max-w-lg text-balance font-sans text-lg leading-relaxed text-paper/85">
              {artist.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {artist.tags.map((t) => (
                <Tag key={t} tone="paper">
                  {t}
                </Tag>
              ))}
            </div>
            <Link
              href={`/artists/${artist.slug}`}
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-paper pb-1 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-paper transition-colors hover:border-red hover:text-red"
            >
              Full profile <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
