import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Articles ("The Draft") are MDX files under /content/articles, one file
 * per article — frontmatter for the card/detail metadata, MDX body for
 * the actual piece (headings, images, lists, quotes, all survive from
 * source instead of being flattened to plain paragraphs).
 *
 * This replaced the earlier src/content/articles.ts array once there was
 * real, formatted content (imported from Substack) to bring in — the rest
 * of the site's content (artists/releases/throwbacks/picks) is still
 * plain typed data, since it's still placeholder seed content.
 */

export type ArticleCategory = "Interview" | "Review" | "Culture" | "Commentary";

export type ArticleMeta = {
  slug: string;
  title: string;
  dek: string;
  category: ArticleCategory;
  author: string;
  date: string; // ISO
  tags: string[];
};

export type Article = ArticleMeta & { content: string };

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

let cache: Article[] | null = null;

export function getAllArticles(): Article[] {
  if (cache) return cache;

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  const articles = files.map((file): Article => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      content,
      title: data.title,
      dek: data.dek,
      category: data.category,
      author: data.author,
      date: data.date,
      tags: data.tags ?? [],
    };
  });

  cache = articles.sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

export function getArticle(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}
