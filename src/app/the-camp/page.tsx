import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { FigureDoodle } from "@/components/figure-doodle";
import { EmailCaptureForm } from "@/components/email-capture-form";
import { Rule } from "@/components/rule";

export const metadata: Metadata = {
  title: "The Camp",
  description:
    "The Underground Draft Music Camp, Vol. 01 — three days, a room full of artists, too many ideas, no rules about what the music has to sound like. December 2026, Uyo, Akwa Ibom.",
};

const FEATURES = [
  "Three days",
  "A room full of artists",
  "Too many ideas",
  "No rules about what the music has to sound like",
];

export default function TheCampPage() {
  return (
    <article>
      {/* THE FLYER — poster red, one continuous canvas top to bottom */}
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-red text-ink">
        <div className="relative mx-auto max-w-[1400px] px-5 pt-8 sm:px-8 sm:pt-12">
          {/* top bar */}
          <div className="flex items-start justify-between font-mono text-xs uppercase tracking-[0.2em]">
            <p className="font-semibold">First Edition</p>
            <p className="hidden text-center font-semibold sm:block">
              Music Camp / Vol. 01
            </p>
            <p className="font-semibold">Uyo, Akwa Ibom</p>
          </div>
          <Rule tone="ink" className="mt-4 opacity-70" />

          {/* headline */}
          <div className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-2">
            <h1 className="text-balance font-display leading-[0.9]">
              <span className="block text-[11vw] uppercase tracking-tight sm:text-[7vw] lg:text-[6vw]">
                The Underground
              </span>
              <span className="poster-shadow block text-[16vw] uppercase tracking-tight text-paper sm:text-[10.5vw] lg:text-[9vw]">
                Draft
              </span>
            </h1>
            <p className="mt-2 font-display text-lg uppercase leading-[1.05] tracking-wide sm:text-xl">
              Music
              <br />
              Camp
            </p>
          </div>

          <h2 className="mt-4 text-balance font-display text-[9vw] uppercase leading-[0.95] tracking-tight sm:text-[5vw] lg:text-[4vw]">
            Come make music.
          </h2>

          {/* feature list, right-aligned like the flyer */}
          <ul className="mt-8 space-y-1.5 text-right font-mono text-sm font-semibold uppercase tracking-[0.1em] text-paper opacity-90 sm:text-base">
            {FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          {/* THREE-PANEL ILLUSTRATION — cream figures on the same red canvas, framed in black */}
          <div className="relative mt-10 grid grid-cols-3 divide-x-[3px] divide-ink border-[3px] border-ink">
            <span
              aria-hidden="true"
              className="animate-accent-pulse absolute left-[33%] top-4 z-10 h-2.5 w-2.5 -translate-x-1/2 bg-ink"
            />
            <span
              aria-hidden="true"
              className="animate-accent-pulse absolute left-[66%] top-10 z-10 h-2 w-2 -translate-x-1/2 bg-paper"
              style={{ animationDelay: "0.6s" }}
            />
            <div className="halftone flex items-center justify-center py-10 opacity-95">
              <FigureDoodle variant="vocalist" size={84} tone="paper" animate />
            </div>
            <div className="flex items-center justify-center py-10">
              <FigureDoodle variant="writer" size={84} tone="paper" animate delay={0.4} />
            </div>
            <div className="flex items-center justify-center py-10">
              <FigureDoodle variant="producer" size={84} tone="paper" animate delay={0.8} />
            </div>
          </div>

          {/* WRITE. PRODUCE. RECORD. CONNECT. */}
          <div className="mt-10 flex flex-wrap justify-between gap-x-6 gap-y-2 text-paper">
            {["Write.", "Produce.", "Record.", "Connect."].map((w) => (
              <span key={w} className="font-display text-3xl uppercase tracking-wide sm:text-5xl">
                {w}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-8 pb-12 sm:grid-cols-2">
            <p className="max-w-md text-balance font-sans text-lg leading-relaxed text-paper">
              The Underground Draft Music Camp brings together emerging artists, producers and
              songwriters to create, collaborate and experiment outside the usual studio routine.
            </p>
            <p className="text-balance font-display text-2xl uppercase leading-tight tracking-wide sm:text-3xl">
              Come with your sound.
              <br />
              Leave with something new.
            </p>
          </div>
        </div>

        {/* FOR / EXPECT bar */}
        <div className="border-y-[3px] border-ink bg-red-deep text-paper">
          <div className="mx-auto grid max-w-[1400px] gap-4 px-5 py-6 sm:grid-cols-2 sm:gap-0 sm:divide-x-2 sm:divide-paper/30 sm:px-8">
            <p className="font-mono text-sm uppercase tracking-[0.1em] sm:pr-8">
              <span className="text-muted-2">For </span>
              <span className="font-semibold">Artists · Producers · Songwriters</span>
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.1em] sm:pl-8">
              <span className="text-muted-2">Expect </span>
              <span className="font-semibold">
                Creative sessions · Collaborations · Workshops · Listening sessions · Industry
                conversations · New music
              </span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-14">
          <p className="max-w-2xl text-balance font-display text-[9vw] uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            The underground is where
            <br />
            <span className="poster-shadow text-paper">the next sound starts.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-ink/30 pt-6">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-paper">
                December 2026 · Uyo, Akwa Ibom
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-ink shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                >
                  Apply / RSVP
                </Link>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                  [ Submission link coming soon ]
                </span>
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-paper">
                @theundergrounddraft
              </p>
            </div>
            <BrandMark tone="ink" size={110} className="hidden sm:block" />
          </div>
        </div>
      </section>

      {/* WAITLIST — the actual functional capture, since the submission link isn't live yet */}
      <section id="waitlist" className="scroll-mt-20 bg-paper-dim py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Apply / RSVP — December 2026, Uyo, Akwa Ibom
          </p>
          <p className="mt-6 max-w-2xl text-balance font-display text-4xl leading-[1.05] tracking-wide sm:text-6xl">
            The submission link isn&apos;t live yet.
            <br />
            <span className="text-red">Get it the moment it is.</span>
          </p>
          <p className="mt-4 max-w-md font-sans text-base text-muted">
            Join the list and we&apos;ll send the RSVP link directly, before it&apos;s posted
            anywhere else.
          </p>
          <div className="mt-8">
            <EmailCaptureForm source="the-camp" buttonLabel="Join The Waitlist" />
          </div>
        </div>
      </section>
    </article>
  );
}
