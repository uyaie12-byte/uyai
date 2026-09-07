"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

// useLayoutEffect on the server just warns and no-ops — fall back to
// useEffect there so SSR stays clean; the client always gets the
// synchronous (pre-paint) version, which is what avoids the "flash".
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealProps = {
  children: ReactNode;
  /** Stagger, in ms — pass i * 80 across a mapped list for a cascading grid. */
  delay?: number;
  className?: string;
};

/**
 * Scroll-triggered fade/rise-in for sections and grid items — the
 * "cascades into view" feel the flat static version was missing.
 *
 * Starts fully visible (see .reveal in globals.css) and only arms itself
 * — via a *synchronous*, pre-paint effect, so there's no visible flash —
 * once JS has actually run, IntersectionObserver exists, and the visitor
 * doesn't have prefers-reduced-motion set. No-JS and reduced-motion
 * visitors just see the content, already in place.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [armed]);

  return (
    <div
      ref={ref}
      data-armed={armed ? "true" : undefined}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
