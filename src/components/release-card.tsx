import Link from "next/link";
import type { Release } from "@/lib/content-types";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Tag } from "@/components/tag";

export function ReleaseCard({ release }: { release: Release }) {
  return (
    <Link href={`/new-music/${release.slug}`} className="group block">
      {release.image ? (
        <div className="card-media aspect-square overflow-hidden border border-ink">
          {/* eslint-disable-next-line @next/next/no-img-element -- external press/CDN-hosted cover art, not part of next/image's optimized domain set */}
          <img
            src={release.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>
      ) : (
        <ImagePlaceholder
          label={release.artistName}
          sublabel={release.type}
          ratio="aspect-square"
          pattern="halftone"
          tone="ink"
          className="card-media"
        />
      )}
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-lg leading-tight tracking-wide">{release.title}</p>
          <p className="font-mono text-xs uppercase tracking-wide text-muted">{release.artistName}</p>
        </div>
        <Tag tone="red">{release.type}</Tag>
      </div>
    </Link>
  );
}
