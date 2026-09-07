"use client";

import { useEffect } from "react";
import { useJoinDraftModal } from "@/components/join-draft-modal";

const STORAGE_KEY = "udraft:join-modal-seen";
const DELAY_MS = 3500;

/**
 * Renders nothing — just pops the Join The Draft modal once, a few
 * seconds after a visitor lands on the homepage, so the CTA reaches
 * people who never click "Join The Draft" in the nav or scroll to the
 * newsletter section. Shown once per browser (localStorage), not once
 * per visit, so it doesn't nag returning readers.
 */
export function JoinDraftAutoOpen() {
  const { open } = useJoinDraftModal();

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Storage unavailable (private mode, blocked) — fall back to showing it.
    }
    if (seen) return;

    const timer = setTimeout(() => {
      open();
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Non-fatal — worst case it shows again next visit.
      }
    }, DELAY_MS);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount only
  }, []);

  return null;
}
