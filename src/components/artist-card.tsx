import Link from "next/link";
import type { Artist } from "@/lib/content-types";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link href={`/artists/${artist.slug}`} className="group block">
      {artist.image ? (
        <div className="card-media aspect-[3/4] overflow-hidden border border-ink">
          {/* eslint-disable-next-line @next/next/no-img-element -- external press/CDN-hosted image, not part of next/image's optimized domain set */}
          <img
            src={artist.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>
      ) : (
        <ImagePlaceholder
          label={artist.name}
          sublabel={artist.location}
          ratio="aspect-[3/4]"
          pattern="grid"
          tone="red"
          className="card-media"
        />
      )}
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
