import Link from "next/link";
import { throwbacks } from "@/content/throwbacks";
import { ThrowbackCard } from "@/components/throwback-card";
import { SectionLabel } from "@/components/section-label";

export function ThrowbackSection() {
  const featured = throwbacks.slice(0, 4);

  return (
    <section className="border-b-[3px] border-ink bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel index="06" title="Throwback / Archive" tone="paper" />
            <p className="mt-6 max-w-2xl text-balance font-display text-4xl leading-[1.05] tracking-wide sm:text-6xl">
              Deserves another listen.
            </p>
          </div>
          <Link
            href="/archive"
            className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-paper hover:text-red"
          >
            Open the archive →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {featured.map((t) => (
            <ThrowbackCard key={t.slug} throwback={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
