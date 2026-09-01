import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

/**
 * The Camp promo band — treated like a second hero, not a footer note
 * (it's the site's top conversion goal right now). Sits right after the
 * main Hero so it's the second thing anyone sees.
 */
export function CampPromo() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-ink bg-red text-paper">
      <BrandMark
        tone="ink"
        decorative
        size={420}
        className="pointer-events-none absolute -bottom-16 -right-16 opacity-[0.1]"
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-14 sm:px-8 sm:py-20 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-90">Music Camp No. 01</p>
          <p className="mt-4 max-w-xl text-balance font-display text-4xl leading-[1.02] uppercase tracking-wide sm:text-6xl">
            Two days. Three rooms.
            <br />
            One draft.
          </p>
          <p className="mt-4 max-w-md font-sans text-base opacity-90">
            Closed-door writing rooms. Producers, topliners and engineers drafted into new teams
            every morning — one record out of every room. Dates &amp; venue TBA.
          </p>
        </div>
        <Link
          href="/the-camp#waitlist"
          className="inline-flex w-fit shrink-0 items-center gap-2 border-2 border-ink bg-paper px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-ink shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
        >
          Join The Waitlist <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
