import Link from "next/link";
import { releases } from "@/content/releases";
import { ReleaseCard } from "@/components/release-card";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function NewMusicSection() {
  const featured = releases.slice(0, 4);

  return (
    <section className="border-b border-ink/20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel index="02" title="New Music" />
            <p className="mt-6 max-w-xl text-balance font-display text-4xl leading-[1.05] tracking-wide sm:text-6xl">
              Fresh, on repeat.
            </p>
          </div>
          <Link
            href="/new-music"
            className="link-underline font-mono text-sm font-semibold uppercase tracking-[0.15em] hover:text-red"
          >
            View all →
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {featured.map((r, i) => (
            <Reveal key={r.slug} delay={i * 80}>
              <ReleaseCard release={r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
