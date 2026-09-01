"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { EmailCaptureForm } from "@/components/email-capture-form";
import { StampBadge } from "@/components/stamp-badge";

type JoinDraftModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const JoinDraftModalContext = createContext<JoinDraftModalContextValue | null>(null);

/**
 * Mounted once in the root layout. Anything in the tree can pop the
 * "Join The Draft" email capture modal via useJoinDraftModal() — a nav
 * link, a footer CTA, or the homepage's auto-open effect — without prop
 * drilling or a page reload.
 */
export function JoinDraftModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <JoinDraftModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      <JoinDraftModal isOpen={isOpen} onClose={close} />
    </JoinDraftModalContext.Provider>
  );
}

export function useJoinDraftModal() {
  const ctx = useContext(JoinDraftModalContext);
  if (!ctx) throw new Error("useJoinDraftModal must be used within JoinDraftModalProvider");
  return ctx;
}

function JoinDraftModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  // Matches the id EmailCaptureForm derives from source="popup" (`email-${source}`).
  const emailInputId = "email-popup";

  // Escape to close + lock page scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    // Focus the email field once the dialog is in the DOM.
    const input = document.getElementById(emailInputId);
    input?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-5 backdrop-blur-[2px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-draft-modal-title"
        className="relative w-full max-w-md border-[3px] border-ink bg-paper p-6 shadow-[6px_6px_0_var(--red)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-ink font-display text-lg leading-none transition-colors hover:border-red hover:text-red"
        >
          ×
        </button>

        <div className="absolute -top-6 -left-4 hidden sm:block">
          <StampBadge text="Join" sub="Vol. 01" size={76} />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Don&apos;t miss a draft</p>
        <h2 id="join-draft-modal-title" className="mt-2 text-balance font-display text-3xl leading-[0.95] tracking-wide sm:text-4xl">
          JOIN THE DRAFT
        </h2>
        <p className="mt-3 max-w-sm text-balance font-sans text-sm leading-relaxed text-muted">
          The artists, sounds and stories worth knowing — before everyone else catches on. Straight to your
          inbox, no chaos required.
        </p>

        <div className="mt-6">
          <EmailCaptureForm source="popup" variant="standalone" buttonLabel="Join The Draft" />
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-muted-2">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
