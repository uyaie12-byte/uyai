type FigureDoodleProps = {
  variant: "vocalist" | "writer" | "producer" | "listener" | "dj" | "dancer";
  size?: number;
  className?: string;
  tone?: "ink" | "paper" | "red";
  /** Idle bob/sway loop — the flyer's figures read as mid-take, not static. */
  animate?: boolean;
  /** Stagger multiple animated figures so they don't move in lockstep. */
  delay?: number;
};

/**
 * Hand-drawn stick-figure doodles — the line-art style from The Camp
 * flyer's 3-panel illustration (vocal booth, writing, producing), reused
 * as a recurring motif elsewhere on the site. Decorative, used sparingly.
 */
export function FigureDoodle({
  variant,
  size = 64,
  className = "",
  tone = "ink",
  animate = false,
  delay = 0,
}: FigureDoodleProps) {
  const stroke = `var(--${tone})`;
  const animClass = animate ? "animate-figure-bob" : "";
  const style = animate && delay ? { animationDelay: `${delay}s` } : undefined;

  if (variant === "vocalist") {
    // headphones + mic, standing in a booth
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        role="img"
        aria-hidden="true"
        className={`${animClass} ${className}`}
        style={style}
      >
        <circle cx="46" cy="24" r="11" fill="none" stroke={stroke} strokeWidth="3" />
        <path d="M32,20 A14,14 0 0 1 60,20" fill="none" stroke={stroke} strokeWidth="3" />
        <rect x="29" y="20" width="6" height="9" rx="1" fill={stroke} />
        <rect x="57" y="20" width="6" height="9" rx="1" fill={stroke} />
        <line x1="46" y1="35" x2="46" y2="66" stroke={stroke} strokeWidth="3" />
        <line x1="46" y1="46" x2="30" y2="40" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="46" x2="63" y2="38" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="66" x2="35" y2="90" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="66" x2="57" y2="90" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        {/* mic stand */}
        <line x1="76" y1="30" x2="76" y2="88" stroke={stroke} strokeWidth="2.5" />
        <circle cx="76" cy="24" r="7" fill="none" stroke={stroke} strokeWidth="2.5" />
        <line x1="66" y1="88" x2="86" y2="88" stroke={stroke} strokeWidth="2.5" />
      </svg>
    );
  }

  if (variant === "writer") {
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        role="img"
        aria-hidden="true"
        className={`${animClass} ${className}`}
        style={style}
      >
        <circle cx="48" cy="22" r="11" fill="none" stroke={stroke} strokeWidth="3" />
        <line x1="48" y1="33" x2="48" y2="64" stroke={stroke} strokeWidth="3" />
        <line x1="48" y1="44" x2="70" y2="52" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="48" y1="44" x2="28" y2="40" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="48" y1="64" x2="37" y2="90" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="48" y1="64" x2="59" y2="90" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        {/* pen + notepad */}
        <rect x="62" y="46" width="22" height="16" fill="none" stroke={stroke} strokeWidth="2.5" transform="rotate(-8 73 54)" />
        <line x1="68" y1="53" x2="79" y2="51" stroke={stroke} strokeWidth="1.5" />
        <line x1="69" y1="57" x2="80" y2="55" stroke={stroke} strokeWidth="1.5" />
        <line x1="70" y1="48" x2="84" y2="44" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "producer") {
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        role="img"
        aria-hidden="true"
        className={`${animClass} ${className}`}
        style={style}
      >
        <circle cx="46" cy="22" r="11" fill="none" stroke={stroke} strokeWidth="3" />
        <line x1="46" y1="33" x2="46" y2="64" stroke={stroke} strokeWidth="3" />
        <line x1="46" y1="44" x2="27" y2="38" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="44" x2="66" y2="50" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="64" x2="35" y2="90" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="64" x2="57" y2="90" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        {/* keyboard */}
        <path d="M62,48 L88,54 L88,68 L62,68 Z" fill="none" stroke={stroke} strokeWidth="2.5" />
        <line x1="67" y1="58" x2="67" y2="65" stroke={stroke} strokeWidth="1.5" />
        <line x1="73" y1="58" x2="73" y2="66" stroke={stroke} strokeWidth="1.5" />
        <line x1="79" y1="59" x2="79" y2="67" stroke={stroke} strokeWidth="1.5" />
      </svg>
    );
  }

  if (variant === "dj") {
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        role="img"
        aria-hidden="true"
        className={`${animClass} ${className}`}
        style={style}
      >
        <circle cx="50" cy="28" r="11" fill="none" stroke={stroke} strokeWidth="3" />
        <line x1="50" y1="39" x2="50" y2="66" stroke={stroke} strokeWidth="3" />
        <line x1="50" y1="48" x2="32" y2="40" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="48" x2="68" y2="40" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="66" x2="38" y2="88" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="66" x2="62" y2="88" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <rect x="15" y="70" width="26" height="6" fill={stroke} opacity="0.85" />
        <circle cx="60" cy="73" r="8" fill="none" stroke={stroke} strokeWidth="2.5" />
        <circle cx="60" cy="73" r="2" fill={stroke} />
      </svg>
    );
  }

  if (variant === "dancer") {
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        role="img"
        aria-hidden="true"
        className={`${animClass} ${className}`}
        style={style}
      >
        <circle cx="46" cy="20" r="10" fill="none" stroke={stroke} strokeWidth="3" />
        <line x1="46" y1="30" x2="52" y2="58" stroke={stroke} strokeWidth="3" />
        <line x1="52" y1="58" x2="34" y2="80" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="52" y1="58" x2="72" y2="72" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="49" y1="40" x2="24" y2="30" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <line x1="49" y1="40" x2="70" y2="18" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // listener — headphones, at rest
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-hidden="true"
      className={`${animClass} ${className}`}
      style={style}
    >
      <circle cx="50" cy="30" r="12" fill="none" stroke={stroke} strokeWidth="3" />
      <path d="M35,26 A15,15 0 0 1 65,26" fill="none" stroke={stroke} strokeWidth="3" />
      <rect x="31" y="26" width="6" height="10" rx="1" fill={stroke} />
      <rect x="63" y="26" width="6" height="10" rx="1" fill={stroke} />
      <line x1="50" y1="42" x2="50" y2="72" stroke={stroke} strokeWidth="3" />
      <line x1="50" y1="52" x2="33" y2="62" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="52" x2="67" y2="62" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="72" x2="40" y2="92" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="72" x2="60" y2="92" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
