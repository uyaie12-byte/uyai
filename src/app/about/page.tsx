import type { Metadata } from "next";
import { HubHeader } from "@/components/hub-header";
import { Rule } from "@/components/rule";
import { EmailCaptureForm } from "@/components/email-capture-form";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Underground Draft is an independent music and culture platform dedicated to discovering, spotlighting and documenting the artists, sounds and creative movements shaping Africa's cultural future.",
};

export default function AboutPage() {
  return (
    <>
      <HubHeader
        index="—"
        eyebrow="About"
        title="THE FIRST DRAFT OF WHAT'S NEXT."
        dek="An independent music and culture platform dedicated to discovering, spotlighting and documenting the artists, sounds and creative movements shaping Africa's cultural future."
      />

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="space-y-6 font-sans text-lg leading-relaxed text-ink/90">
          <p>
            We exist in the space between discovery and recognition — finding the artists
            before they&apos;re everywhere, exploring the sounds before they have names, and
            documenting the scenes while they&apos;re still becoming.
          </p>
          <p>
            Our work spans music discovery, artist features, cultural commentary, interviews,
            playlists, creative stories and original experiences.
          </p>
          <p>
            We believe the underground is not simply a smaller version of the mainstream. It is
            where experimentation happens. Where communities form. Where new sounds are tested.
            Where artists build without waiting for permission. And that&apos;s exactly what we
            want to document.
          </p>
          <p>
            The Underground Draft is for the curious listener, the emerging artist, the
            obsessive music lover and anyone who wants to know what&apos;s coming before it
            arrives.
          </p>
          <p className="font-display text-2xl leading-snug tracking-wide text-ink">
            We&apos;re not here to tell you what&apos;s popular.
            <br />
            We&apos;re here to help you find what&apos;s next.
          </p>
        </div>

        <Rule className="my-14" />

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Our Vision</p>
          <p className="mt-4 text-balance font-display text-3xl leading-[1.1] tracking-wide sm:text-4xl">
            To build a leading African music and culture platform that becomes a trusted home
            for discovery, storytelling, community and creative expression.
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-ink/85">
            From emerging artists and underground scenes to live experiences and original
            programming, The Underground Draft aims to document the culture of today while
            helping shape the culture of tomorrow.
          </p>
        </div>

        <Rule className="my-14" />

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Get In Touch</p>
          <p className="mt-4 max-w-md font-sans text-base text-muted">
            Press, partnerships, advertising, or you just want to say hi —{" "}
            <a href="mailto:hello@theundergrounddraft.com" className="text-ink underline hover:text-red">
              hello@theundergrounddraft.com
            </a>
          </p>
        </div>

        <div className="mt-14 border border-ink p-6 sm:p-8">
          <p className="font-display text-2xl tracking-wide">Stay in the loop.</p>
          <p className="mt-2 max-w-md font-sans text-sm text-muted">
            The music worth knowing, delivered straight to your inbox.
          </p>
          <div className="mt-5">
            <EmailCaptureForm source="about" buttonLabel="Join The Draft" />
          </div>
        </div>
      </div>
    </>
  );
}
