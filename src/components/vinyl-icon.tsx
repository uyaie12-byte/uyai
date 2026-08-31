type VinylIconProps = {
  size?: number;
  spinning?: boolean;
  className?: string;
  tone?: "ink" | "paper";
};

/** Plain spinning-disc accent — motion lines, no wordmark. Used for "Now Spinning" / loading states, kept separate from the full BrandMark seal so the seal stays special. */
export function VinylIcon({ size = 28, spinning = false, className = "", tone = "ink" }: VinylIconProps) {
  const main = tone === "ink" ? "var(--ink)" : "var(--paper)";
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-hidden="true"
      className={`${spinning ? "animate-vinyl-spin" : ""} ${className}`}
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke={main} strokeWidth="3" />
      <circle cx="50" cy="50" r="16" fill={main} />
      <circle cx="50" cy="50" r="3" fill="var(--paper)" />
      <path d="M78,28 A47,47 0 0 0 62,15" fill="none" stroke={main} strokeWidth="2" opacity="0.7" />
      <path d="M85,38 A47,47 0 0 0 75,20" fill="none" stroke={main} strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
