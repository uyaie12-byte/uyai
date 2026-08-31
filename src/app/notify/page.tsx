import type { Metadata } from "next";
import { WaitlistLanding } from "@/components/waitlist-landing";

export const metadata: Metadata = {
  title: "Get on the list",
  description:
    "Newsletter drops, session alerts, and first word on The Camp — Underground Draft's pre-launch list.",
};

// Permanent standalone route (Skill §5, item 1) — safe to link from social
// or ads independent of the rest of the site.
export default function NotifyPage() {
  return <WaitlistLanding />;
}
