import Image from "next/image";

type BrandMarkProps = {
  size?: number;
  className?: string;
  /** "ink" = black mark for paper backgrounds. "paper" = cream mark for ink/charcoal backgrounds. */
  tone?: "ink" | "paper";
  priority?: boolean;
  /** true for purely decorative uses (background watermarks) — hides it from screen readers instead of announcing the brand name repeatedly. */
  decorative?: boolean;
};

/**
 * The Underground Draft primary mark — the real brand logo (vinyl seal,
 * wordmark set on the groove, broken-ring notch), supplied as artwork and
 * recolored per tone. Used as the nav logo, the footer mark, and as a hero
 * accent.
 */
export function BrandMark({
  size = 64,
  className = "",
  tone = "ink",
  priority = false,
  decorative = false,
}: BrandMarkProps) {
  return (
    <Image
      src={tone === "ink" ? "/brand/mark-ink.png" : "/brand/mark-paper.png"}
      alt={decorative ? "" : "The Underground Draft"}
      aria-hidden={decorative}
      width={size}
      height={size}
      className={className}
      priority={priority}
    />
  );
}
