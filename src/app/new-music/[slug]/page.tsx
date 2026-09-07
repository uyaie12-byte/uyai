import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { releases, getRelease } from "@/content/releases";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Tag } from "@/components/tag";

export function generateStaticParams() {
  return releases.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const release = getRelease(slug);
  if (!release) return {};
  return { title: `${release.title} — ${release.artistName}`, description: release.blurb };
}

export default async function ReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const release = getRelease(slug);
  if (!release) notFound();

  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <ImagePlaceholder label={release.artistName} sublabel={release.type} ratio="aspect-square" tone="ink" />
        <div>
          <Tag tone="red">{release.type}</Tag>
          <h1 className="mt-5 text-balance font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl">
            {release.title}
          </h1>
          {release.artistSlug ? (
            <Link
              href={`/artists/${release.artistSlug}`}
              className="mt-3 inline-block font-mono text-sm uppercase tracking-[0.15em] text-muted hover:text-red"
            >
              {release.artistName} →
            </Link>
          ) : (
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.15em] text-muted">{release.artistName}</p>
          )}
          <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-ink/85">{release.blurb}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {new Date(release.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {release.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
