type BrandMarkProps = {
  size?: number;
  className?: string;
  /** "ink" = black mark for paper backgrounds. "paper" = cream mark for ink/charcoal backgrounds. */
  tone?: "ink" | "paper";
};

/**
 * The Underground Draft primary mark — a vinyl seal with the wordmark set
 * on a circular path, a grunge/photocopy edge (SVG turbulence displacement)
 * and a small broken-ring "crack" accent in red. Used as the nav logo, the
 * footer mark, and as a hero accent (Skill brief's stamp/seal motif).
 */
export function BrandMark({ size = 64, className = "", tone = "ink" }: BrandMarkProps) {
  const main = tone === "ink" ? "var(--ink)" : "var(--paper)";
  const bg = tone === "ink" ? "var(--paper)" : "var(--ink)";
  const uid = tone; // stable id per tone so two instances don't collide

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="The Underground Draft"
      className={className}
    >
      <defs>
        <filter id={`rough-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" />
        </filter>
        <path id={`top-${uid}`} d="M 30,100 A 70,70 0 0 1 170,100" fill="none" />
        <path id={`bottom-${uid}`} d="M 170,105 A 70,70 0 0 1 30,105" fill="none" />
      </defs>

      <g filter={`url(#rough-${uid})`}>
        <circle cx="100" cy="100" r="96" fill={bg} stroke={main} strokeWidth="3" />
        <circle cx="100" cy="100" r="80" fill="none" stroke={main} strokeWidth="1" opacity="0.5" />
        <circle cx="100" cy="100" r="70" fill="none" stroke={main} strokeWidth="1" opacity="0.5" />

        <text fill={main} fontFamily="var(--font-display)" fontSize="19" letterSpacing="1.5">
          <textPath href={`#top-${uid}`} startOffset="50%" textAnchor="middle">
            UNDERGROUND
          </textPath>
        </text>
        <text fill={main} fontFamily="var(--font-display)" fontSize="19" letterSpacing="2">
          <textPath href={`#bottom-${uid}`} startOffset="50%" textAnchor="middle">
            DRAFT
          </textPath>
        </text>

        <circle cx="100" cy="100" r="34" fill={main} />
        <circle cx="100" cy="100" r="5" fill={bg} />
      </g>

      {/* broken-ring crack accent, bottom right */}
      <path
        d="M 165,148 L 178,140 L 172,156 L 184,152"
        fill="none"
        stroke="var(--red)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
