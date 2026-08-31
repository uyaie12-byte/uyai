import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/articles";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Tag } from "@/components/tag";
import { Rule } from "@/components/rule";
import { ArticleCard } from "@/components/article-card";
import { EmailCaptureForm } from "@/components/email-capture-form";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.dek };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article>
      <div className="border-b-[3px] border-ink pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl px-5 pb-14 sm:px-8">
          <Tag tone="red">{article.category}</Tag>
          <h1 className="mt-5 text-balance font-display text-4xl leading-[1.02] tracking-wide sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-xl text-balance font-sans text-lg text-muted">{article.dek}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {article.author} —{" "}
            {new Date(article.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <ImagePlaceholder label={article.category} ratio="aspect-[16/9]" pattern="stripes" tone="ink" />

        <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-ink/90">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-14 border border-ink p-6 sm:p-8">
          <p className="font-display text-2xl tracking-wide">Stay in the loop.</p>
          <p className="mt-2 max-w-md font-sans text-sm text-muted">
            The music worth knowing, delivered straight to your inbox.
          </p>
          <div className="mt-5">
            <EmailCaptureForm source="article" buttonLabel="Join The Draft" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="border-t border-ink/20 bg-paper-dim py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Keep Reading</p>
              <Link href="/the-draft" className="font-mono text-sm font-semibold uppercase tracking-[0.15em] hover:text-red">
                All stories →
              </Link>
            </div>
            <Rule className="mt-4" />
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
