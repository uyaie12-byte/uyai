import type { Metadata } from "next";
import { releases } from "@/content/releases";
import { ReleaseCard } from "@/components/release-card";
import { HubHeader } from "@/components/hub-header";

export const metadata: Metadata = {
  title: "New Music",
  description: "Fresh releases and sounds we're keeping on repeat.",
};

export default function NewMusicPage() {
  return (
    <>
      <HubHeader
        index="02"
        eyebrow="New Music"
        title="NEW MUSIC"
        dek="Fresh releases and sounds we're keeping on repeat."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
          {releases.map((r) => (
            <ReleaseCard key={r.slug} release={r} />
          ))}
        </div>
      </section>
    </>
  );
}
