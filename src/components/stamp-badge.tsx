type StampBadgeProps = {
  text: string;
  sub?: string;
  size?: number;
  className?: string;
  tone?: "ink" | "red";
};

/**
 * A rotated circular stamp — the "circular/stamp-like graphic motif" the
 * brief calls for. Used on featured items ("NEW", "PICK OF THE MONTH",
 * issue numbers) rather than everywhere, so it stays special.
 */
export function StampBadge({ text, sub, size = 92, className = "", tone = "red" }: StampBadgeProps) {
  const uid = `${text}-${sub ?? ""}`.replace(/\s+/g, "");
  const main = tone === "red" ? "var(--red)" : "var(--ink)";
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={[text, sub].filter(Boolean).join(" ")}
      className={`-rotate-[10deg] ${className}`}
    >
      <defs>
        <path id={`stamp-path-${uid}`} d="M 12,50 A 38,38 0 1 1 88,50 A 38,38 0 1 1 12,50" fill="none" />
      </defs>
      <circle cx="50" cy="50" r="46" fill="none" stroke={main} strokeWidth="2" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke={main} strokeWidth="1.5" />
      <text fill={main} fontFamily="var(--font-mono)" fontSize="9.5" fontWeight="500" letterSpacing="2.5">
        <textPath href={`#stamp-path-${uid}`} startOffset="2%">
          {text.toUpperCase()} • {text.toUpperCase()} •
        </textPath>
      </text>
      {sub && (
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fill={main}
          fontFamily="var(--font-display)"
          fontSize="16"
          letterSpacing="0.5"
        >
          {sub}
        </text>
      )}
    </svg>
  );
}
