import Link from "next/link";
import type { Article } from "@/lib/articles";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Tag } from "@/components/tag";

export function ArticleCard({ article, ratio = "aspect-[4/3]" }: { article: Article; ratio?: string }) {
  return (
    <Link href={`/the-draft/${article.slug}`} className="group block">
      {article.image ? (
        <div className={`overflow-hidden border border-ink ${ratio}`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- external Substack-hosted image, not part of next/image's optimized domain set */}
          <img
            src={article.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <ImagePlaceholder
          label={article.category}
          sublabel={new Date(article.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          ratio={ratio}
          pattern="stripes"
          tone="paper"
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      )}
      <div className="mt-3">
        <Tag>{article.category}</Tag>
        <p className="mt-2 font-display text-xl leading-tight tracking-wide">{article.title}</p>
        <p className="mt-1 line-clamp-2 font-sans text-sm text-muted">{article.dek}</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-muted">
          {article.author} —{" "}
          {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </p>
      </div>
    </Link>
  );
}
