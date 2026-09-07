import Link from "next/link";
import { getLatestArtistPick } from "@/content/artist-picks";
import { BrandMark } from "@/components/brand-mark";
import { SectionLabel } from "@/components/section-label";
import { StampBadge } from "@/components/stamp-badge";
import { Reveal } from "@/components/reveal";

export function ArtistPickSection() {
  const pick = getLatestArtistPick();
  if (!pick) return null;

  return (
    <section className="border-b border-ink/20 bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="05" title="On Rotation" />
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <Reveal delay={80} className="md:col-span-4">
            <div className="card-media flex aspect-square items-center justify-center border border-ink bg-red">
              <BrandMark size={140} tone="paper" decorative className="animate-figure-bob" />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <StampBadge text="On Rotation" sub={pick.month.split(" ")[0]} size={72} />
              {pick.artistSlug && (
                <Link
                  href={`/artists/${pick.artistSlug}`}
                  className="link-underline font-mono text-sm font-semibold uppercase tracking-[0.15em] hover:text-red"
                >
                  View profile →
                </Link>
              )}
            </div>
          </Reveal>

          <Reveal delay={160} className="md:col-span-8">
            <p className="max-w-2xl text-balance font-display text-3xl leading-[1.1] tracking-wide sm:text-5xl">
              What we&apos;re playing right now.
            </p>
            <p className="mt-4 max-w-xl font-sans text-base text-ink/80">{pick.intro}</p>

            <ol className="mt-8 divide-y divide-ink/20 border-y border-ink/20">
              {pick.picks.map((item, i) => (
                <li
                  key={item.title}
                  className="group flex items-start gap-4 py-4 transition-colors duration-200 hover:bg-paper"
                >
                  <span className="font-mono text-sm text-muted transition-colors duration-200 group-hover:text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-lg tracking-wide">
                      {item.title}
                      {item.by !== "—" && <span className="text-muted"> — {item.by}</span>}
                    </p>
                    <p className="mt-0.5 font-sans text-sm text-muted">{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
