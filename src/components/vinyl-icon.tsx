import Image from "next/image";

type VinylIconProps = {
  size?: number;
  spinning?: boolean;
  className?: string;
  tone?: "ink" | "paper";
};

/** Plain spinning-disc mark (no wordmark) — "Now Spinning" / loading accents, kept separate from BrandMark so the full seal stays special. */
export function VinylIcon({ size = 28, spinning = false, className = "", tone = "ink" }: VinylIconProps) {
  return (
    <Image
      src={tone === "ink" ? "/brand/vinyl-ink.png" : "/brand/vinyl-paper.png"}
      alt=""
      width={size}
      height={size}
      aria-hidden="true"
      className={`${spinning ? "animate-vinyl-spin" : ""} ${className}`}
    />
  );
}
