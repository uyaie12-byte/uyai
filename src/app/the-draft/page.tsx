import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/article-card";
import { HubHeader } from "@/components/hub-header";

export const metadata: Metadata = {
  title: "The Draft",
  description: "Interviews, reviews, culture and commentary from The Underground Draft.",
};

export default function TheDraftPage() {
  const articles = getAllArticles();
  return (
    <>
      <HubHeader
        index="04"
        eyebrow="The Draft"
        title="THE DRAFT"
        dek="A constantly evolving selection of artists, releases and stories worth paying attention to."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
