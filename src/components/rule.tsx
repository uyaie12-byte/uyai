type RuleProps = {
  weight?: "thin" | "heavy";
  className?: string;
  tone?: "ink" | "paper";
};

/** A strong horizontal rule — the editorial-grid dividers called for in the brief. */
export function Rule({ weight = "thin", className = "", tone = "ink" }: RuleProps) {
  const color = tone === "ink" ? "bg-ink" : "bg-paper";
  const height = weight === "heavy" ? "h-[3px]" : "h-px";
  return <div className={`${height} w-full ${color} ${className}`} />;
}
