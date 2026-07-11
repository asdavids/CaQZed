import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("compound-interest-explained-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Compound interest is when the interest you earn is added to your principal, so next period you earn interest on the interest too. Over time, this creates exponential rather than linear growth — which is why it's often called the most powerful force in personal finance.</p>

      <h2>Simple vs compound: a concrete example</h2>
      <p>You invest K10,000 at 10% per year for 10 years.</p>
      <ul>
        <li>With simple interest: you earn K1,000 per year, K10,000 total. End balance: K20,000.</li>
        <li>With compound interest (annual): end balance is K25,937 — K5,937 more, for doing nothing differently.</li>
      </ul>

      <h2>The time factor dwarfs everything else</h2>
      <p>Starting 10 years earlier with the same amount and rate matters more than doubling the amount. K10,000 at 10% for 30 years grows to K174,494. Starting with K20,000 but only 20 years grows to K134,550 — less, despite twice the starting capital.</p>

      <h2>Compounding frequency matters</h2>
      <p>The more often interest compounds, the faster it grows. Monthly compounding at 12% per year produces K13,003 after 2 years on K10,000. Annual compounding at the same rate produces K12,544. This is why savings accounts that compound monthly are slightly better than those that compound annually at the same headline rate.</p>

      <h2>The practical lesson for Zambian savers</h2>
      <p>Whatever you can put aside now — even a modest amount — will compound significantly over years. The biggest gains come from starting early and leaving funds invested. Use the Compound Interest Calculator to see how your specific amount grows over different time periods and rates.</p>
    </BlogShell>
  );
}