type ImagePlaceholderProps = {
  label: string;
  sublabel?: string;
  ratio?: string; // Tailwind aspect-* arbitrary value, e.g. "aspect-[4/5]"
  pattern?: "halftone" | "stripes" | "grid";
  tone?: "paper" | "ink" | "red";
  className?: string;
};

/**
 * Styled placeholder for artist/release/article imagery — no photography
 * exists yet for this seed content, and a stock photo or a broken <img>
 * would both read as generic. This reads as an archival contact sheet
 * instead: a bordered frame, registration ticks, a print texture, and the
 * item's own name set in type. Swap for real photography per-entry later;
 * the frame (border, ticks, aspect ratio) is what components should keep.
 */
export function ImagePlaceholder({
  label,
  sublabel,
  ratio = "aspect-[4/5]",
  pattern = "halftone",
  tone = "ink",
  className = "",
}: ImagePlaceholderProps) {
  const surface =
    tone === "red" ? "bg-red text-paper" : tone === "paper" ? "bg-paper-dim text-ink" : "bg-ink text-paper";

  const textureStyle =
    pattern === "halftone"
      ? {
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1.4px)`,
          backgroundSize: "8px 8px",
        }
      : pattern === "stripes"
        ? {
            backgroundImage: `repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 9px)`,
          }
        : {
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          };

  return (
    <div className={`relative overflow-hidden border border-ink ${ratio} ${surface} ${className}`}>
      <div className="absolute inset-0 opacity-[0.16]" style={textureStyle} aria-hidden="true" />

      {/* registration ticks */}
      <span aria-hidden="true" className="absolute left-2 top-2 h-3 w-3 border-l border-t border-current opacity-60" />
      <span aria-hidden="true" className="absolute right-2 top-2 h-3 w-3 border-r border-t border-current opacity-60" />
      <span aria-hidden="true" className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-current opacity-60" />
      <span aria-hidden="true" className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-current opacity-60" />

      <div className="relative flex h-full flex-col items-center justify-center gap-1 px-6 text-center">
        <p className="font-display text-xl uppercase leading-tight tracking-wide sm:text-2xl">{label}</p>
        {sublabel && (
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">{sublabel}</p>
        )}
      </div>
    </div>
  );
}
