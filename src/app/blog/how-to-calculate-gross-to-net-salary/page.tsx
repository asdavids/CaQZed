import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("how-to-calculate-gross-to-net-salary")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Your gross salary is what you're offered. Your net salary — take-home pay — is what actually arrives in your account. The gap between the two is made up of three statutory deductions: PAYE, NAPSA, and NHIMA. Here's exactly how each one works.</p>

      <h2>Deduction 1: PAYE</h2>
      <p>PAYE is income tax calculated using ZRA's progressive bands (see our PAYE guide for the full breakdown). For a K15,000 salary, PAYE is approximately K2,827. This is the largest deduction for most employees.</p>

      <h2>Deduction 2: NAPSA</h2>
      <p>NAPSA is your pension contribution — 5% of gross salary, capped at K1,861.80 per month. On K15,000, your NAPSA contribution is K750. Your employer matches this with their own K750 (which doesn't come out of your pay — it's an additional cost to them).</p>

      <h2>Deduction 3: NHIMA</h2>
      <p>NHIMA funds the national health insurance scheme — 1% of your basic salary, with no upper cap. On K15,000 basic, that's K150.</p>

      <h2>Putting it together</h2>
      <ul>
        <li>Gross salary: K15,000</li>
        <li>Minus PAYE: K2,827</li>
        <li>Minus NAPSA: K750</li>
        <li>Minus NHIMA: K150</li>
        <li>Net take-home: K11,273</li>
      </ul>

      <h2>What about other deductions?</h2>
      <p>These three are the only statutory deductions that every employer is required to make. Your payslip may also show other items — loan repayments, union dues, voluntary insurance — but those are specific to your employment arrangement, not universal requirements.</p>

      <h2>Negotiating salary</h2>
      <p>When negotiating, it's worth knowing the difference between gross and net figures. If an employer offers you K15,000 gross, your net is roughly K11,273. If you want K12,000 net, you'd need approximately K16,500 gross. Use the Net to Gross Calculator to work backwards from any target take-home amount.</p>
    </BlogShell>
  );
}