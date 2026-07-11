import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("gratuity-zambia-explained")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Gratuity is a lump-sum payment made at the end of a fixed-term employment contract. Under the Employment Code Act 2019, employees on long-term fixed-term contracts are entitled to a minimum gratuity of 25% of the basic pay earned during the contract. Here's how it works in practice.</p>

      <h2>Who qualifies?</h2>
      <p>Gratuity applies specifically to fixed-term contracts that exceed 12 months. If you're on a permanent (indefinite) contract, these gratuity provisions don't apply to you — though you still have other terminal benefit entitlements. If your fixed-term contract is 12 months or less, you're also outside this specific provision.</p>

      <h2>How it's calculated</h2>
      <p>Gratuity = Total basic pay earned during the contract × 25%.</p>
      <p>Example: you're on a 3-year (36-month) fixed-term contract earning K8,000 basic per month. Total basic pay = K288,000. Gratuity = K72,000.</p>
      <p>Note: gratuity is calculated on basic pay only — not allowances, overtime, or bonuses.</p>

      <h2>When is it paid?</h2>
      <p>Gratuity is typically paid at the end of the contract term. If your contract is terminated early (by either party), you're generally entitled to gratuity calculated on the months actually worked.</p>

      <h2>The tax question</h2>
      <p>This is genuinely contested. Some payroll practitioners treat the statutory 25% gratuity as tax-favoured under the Income Tax Act. Others treat it as fully taxable income subject to PAYE. Different employers handle this differently. We don't publish a definitive answer here because sources conflict — confirm the treatment with ZRA or your employer's payroll team before relying on a net figure.</p>

      <h2>If you don't receive your gratuity</h2>
      <p>Gratuity is a statutory entitlement. If your employer hasn't paid it within a reasonable time after the contract ends, you can pursue it through the Ministry of Labour or the Industrial Relations Court.</p>
    </BlogShell>
  );
}