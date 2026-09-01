import Link from "next/link";
import { releases } from "@/content/releases";
import { ReleaseCard } from "@/components/release-card";
import { SectionLabel } from "@/components/section-label";

export function NewMusicSection() {
  const featured = releases.slice(0, 4);

  return (
    <section className="border-b border-ink/20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel index="02" title="New Music" />
            <p className="mt-6 max-w-xl text-balance font-display text-4xl leading-[1.05] tracking-wide sm:text-6xl">
              Fresh, on repeat.
            </p>
          </div>
          <Link
            href="/new-music"
            className="font-mono text-sm font-semibold uppercase tracking-[0.15em] hover:text-red"
          >
            View all →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {featured.map((r) => (
            <ReleaseCard key={r.slug} release={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
