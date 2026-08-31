import { VinylMark } from "@/components/vinyl-mark";
import { EmailCaptureForm } from "@/components/email-capture-form";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

/**
 * Standalone pre-launch / waitlist landing (Skill §5, item 1 — Phase 1).
 * Deliberately minimal chrome: no nav, no footer nav, just the mark, the
 * pitch, and the form. Rendered at both `/` (until Phase 2 ships the real
 * homepage) and the permanent standalone `/notify` route, so it keeps
 * working as a link independent of the full site later.
 */
export function WaitlistLanding() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <VinylMark size={56} spinning className="mb-8 opacity-90" />

      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-fg-muted">
        Coming soon
      </p>

      <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
        The next chapter of African music,
        <span className="text-accent"> before it&apos;s obvious.</span>
      </h1>

      <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-fg-muted">
        Underground Draft is a new home for the sound — editorial, sessions,
        and culture. We&apos;re building it in public. Get on the list for
        newsletter drops, session alerts, and the first word on{" "}
        <span className="text-fg">The Camp</span>, our artist-development
        residency.
      </p>

      <div className="mt-10 flex w-full flex-col items-center">
        <EmailCaptureForm
          source="notify"
          variant="standalone"
          buttonLabel="Count me in"
        />
        <p className="mt-3 text-sm text-fg-muted">
          One email, occasionally. No spam — we&apos;re too busy digging for
          the next record.
        </p>
      </div>

      <div className="mt-20 flex items-center gap-6">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-fg-muted transition-colors hover:text-fg"
          >
            {s.label}
          </a>
        ))}
      </div>

      <p className="mt-6 text-xs text-fg-muted">
        © {new Date().getFullYear()} Underground Draft
      </p>
    </main>
  );
}
