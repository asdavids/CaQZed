import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("starting-a-business-zambia-tax-guide")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Starting a business in Zambia comes with a set of tax obligations that most new entrepreneurs don't fully understand until they get a letter from ZRA. Here's a clear map of what to know from day one.</p>

      <h2>Turnover tax: your starting point</h2>
      <p>If your annual revenue is below K5 million, you're in the turnover tax regime — 5% of gross revenue, regardless of profit or loss. This is simpler than corporate tax and doesn't require complex accounting. Register with ZRA and file quarterly returns.</p>

      <h2>When to think about VAT</h2>
      <p>If your annual taxable turnover exceeds the ZRA threshold, you must register for VAT and charge 16% on your sales. If you're below the threshold but selling primarily to other VAT-registered businesses, voluntary registration can be beneficial — you'd reclaim VAT you pay on business expenses.</p>

      <h2>Hiring employees: what you owe</h2>
      <p>The moment you have employees, three obligations kick in:</p>
      <ul>
        <li><strong>PAYE:</strong> deduct and remit income tax from salaries monthly</li>
        <li><strong>NAPSA:</strong> deduct 5% from employees and add 5% as employer, remit monthly</li>
        <li><strong>NHIMA:</strong> deduct 1% from employees and add 1% as employer, remit monthly</li>
      </ul>
      <p>Additionally, as employer you pay a <strong>Skills Development Levy</strong> of 0.5% of total payroll.</p>

      <h2>Corporate tax: when you grow</h2>
      <p>Once above the K5 million turnover threshold, you transition to standard corporate income tax — 30% of taxable profit for most sectors. This requires proper accounting, allowable deduction tracking, and annual tax returns.</p>

      <h2>The most common first-year mistake</h2>
      <p>Not setting aside tax throughout the year. Whether you're paying turnover tax quarterly or filing a corporate return annually, the liability accumulates. Set aside the estimated tax portion of every sale from the start — it's far harder to find a lump sum retroactively.</p>

      <h2>Get registered early</h2>
      <p>Register your business and get a Taxpayer Identification Number (TPIN) from ZRA as early as possible. Many contracts, banks, and government tenders require one. It's free and straightforward — don't delay it.</p>
    </BlogShell>
  );
}