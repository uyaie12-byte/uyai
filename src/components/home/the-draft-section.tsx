import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/article-card";
import { SectionLabel } from "@/components/section-label";

export function TheDraftSection() {
  const featured = getAllArticles().slice(0, 3);

  return (
    <section className="border-b border-ink/20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel index="04" title="The Draft" />
            <p className="mt-6 max-w-2xl text-balance font-display text-4xl leading-[1.05] tracking-wide sm:text-6xl">
              Worth paying attention to.
            </p>
            <p className="mt-4 max-w-xl font-sans text-base text-muted">
              A constantly evolving selection of artists, releases and stories.
            </p>
          </div>
          <Link
            href="/the-draft"
            className="font-mono text-sm font-semibold uppercase tracking-[0.15em] hover:text-red"
          >
            Read The Draft →
          </Link>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {featured.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
