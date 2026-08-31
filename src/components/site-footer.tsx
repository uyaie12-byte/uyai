import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { EmailCaptureForm } from "@/components/email-capture-form";
import { Rule } from "@/components/rule";
import { SectionLabel } from "@/components/section-label";

const NAV_LINKS = [
  { href: "/the-draft", label: "The Draft" },
  { href: "/new-music", label: "New Music" },
  { href: "/artists", label: "Artists" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-paper/25 pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="—" title="One More Time" tone="paper" />
            <p className="mt-3 font-sans text-sm text-muted-2">
              Didn&apos;t catch the newsletter above? Here&apos;s another shot.
            </p>
          </div>
          <EmailCaptureForm source="footer" tone="paper" buttonLabel="Join The Draft" />
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-2">Navigate</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-sm hover:text-red">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-2">Connect</p>
            <ul className="mt-4 space-y-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-sm hover:text-red"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-2">Contact</p>
            <ul className="mt-4 space-y-2 font-sans text-sm">
              <li>
                <a href="mailto:hello@theundergrounddraft.com" className="hover:text-red">
                  hello@theundergrounddraft.com
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-red">
                  Press &amp; partnerships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-2">The Underground Draft</p>
            <p className="mt-4 max-w-[26ch] font-sans text-sm text-muted-2">
              An independent music &amp; culture platform. The first draft of what&apos;s next.
            </p>
          </div>
        </div>

        <Rule tone="paper" className="opacity-25" />

        <div className="flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-center">
          <BrandMark size={40} tone="paper" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
            © {new Date().getFullYear()} The Underground Draft — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
