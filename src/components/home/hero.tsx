import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Tag } from "@/components/tag";
import { StampBadge } from "@/components/stamp-badge";
import { Rule } from "@/components/rule";

export function Hero() {
  const current = getAllArticles()[0];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 pt-10 sm:px-8 sm:pt-14">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-muted">
          <span>Vol. 01 — Est. 2026</span>
          <span className="hidden sm:inline">Lagos · Accra · Nairobi</span>
        </div>

        <h1 className="mt-6 font-display text-[15vw] leading-[0.86] tracking-tight sm:text-[9.5vw] lg:text-[8vw]">
          THE
          <br />
          UNDERGROUND
          <br />
          DRAFT
        </h1>

        <div className="mt-8 grid gap-10 pb-16 sm:pb-24 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="font-display text-2xl tracking-wide text-red sm:text-3xl">
              The first draft of what&apos;s next.
            </p>
            <p className="mt-4 max-w-md text-balance font-sans text-base leading-relaxed text-ink/85 sm:text-lg">
              We discover the artists, sounds, stories and movements shaping the future of
              African music and culture.
            </p>
            <Link
              href="/the-draft"
              className="mt-6 inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-mono text-sm font-semibold uppercase tracking-[0.15em] transition-colors hover:border-red hover:text-red"
            >
              Discover what&apos;s next <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* CURRENT DRAFT — featured story, breaking the grid over the rule below */}
          <div className="relative md:col-span-5 md:col-start-8 lg:col-span-5 lg:col-start-8">
            <div className="absolute -top-10 -right-2 z-10 hidden sm:block">
              <StampBadge text="Current Draft" sub="NEW" size={100} />
            </div>
            <Link href={`/the-draft/${current.slug}`} className="group relative block md:-mb-28">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Current Draft</p>
              <div className="mt-2 flex items-start gap-4 border border-ink bg-paper-dim p-4">
                {current.image ? (
                  <div className="aspect-square w-24 shrink-0 overflow-hidden border border-ink sm:w-32">
                    {/* eslint-disable-next-line @next/next/no-img-element -- external Substack-hosted image */}
                    <img src={current.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <ImagePlaceholder
                    label={current.category}
                    ratio="aspect-square"
                    pattern="halftone"
                    tone="ink"
                    className="w-24 shrink-0 sm:w-32"
                  />
                )}
                <div className="min-w-0">
                  <Tag tone="red">{current.category}</Tag>
                  <p className="mt-2 font-display text-xl leading-tight tracking-wide sm:text-2xl">
                    {current.title}
                  </p>
                  <p className="mt-1 line-clamp-2 font-sans text-sm text-muted">{current.dek}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Rule weight="heavy" />
    </section>
  );
}
