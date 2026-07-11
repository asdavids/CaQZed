import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("inflation-savings-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>If your savings account earns 6% interest but inflation is running at 13%, you're losing purchasing power at roughly 7% per year — even though your account balance is growing. This is a real and persistent problem for Zambian savers.</p>

      <h2>What inflation actually means for your money</h2>
      <p>K10,000 today at 13% annual inflation is worth the equivalent of K8,850 in real terms in 12 months. In 5 years, it buys the equivalent of K5,428 worth of goods at today's prices. Your money isn't just not growing — it's shrinking in real terms.</p>

      <h2>The savings account problem</h2>
      <p>Most bank savings accounts in Zambia pay interest well below the prevailing inflation rate. This means keeping money in a standard savings account is, in real terms, a guaranteed way to lose purchasing power slowly. The account feels safe. The money grows nominally. But your ability to buy things with it is declining.</p>

      <h2>What beats inflation?</h2>
      <p>Historically in Zambia, assets that have tended to keep pace with or exceed inflation include:</p>
      <ul>
        <li><strong>Treasury Bills:</strong> yields often track close to or above inflation, depending on the monetary policy environment</li>
        <li><strong>Property:</strong> Zambian property values have generally increased over time, though with significant variation by location and quality</li>
        <li><strong>Productive business assets:</strong> a business that can raise prices with inflation preserves purchasing power in a way cash cannot</li>
        <li><strong>USD or ZAR denominated assets:</strong> for those with access, holding some savings in a foreign currency provides a hedge against kwacha depreciation</li>
      </ul>

      <h2>The practical approach</h2>
      <p>Keep emergency funds in accessible accounts (accepting the inflation cost for that liquidity). For medium-term savings, T-bills offer better rates than standard accounts with minimal additional risk. For long-term savings, consider a broader investment strategy.</p>
    </BlogShell>
  );
}