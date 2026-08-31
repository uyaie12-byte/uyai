import Link from "next/link";
import type { Release } from "@/lib/content-types";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Tag } from "@/components/tag";

export function ReleaseCard({ release }: { release: Release }) {
  return (
    <Link href={`/new-music/${release.slug}`} className="group block">
      <ImagePlaceholder
        label={release.artistName}
        sublabel={release.type}
        ratio="aspect-square"
        pattern="halftone"
        tone="ink"
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
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
