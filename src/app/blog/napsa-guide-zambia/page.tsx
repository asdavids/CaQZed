import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("napsa-guide-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>NAPSA — the National Pension Scheme Authority — is Zambia's mandatory pension fund. If you're formally employed, both you and your employer contribute to it every month, whether you think about it or not.</p>

      <h2>How contributions are calculated</h2>
      <p>Both you and your employer each contribute 5% of your gross salary — a combined 10% going into your pension account every month. Contributions are capped: once your salary exceeds the insurable earnings ceiling (approximately K37,236/month), both your contribution and your employer's are capped at K1,861.80 each per month.</p>

      <h2>The cap matters more than you think</h2>
      <p>For high earners, the cap means your effective NAPSA contribution rate is lower than 5% of actual salary. For most employees, the cap is irrelevant — their salary is below the ceiling and they pay 5% throughout.</p>

      <h2>What happens to the money?</h2>
      <p>Your contributions go into an individual member account at NAPSA. The fund is invested collectively, and members receive a share of investment returns. You can access your benefits on retirement (at the statutory age), on permanent emigration, on certified permanent incapacity, or in certain other defined circumstances.</p>

      <h2>Changing jobs</h2>
      <p>Your NAPSA contributions follow you regardless of employer. When you change jobs, your new employer makes contributions to the same NAPSA member number. You don't lose contributions when you leave a job.</p>

      <h2>Finding your balance and benefit estimate</h2>
      <p>Contact NAPSA directly or log into their member portal to check your contribution history and get a benefit projection. The Pension Contribution Projection on CaQZed shows estimated total contributions over your working years, but it doesn't calculate the actual pension payout — that's NAPSA's formula to apply.</p>
    </BlogShell>
  );
}