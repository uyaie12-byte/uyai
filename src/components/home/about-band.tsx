import { SectionLabel } from "@/components/section-label";
import { Rule } from "@/components/rule";

const PILLARS = [
  {
    title: "Discover",
    body: "New artists. New sounds. New perspectives.",
  },
  {
    title: "Document",
    body: "The scenes, stories and movements defining a generation.",
  },
  {
    title: "Connect",
    body: "Artists, creatives, audiences and the people building the industry around them.",
  },
];

export function AboutBand() {
  return (
    <section className="border-b border-ink/20 bg-paper pt-20 sm:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionLabel index="01" title="More Than Music" />
        <p className="mt-6 max-w-3xl text-balance font-display text-3xl leading-[1.1] tracking-wide sm:text-5xl">
          A record of what&apos;s happening.
        </p>
        <p className="mt-6 max-w-2xl text-balance font-sans text-base leading-relaxed text-ink/80 sm:text-lg">
          The Underground Draft is a music and culture platform built around discovery. We
          spotlight emerging artists, unpack new sounds, document creative scenes and create
          space for the people shaping culture before the rest of the world catches on. Because
          the underground isn&apos;t waiting for permission to become the mainstream — it&apos;s
          already building the future.
        </p>

        <div className="mt-16 grid gap-0 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`py-8 pr-6 ${i > 0 ? "border-t border-ink/20 sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
            >
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
              <p className="mt-2 font-display text-2xl tracking-wide sm:text-3xl">{p.title.toUpperCase()}</p>
              <p className="mt-2 font-sans text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Rule className="mt-16" />
    </section>
  );
}
