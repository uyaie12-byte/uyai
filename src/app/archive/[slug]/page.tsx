import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { throwbacks, getThrowback } from "@/content/throwbacks";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function generateStaticParams() {
  return throwbacks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const throwback = getThrowback(slug);
  if (!throwback) return {};
  return { title: throwback.title, description: throwback.blurb };
}

export default async function ThrowbackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const throwback = getThrowback(slug);
  if (!throwback) notFound();

  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <ImagePlaceholder label={throwback.artistName} sublabel={throwback.year} ratio="aspect-square" tone="ink" />
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-red">{throwback.year}</p>
          <h1 className="mt-3 text-balance font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl">
            {throwback.title}
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-[0.15em] text-muted">{throwback.artistName}</p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-ink/85">{throwback.blurb}</p>
          <div className="mt-8 border-l-2 border-red pl-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Why it matters</p>
            <p className="mt-2 font-sans text-base leading-relaxed text-ink/90">{throwback.whyItMatters}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
