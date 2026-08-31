import { EmailCaptureForm } from "@/components/email-capture-form";
import { SectionLabel } from "@/components/section-label";

export function NewsletterSection() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionLabel index="07" title="Stay In The Loop" />
        <p className="mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.05] tracking-wide sm:text-6xl lg:text-7xl">
          The music worth knowing.
          <br />
          The artists worth watching.
          <br />
          <span className="text-red">The culture worth talking about.</span>
        </p>
        <p className="mt-6 font-sans text-lg text-muted">Delivered straight to your inbox.</p>

        <div className="mt-10">
          <EmailCaptureForm source="home" buttonLabel="Join The Draft" />
        </div>
      </div>
    </section>
  );
}
