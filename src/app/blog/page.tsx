import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog/registry";

export const metadata: Metadata = {
  title: "Blog — Tax, Salary and Finance Guides for Zambia",
  description: "Plain-English guides to PAYE, NAPSA, vehicle import duty, loans, investments and more — written specifically for Zambia.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <h1 className="font-display text-[28px] sm:text-[34px] font-semibold tracking-tight">
          Guides &amp; Articles
        </h1>
        <p className="mt-2 text-[15px] text-foreground-muted max-w-xl">
          Plain-English guides to tax, salary, vehicles, investments, and everyday finance in Zambia.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-border px-3 py-1 text-[12px] font-medium text-foreground-muted"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-surface p-5 hover:border-brand-green/40 hover:shadow-[0_8px_24px_-12px_rgba(0,133,63,0.2)] transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="rounded-full bg-brand-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-green uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="text-[11px] text-foreground-muted">{post.readingMinutes} min</span>
              </div>
              <h2 className="font-display text-[15px] font-semibold leading-snug group-hover:text-brand-green transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground-muted line-clamp-2">
                {post.description}
              </p>
              <p className="mt-3 text-[12px] text-foreground-muted">
                {new Date(post.publishedAt).toLocaleDateString("en-ZM", {
                  day: "numeric", month: "short", year: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
