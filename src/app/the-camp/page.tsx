import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { EmailCaptureForm } from "@/components/email-capture-form";
import { Rule } from "@/components/rule";

export const metadata: Metadata = {
  title: "The Camp",
  description:
    "The Underground Draft Music Camp No. 01 — closed-door writing rooms. Producers, topliners and engineers drafted into new teams every morning. Dates TBA.",
};

export default function TheCampPage() {
  return (
    <article>
      {/* HERO — poster red, echoes the Camp No. 01 flyer */}
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-red text-paper">
        <BrandMark
          tone="ink"
          decorative
          size={640}
          className="pointer-events-none absolute -bottom-24 -left-24 opacity-[0.08] sm:size-[720px]"
        />

        <div className="relative mx-auto max-w-[1400px] px-5 pt-10 sm:px-8 sm:pt-14">
          <div className="flex items-start justify-between font-mono text-xs uppercase tracking-[0.2em]">
            <div>
              <p className="font-semibold">First Edition</p>
              <p className="mt-1 opacity-80">Est. 2026</p>
            </div>
            <BrandMark tone="ink" size={72} />
            <div className="text-right">
              <p className="font-semibold">Invite + Open Call</p>
              <p className="mt-1 opacity-80">
                <Link href="#waitlist" className="underline underline-offset-2 hover:no-underline">
                  Join the waitlist
                </Link>
              </p>
            </div>
          </div>

          <Rule tone="ink" className="mt-6 opacity-70" />

          <div className="mt-6 flex flex-wrap justify-between gap-2 font-mono text-sm font-semibold uppercase tracking-[0.15em] sm:text-base">
            <span>Two</span>
            <span>Days</span>
            <span>Three</span>
            <span>Rooms</span>
            <span>One</span>
            <span>Draft</span>
          </div>

          <h1 className="poster-shadow mt-4 text-balance font-display text-[16vw] uppercase leading-[0.86] tracking-tight text-paper sm:text-[10vw] lg:text-[8.5vw]">
            THE
            <br />
            UNDERGROUND
            <br />
            DRAFT
          </h1>

          <div className="relative z-10 mt-8 grid gap-10 pb-16 sm:pb-24 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <p className="max-w-md text-balance font-sans text-lg leading-relaxed">
                Closed-door writing rooms. Producers, topliners and engineers drafted into new
                teams every morning. One record out of every room, mixed on site.
              </p>

              <dl className="mt-8 max-w-sm space-y-2 border-t border-ink/30 pt-6 font-mono text-sm uppercase tracking-[0.1em]">
                <div className="flex justify-between gap-4">
                  <dt className="opacity-70">Dates</dt>
                  <dd className="font-semibold">TBA</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="opacity-70">Venue</dt>
                  <dd className="font-semibold">TBA</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="opacity-70">Draft</dt>
                  <dd className="font-semibold">TBA</dd>
                </div>
              </dl>
            </div>

            <div className="relative md:col-span-5">
              <p className="mb-6 font-display text-2xl leading-none tracking-wide sm:text-3xl">
                MUSIC
                <br />
                CAMP
                <br />
                NO. 01
              </p>

              {/* the-rooms-live illustration card */}
              <div className="relative -rotate-2 border-[3px] border-ink bg-ink p-5 text-paper">
                {/* APPLY sticker — corner badge, clear of the caption row below */}
                <Link
                  href="#waitlist"
                  className="absolute -right-5 -top-6 z-10 rotate-[6deg] border-2 border-ink bg-paper px-4 py-2 shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                >
                  <p className="font-display text-xl leading-none tracking-wide text-ink">APPLY</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/70">Waitlist open</p>
                </Link>

                <svg viewBox="0 0 200 110" className="w-full" role="img" aria-label="Two people at a mixing desk">
                  <line x1="10" y1="95" x2="190" y2="95" stroke="var(--paper)" strokeWidth="2.5" />
                  {/* figure 1 */}
                  <circle cx="35" cy="45" r="12" fill="none" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="35" y1="57" x2="35" y2="88" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="35" y1="70" x2="55" y2="62" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="35" y1="88" x2="24" y2="95" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="35" y1="88" x2="46" y2="95" stroke="var(--paper)" strokeWidth="2.5" />
                  {/* figure 2 */}
                  <circle cx="82" cy="48" r="12" fill="none" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="82" y1="60" x2="82" y2="88" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="82" y1="72" x2="60" y2="66" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="82" y1="72" x2="104" y2="66" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="82" y1="88" x2="71" y2="95" stroke="var(--paper)" strokeWidth="2.5" />
                  <line x1="82" y1="88" x2="93" y2="95" stroke="var(--paper)" strokeWidth="2.5" />
                  {/* dial */}
                  <circle cx="150" cy="60" r="26" fill="none" stroke="var(--paper)" strokeWidth="2.5" />
                  <circle cx="150" cy="60" r="10" fill="var(--red)" />
                  <rect x="140" y="20" width="8" height="8" fill="var(--paper)" />
                  <rect x="98" y="30" width="6" height="6" fill="var(--red)" />
                </svg>
                <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-muted-2">
                  <span>The Rooms, Live</span>
                  <span>2 Days / 3 Rooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACKED BY */}
      <section className="border-b-[3px] border-ink bg-ink py-8 text-paper">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">Backed By</span>
            <span className="font-display text-2xl tracking-wide">ESTLON</span>
            <span className="text-red">/</span>
            <span className="font-display text-2xl tracking-wide">SONGDIS</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-2">+ More Partners TBA</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-ink/20 bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">About The Camp</p>
          <p className="mt-6 text-balance font-display text-3xl leading-[1.15] tracking-wide sm:text-4xl">
            The Underground Draft&apos;s first artist-development residency.
          </p>
          <div className="mt-6 space-y-5 font-sans text-lg leading-relaxed text-ink/85">
            <p>
              Two days, three rooms, one draft. Producers, vocalists, songwriters and engineers
              are drafted into new teams each morning — strangers on day one, a finished record
              by the end of the room.
            </p>
            <p>
              This is edition No. 01: closed-door by design, invite plus a limited open call.
              Curriculum, mentors and the final showcase format will be announced alongside
              dates and venue.
            </p>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="scroll-mt-20 bg-paper-dim py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Apply — Closes TBA</p>
          <p className="mt-6 max-w-2xl text-balance font-display text-4xl leading-[1.05] tracking-wide sm:text-6xl">
            Applications aren&apos;t open yet.
            <br />
            <span className="text-red">Be first when they are.</span>
          </p>
          <p className="mt-4 max-w-md font-sans text-base text-muted">
            Join the waitlist and we&apos;ll email you the moment dates, venue and the
            application open — before it&apos;s posted anywhere else.
          </p>
          <div className="mt-8">
            <EmailCaptureForm source="the-camp" buttonLabel="Join The Waitlist" />
          </div>
        </div>
      </section>
    </article>
  );
}
