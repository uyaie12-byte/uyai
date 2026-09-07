type SectionLabelProps = {
  index: string;
  title: string;
  className?: string;
  tone?: "ink" | "paper";
};

/**
 * The small numbered/mono editorial label that sits above every major
 * section — the "technical/editorial information" counterweight to the
 * oversized headlines below it (Skill brief).
 */
export function SectionLabel({ index, title, className = "", tone = "ink" }: SectionLabelProps) {
  const color = tone === "ink" ? "text-ink" : "text-paper";
  const mutedColor = tone === "ink" ? "text-muted" : "text-muted-2";
  return (
    <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] ${className}`}>
      <span className={mutedColor}>{index}</span>
      <span className={`h-px w-8 ${tone === "ink" ? "bg-ink" : "bg-paper"}`} />
      <span className={color}>{title}</span>
    </div>
  );
}
