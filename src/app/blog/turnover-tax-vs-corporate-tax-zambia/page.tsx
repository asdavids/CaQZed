import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("turnover-tax-vs-corporate-tax-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Zambia has two main income tax regimes for businesses — turnover tax and corporate income tax. Which one applies to you depends primarily on your annual revenue. Getting this right matters because the two work very differently.</p>

      <h2>Turnover tax: for smaller businesses</h2>
      <p>If your annual taxable turnover is K5 million or below, you're in the turnover tax regime. You pay 5% of your gross turnover — before any deductions. It's simple: no complex profit calculations, no depreciation schedules, no cost deductions. Just 5% of what you bring in.</p>
      <p>This regime is designed to make tax simpler for smaller businesses that may not have sophisticated accounting. The trade-off is that you pay tax even if you make a loss — because you're taxed on revenue, not profit.</p>

      <h2>Corporate income tax: for larger businesses</h2>
      <p>Above K5 million annual turnover, you're in the standard corporate income tax regime — 30% for most sectors (10% for farming and agro-processing, 35% for telecommunications). Unlike turnover tax, this is calculated on taxable profit after allowable deductions, so expenses, depreciation, and other costs reduce your tax bill.</p>

      <h2>Which is better?</h2>
      <p>For a business with thin margins, turnover tax can be brutal — 5% of revenue when your profit margin is 10% means you're paying half your profit in tax. But for a high-margin business, turnover tax can be cheaper than 30% of profit.</p>
      <p>Example: K1 million revenue, K150,000 profit. Turnover tax = K50,000. Corporate tax = K45,000. In this case corporate tax is slightly cheaper. But this changes significantly at different margin levels.</p>

      <h2>What's excluded from turnover tax?</h2>
      <p>Turnover tax doesn't apply to interest income, dividends, royalties, consultancy income, or mining income — these are taxed under different rules even for businesses that would otherwise qualify for turnover tax.</p>

      <h2>Can you choose?</h2>
      <p>Generally no — the regime is determined by your turnover level. If you're approaching the K5 million threshold, it's worth talking to an accountant about timing, planning, and which regime will serve your business better as you scale.</p>
    </BlogShell>
  );
}