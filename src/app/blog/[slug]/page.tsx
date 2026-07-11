import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";
import { CALCULATORS } from "@/lib/calculators/registry";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = (post.relatedCalculators ?? [])
    .map((s) => CALCULATORS.find((c) => c.slug === s))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://caqzed.com/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "CaQZed",
      url: "https://caqzed.com",
    },
  };

  return (
    <div className="py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Container>
        <nav className="text-[13px] text-foreground-muted mb-6">
          <Link href="/" className="hover:text-brand-green">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-green">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article>
            <span className="inline-flex rounded-full bg-brand-green-50 px-3 py-0.5 text-[12px] font-semibold text-brand-green">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-[26px] sm:text-[32px] font-semibold tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="mt-3 text-[15px] text-foreground-muted">{post.excerpt}</p>
            <p className="mt-2 text-[12px] text-foreground-muted">
              {new Date(post.date).toLocaleDateString("en-ZM", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div
              className="mt-8 prose-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <aside className="space-y-6">
            {related.length > 0 && (
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="text-[13px] font-semibold">Related calculators</h3>
                <div className="mt-3 space-y-2">
                  {related.map((calc) =>
                    calc ? (
                      <Link
                        key={calc.slug}
                        href={`/calculators/${calc.slug}`}
                        className="block rounded-xl border border-border bg-surface-muted px-3.5 py-2.5 text-[13px] font-medium hover:border-brand-green/40 transition-colors"
                      >
                        {calc.name} →
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-brand-green-50 p-5">
              <h3 className="text-[13px] font-semibold">Browse all guides</h3>
              <p className="mt-1.5 text-[13px] text-foreground-muted">
                More practical guides on tax, salary, vehicles and money in Zambia.
              </p>
              <Link
                href="/blog"
                className="mt-3 inline-flex text-[13px] font-medium text-brand-green hover:text-brand-green-700"
              >
                View all articles →
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
