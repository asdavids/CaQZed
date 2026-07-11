import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("employment-code-act-rights-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>The Employment Code Act No. 3 of 2019 governs most employment relationships in Zambia. Here's a plain-English summary of the key entitlements every employee should know.</p>

      <h2>Working hours and overtime</h2>
      <p>The standard working week in Zambia is 48 hours. Any hours worked beyond that must be compensated at 1.5 times your normal hourly rate. Work on a rest day or public holiday is compensated at 2 times your hourly rate. Your hourly rate for this purpose is your monthly salary divided by 208 hours.</p>

      <h2>Annual leave</h2>
      <p>You're entitled to a minimum of 2 days of paid annual leave for every month of continuous service — 24 days per year. This entitlement begins after 12 months of service. You can carry over a maximum of 6 unused leave days to the following year; beyond that, your employer should either give you additional leave or pay it out.</p>

      <h2>Leave pay formula</h2>
      <p>When you take or cash out leave, it's calculated using the Employment Code Act's Fifth Schedule formula: (Full monthly pay × leave days) ÷ 26. "Full pay" includes your basic salary and regular allowances.</p>

      <h2>Gratuity for fixed-term contracts</h2>
      <p>If you're on a fixed-term contract of more than 12 months, you're entitled to gratuity at the end of the contract — a minimum of 25% of the total basic pay earned during the contract. This is a statutory minimum; your contract may specify a higher rate.</p>

      <h2>Notice periods</h2>
      <p>Both employer and employee must give proper notice to end an employment relationship. The required notice period varies by how long you've worked there — from one day for less than 3 months, up to 3 months for 5+ years of service for monthly-paid employees.</p>

      <h2>What the Act doesn't cover</h2>
      <p>Senior management and some categories of workers may be exempted from certain provisions — particularly overtime entitlements. Check your specific contract and designation. The Act also doesn't automatically cover all casual or seasonal workers in the same way.</p>
    </BlogShell>
  );
}