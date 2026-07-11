import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Tax, Salary & Financial Guides for Zambia",
  description: "Practical guides on PAYE, NAPSA, importing vehicles, starting a business, and managing money in Zambia.",
  alternates: { canonical: "/blog" },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Tax & ZRA": "bg-brand-green-50 text-brand-green",
  "Salary & Employment": "bg-brand-gold-50 text-brand-gold",
  "Business": "bg-surface-muted text-foreground-muted",
  "Vehicles": "bg-brand-green-50 text-brand-green",
  "Personal Finance": "bg-brand-gold-50 text-brand-gold",
  "Investments": "bg-surface-muted text-foreground-muted",
};

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-[28px] sm:text-[34px] font-semibold tracking-tight">
            Guides & Articles
          </h1>
          <p className="mt-3 text-[15px] text-foreground-muted">
            Plain-language guides on tax, salary, importing vehicles, and
            managing money in Zambia — written for real people, not accountants.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <span key={cat} className={`rounded-full px-3 py-1 text-[12px] font-medium ${CATEGORY_COLORS[cat] ?? "bg-surface-muted text-foreground-muted"}`}>
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-surface p-5 hover:border-brand-green/40 hover:shadow-[0_8px_24px_-12px_rgba(0,133,63,0.2)] transition-all"
            >
              <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${CATEGORY_COLORS[post.category] ?? "bg-surface-muted text-foreground-muted"}`}>
                {post.category}
              </span>
              <h2 className="mt-3 font-display text-[15px] font-semibold leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground-muted line-clamp-3">
                {post.excerpt}
              </p>
              <p className="mt-4 text-[12px] text-foreground-muted flex items-center gap-1">
                <span>{new Date(post.date).toLocaleDateString("en-ZM", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="ml-auto text-brand-green text-[13px] font-medium">
                  Read →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
