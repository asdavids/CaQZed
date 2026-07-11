import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("zambia-vat-guide-businesses")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>VAT in Zambia is a 16% tax on the supply of goods and services. As a business owner, understanding how VAT works matters both for your pricing and for your legal obligations to ZRA.</p>

      <h2>Who has to register for VAT?</h2>
      <p>Any business whose annual taxable turnover exceeds the ZRA registration threshold must register for VAT. Once registered, you must charge VAT on your sales, submit regular VAT returns, and remit the collected tax to ZRA. Businesses below the threshold can choose to register voluntarily — which sometimes makes sense if your customers are mainly other VAT-registered businesses.</p>

      <h2>How VAT-inclusive vs VAT-exclusive pricing works</h2>
      <p>If you quote a price of K100 excluding VAT, the customer pays K116 (K100 + 16%). If you quote K116 including VAT, the VAT portion is K16 (K116 ÷ 1.16 × 0.16).</p>
      <p>Always be explicit in invoices and quotes about whether your prices include VAT — this avoids disputes and keeps you compliant.</p>

      <h2>Input and output VAT</h2>
      <p>When you buy goods or services for your business, you pay VAT (input VAT). When you sell, you charge VAT (output VAT). The VAT you owe ZRA is output VAT minus input VAT. If you paid more VAT on inputs than you collected on outputs, you can claim a refund — though ZRA refunds are known to take time.</p>

      <h2>Zero-rated and exempt supplies</h2>
      <p>Some goods and services are zero-rated (VAT applies at 0% — you still need to be registered, and you can still claim input VAT refunds) or exempt (VAT doesn't apply at all, and you can't claim input VAT on related costs). Common zero-rated items in Zambia include most exports. Common exempt items include financial services and some educational services.</p>

      <h2>What if you're below the threshold?</h2>
      <p>If your turnover is under the VAT registration threshold, you're likely in the turnover tax regime instead — 5% of gross turnover, administered as a simplified alternative to both VAT and corporate income tax. See our Turnover Tax vs Corporate Tax guide for more.</p>
    </BlogShell>
  );
}