import type { Metadata } from "next";
import { throwbacks } from "@/content/throwbacks";
import { ThrowbackCard } from "@/components/throwback-card";
import { HubHeader } from "@/components/hub-header";

export const metadata: Metadata = {
  title: "Archive",
  description: "Revisiting the songs, artists and moments that deserve another listen.",
};

export default function ArchivePage() {
  return (
    <>
      <HubHeader
        index="06"
        eyebrow="Throwback / Archive"
        title="ARCHIVE"
        dek="Revisiting the songs, artists and moments that deserve another listen."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
          {throwbacks.map((t) => (
            <ThrowbackCard key={t.slug} throwback={t} imageTone="ink" />
          ))}
        </div>
      </section>
    </>
  );
}
