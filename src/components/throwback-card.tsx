import Link from "next/link";
import type { Throwback } from "@/lib/content-types";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function ThrowbackCard({
  throwback,
  imageTone = "paper",
  sectionTone = "paper",
}: {
  throwback: Throwback;
  /** Placeholder tone — pick one that contrasts with the section it's placed on. */
  imageTone?: "paper" | "ink" | "red";
  /** The page/section background this card sits on — picks the hover-lift
   * shadow color so it stays visible against it (an ink shadow disappears
   * on a bg-ink section). */
  sectionTone?: "paper" | "ink";
}) {
  return (
    <Link href={`/archive/${throwback.slug}`} className="group block">
      {throwback.image ? (
        <div
          className={`aspect-square overflow-hidden border border-ink ${sectionTone === "ink" ? "card-media-paper" : "card-media"}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- external press/CDN-hosted cover art, not part of next/image's optimized domain set */}
          <img
            src={throwback.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>
      ) : (
        <ImagePlaceholder
          label={throwback.artistName}
          sublabel={throwback.year}
          ratio="aspect-square"
          pattern="stripes"
          tone={imageTone}
          className={`opacity-90 transition-opacity duration-300 group-hover:opacity-100 ${sectionTone === "ink" ? "card-media-paper" : "card-media"}`}
        />
      )}
      <div className="mt-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">{throwback.year}</p>
        <p className="font-display text-xl leading-tight tracking-wide">{throwback.title}</p>
        <p
          className={`font-mono text-xs uppercase tracking-wide ${imageTone === "paper" ? "text-muted-2" : "text-muted"}`}
        >
          {throwback.artistName}
        </p>
      </div>
    </Link>
  );
}
