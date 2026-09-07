"use client";

import { useEffect, useRef } from "react";

/**
 * A small dot + trailing ring that replaces the system cursor — the kind
 * of "the site feels alive" touch a static editorial page is missing.
 * Desktop/fine-pointer only: bails immediately on touch devices and on
 * prefers-reduced-motion, so the native cursor is untouched there. Only
 * flips on body.has-custom-cursor (which is what actually hides the
 * system cursor, in globals.css) once those checks pass — never during
 * SSR, never on a device that can't use it well.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.classList.add("has-custom-cursor");

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let raf = 0;

    function place(el: HTMLDivElement | null, x: number, y: number) {
      if (el) el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      place(dotRef.current, targetX, targetY);
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button'], input, textarea, select");
      ringRef.current?.classList.toggle("is-active", Boolean(interactive));
    }

    function tick() {
      // Ease the ring toward the dot — the dot is pinned to the real
      // pointer position, the ring trails a beat behind it.
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      place(ringRef.current, ringX, ringY);
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
