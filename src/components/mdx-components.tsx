import type { MDXComponents } from "mdx/types";
import { Rule } from "@/components/rule";

/**
 * Typography for the actual article body — MDXRemote renders these in
 * place of raw HTML tags, so an imported piece's headings/lists/quotes
 * inherit the site's editorial type system instead of browser defaults.
 */
export const mdxComponents: MDXComponents = {
  p: (props) => <p className="font-sans text-lg leading-relaxed text-ink/90" {...props} />,
  h2: (props) => (
    <h2 className="mt-10 font-display text-2xl uppercase tracking-wide sm:text-3xl" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 font-display text-xl uppercase tracking-wide sm:text-2xl" {...props} />
  ),
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  a: (props) => (
    <a className="underline decoration-red decoration-2 underline-offset-2 hover:text-red" {...props} />
  ),
  ul: (props) => <ul className="ml-5 list-disc space-y-2 font-sans text-lg text-ink/90" {...props} />,
  ol: (props) => <ol className="ml-5 list-decimal space-y-2 font-sans text-lg text-ink/90" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-2 border-red pl-5 font-display text-xl italic tracking-wide" {...props} />
  ),
  hr: () => <Rule className="my-10" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element -- external Substack-hosted images, not part of next/image's optimized domain set
    <img className="my-8 w-full border border-ink" loading="lazy" alt="" {...props} />
  ),
  figcaption: (props) => (
    <figcaption className="-mt-6 mb-8 font-mono text-xs uppercase tracking-[0.15em] text-muted" {...props} />
  ),
};
