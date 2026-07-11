import Link from "next/link";
import { Container } from "./container";
import { CALCULATORS } from "@/lib/calculators/registry";
import type { BlogPost } from "@/lib/blog/registry";
import { BackButton } from "./back-button";

export function BlogShell({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const related = post.relatedCalculators
    .map((slug) => CALCULATORS.find((c) => c.slug === slug))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "CaQZed",
      url: "https://caqzed.com",
    },
    url: `https://caqzed.com/blog/${post.slug}`,
  };

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-ZM", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Container>
        <div className="flex items-center justify-between mb-4">
          <BackButton />
        </div>
        <nav className="text-[13px] text-foreground-muted mb-6">
          <Link href="/" className="hover:text-brand-green">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-green">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">{post.category}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            <div className="mb-2 flex items-center gap-3">
              <span className="rounded-full bg-brand-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-green uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-[12px] text-foreground-muted">{post.readingMinutes} min read</span>
            </div>
            <h1 className="font-display text-[26px] sm:text-[32px] font-semibold tracking-tight leading-[1.12]">
              {post.title}
            </h1>
            <p className="mt-2 text-[13px] text-foreground-muted">{formattedDate}</p>

            <div className="mt-8 prose-content text-[15px] leading-[1.75] text-foreground space-y-5 [&>h2]:font-display [&>h2]:text-[20px] [&>h2]:font-semibold [&>h2]:mt-10 [&>h2]:mb-3 [&>h3]:font-display [&>h3]:text-[17px] [&>h3]:font-semibold [&>h3]:mt-7 [&>h3]:mb-2 [&>p]:text-[15px] [&>p]:text-foreground-muted [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul>li]:text-foreground-muted [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol>li]:text-foreground-muted [&>blockquote]:border-l-4 [&>blockquote]:border-brand-green [&>blockquote]:pl-4 [&>blockquote]:text-foreground-muted">
              {children}
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-2xl border border-border bg-brand-green-50 p-5">
              <h3 className="text-[13px] font-semibold mb-1">Summary</h3>
              <p className="text-[13px] leading-relaxed text-foreground-muted">
                {post.description}
              </p>
            </div>

            {related.length > 0 && (
              <div>
                <h3 className="text-[13px] font-semibold mb-3">Related calculators</h3>
                <div className="space-y-2">
                  {related.map((calc) =>
                    calc ? (
                      <Link
                        key={calc.slug}
                        href={`/calculators/${calc.slug}`}
                        className="block rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[13px] font-medium hover:border-brand-green/40 transition-colors"
                      >
                        {calc.name} →
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-surface-muted p-5">
              <p className="text-[12px] leading-relaxed text-foreground-muted">
                Figures quoted in this article are based on rates verified at time of publication.
                Always confirm current rates with ZRA, NAPSA, NHIMA or a licensed professional
                before making financial decisions.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
