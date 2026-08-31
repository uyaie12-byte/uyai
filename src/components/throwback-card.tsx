import Link from "next/link";
import type { Throwback } from "@/lib/content-types";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function ThrowbackCard({
  throwback,
  imageTone = "paper",
}: {
  throwback: Throwback;
  /** Placeholder tone — pick one that contrasts with the section it's placed on. */
  imageTone?: "paper" | "ink" | "red";
}) {
  return (
    <Link href={`/archive/${throwback.slug}`} className="group block">
      <ImagePlaceholder
        label={throwback.artistName}
        sublabel={throwback.year}
        ratio="aspect-square"
        pattern="stripes"
        tone={imageTone}
        className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
      />
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
