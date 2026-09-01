"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { useJoinDraftModal } from "@/components/join-draft-modal";

const NAV_LINKS = [
  { href: "/the-draft", label: "The Draft" },
  { href: "/new-music", label: "New Music" },
  { href: "/artists", label: "Artists" },
  { href: "/archive", label: "Archive" },
  { href: "/the-camp", label: "The Camp" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { open: openJoinModal } = useJoinDraftModal();

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark size={44} priority />
          <span className="hidden font-display text-lg tracking-wide sm:inline">
            THE UNDERGROUND DRAFT
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-semibold uppercase tracking-wide transition-colors hover:text-red ${
                link.href === "/the-camp" ? "text-red" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openJoinModal}
            className="hidden shrink-0 items-center border-2 border-ink bg-ink px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-paper transition-colors hover:border-red hover:bg-red md:inline-flex"
          >
            Join The Draft
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-ink md:hidden"
          >
            <span className={`h-[2px] w-5 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-ink bg-paper md:hidden">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-5 py-4 font-display text-2xl tracking-wide ${link.href === "/the-camp" ? "text-red" : "text-ink"} ${i > 0 ? "border-t border-ink/20" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openJoinModal();
            }}
            className="block w-full border-t border-ink/20 px-5 py-4 text-left font-display text-2xl tracking-wide text-red"
          >
            Join The Draft
          </button>
        </nav>
      )}
    </header>
  );
}
