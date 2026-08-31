type VinylMarkProps = {
  size?: number;
  spinning?: boolean;
  className?: string;
};

/**
 * The recurring vinyl-record motif (Skill §1) — used as a standalone brand
 * mark and, with `spinning`, as the "Now Spinning" / loading treatment.
 * Kept as inline SVG so its stroke/fill track the design tokens.
 */
export function VinylMark({
  size = 40,
  spinning = false,
  className = "",
}: VinylMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="Underground Draft"
      className={`${spinning ? "animate-vinyl-spin" : ""} ${className}`}
    >
      <circle cx="50" cy="50" r="48" fill="var(--bg-raised)" stroke="var(--border)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border)" strokeWidth="1" />
      <circle cx="50" cy="50" r="33" fill="none" stroke="var(--border)" strokeWidth="1" />
      <circle cx="50" cy="50" r="26" fill="none" stroke="var(--border)" strokeWidth="1" />
      <circle cx="50" cy="50" r="17" fill="var(--accent)" />
      <circle cx="50" cy="50" r="3.2" fill="var(--bg)" />
    </svg>
  );
}
