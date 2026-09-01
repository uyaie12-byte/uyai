type TagProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "paper" | "red";
};

/** Square-cornered category chip — deliberately not a rounded pill. */
export function Tag({ children, className = "", tone = "ink" }: TagProps) {
  // "red" is a filled chip rather than an outline: red text at this small
  // size doesn't clear WCAG AA against either paper or ink, but paper text
  // on a solid red fill does, regardless of what background surrounds it.
  const styles =
    tone === "red"
      ? "border-red bg-red text-paper"
      : tone === "paper"
        ? "border-paper text-paper"
        : "border-ink text-ink";
  return (
    <span
      className={`inline-block border px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
