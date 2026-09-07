import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

type HubHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  dek: string;
};

export function HubHeader({ index, eyebrow, title, dek }: HubHeaderProps) {
  return (
    <div className="border-b-[3px] border-ink pb-14 pt-14 sm:pt-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionLabel index={index} title={eyebrow} />
        <h1 className="line-mask mt-6 max-w-4xl text-balance font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl lg:text-8xl">
          <span className="line-in">{title}</span>
        </h1>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-balance font-sans text-lg text-muted">{dek}</p>
        </Reveal>
      </div>
    </div>
  );
}
