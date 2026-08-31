import { WaitlistLanding } from "@/components/waitlist-landing";

// TEMPORARY: the root route serves the pre-launch waitlist landing until
// Phase 2 (core shell + real homepage, Skill §7) replaces it. `/notify`
// carries the same page permanently as a standalone, shareable link.
export default function HomePage() {
  return <WaitlistLanding />;
}
