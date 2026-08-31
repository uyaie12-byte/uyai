import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artists, getArtist } from "@/content/artists";
import { releases } from "@/content/releases";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ReleaseCard } from "@/components/release-card";
import { Tag } from "@/components/tag";
import { Rule } from "@/components/rule";

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) return {};
  return { title: artist.name, description: artist.tagline };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const artistReleases = releases.filter((r) => r.artistSlug === artist.slug);

  return (
    <article>
      <div className="border-b-[3px] border-ink bg-ink py-16 text-paper sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <ImagePlaceholder
              label={artist.name}
              sublabel={`${artist.discipline} — ${artist.location}`}
              ratio="aspect-[3/4]"
              tone="paper"
            />
          </div>
          <div className="md:col-span-7">
            <Tag tone="red">{artist.discipline}</Tag>
            <h1 className="mt-4 text-balance font-display text-6xl leading-[0.92] tracking-wide sm:text-7xl lg:text-8xl">
              {artist.name}
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-muted-2">{artist.location}</p>
            <p className="mt-4 max-w-lg text-balance font-sans text-lg text-muted-2">{artist.tagline}</p>
            {artist.links && artist.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4">
                {artist.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm font-semibold uppercase tracking-[0.15em] hover:text-red"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <p className="font-sans text-lg leading-relaxed text-ink/90">{artist.bio}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {artist.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {artistReleases.length > 0 && (
        <div className="border-t border-ink/20 bg-paper-dim py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Releases</p>
            <Rule className="mt-4" />
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
              {artistReleases.map((r) => (
                <ReleaseCard key={r.slug} release={r} />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
