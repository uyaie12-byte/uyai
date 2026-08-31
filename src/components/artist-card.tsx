import Link from "next/link";
import type { Artist } from "@/lib/content-types";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link href={`/artists/${artist.slug}`} className="group block">
      <ImagePlaceholder
        label={artist.name}
        sublabel={artist.location}
        ratio="aspect-[3/4]"
        pattern="grid"
        tone="red"
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
      <div className="mt-3">
        <p className="font-display text-2xl leading-tight tracking-wide">{artist.name}</p>
        <p className="mt-1 font-sans text-sm text-muted">{artist.tagline}</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          {artist.discipline} — {artist.location}
        </p>
      </div>
    </Link>
  );
}
