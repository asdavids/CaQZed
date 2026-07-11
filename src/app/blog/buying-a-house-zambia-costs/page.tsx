import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("buying-a-house-zambia-costs")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>The agreed purchase price is only the starting point when buying a property in Zambia. There are several additional costs that buyers often underestimate or discover too late. Here's the full picture.</p>

      <h2>Property transfer duty</h2>
      <p>Property transfer duty is paid to ZRA on the sale of property. The rate is currently 5% of the value of the property (or the consideration paid, whichever is higher). This is the buyer's responsibility. On a K900,000 property, that's K45,000 in duty alone.</p>

      <h2>Legal fees</h2>
      <p>You'll need a lawyer (conveyancer) to handle the property transfer. Legal fees are typically calculated as a percentage of the transaction value and can range from 1–2.5% depending on the firm and complexity of the transaction.</p>

      <h2>Mortgage costs</h2>
      <p>If you're buying with a home loan, factor in the bank's processing fees, valuation fee (the bank will commission a formal property valuation), and mortgage insurance premiums. The valuation alone can cost K2,000–K5,000 depending on the property.</p>

      <h2>Survey and title fees</h2>
      <p>Before finalising a purchase, it's strongly advisable to commission a physical survey to confirm boundaries and identify any encumbrances. This adds to upfront costs but protects you significantly.</p>

      <h2>Running costs to plan for</h2>
      <p>Once you own the property, ongoing costs include property rates (local authority levies), insurance, and any maintenance reserve. These are often overlooked in affordability calculations.</p>

      <h2>A realistic budget for a K900,000 property purchase</h2>
      <ul>
        <li>Purchase price: K900,000</li>
        <li>Transfer duty (5%): K45,000</li>
        <li>Legal fees (~1.5%): K13,500</li>
        <li>Bank fees + valuation: K5,000 – K8,000</li>
        <li>Survey: K2,000 – K4,000</li>
        <li>Total cost: approximately K965,000 – K970,000</li>
      </ul>
      <p>Building in a 10% buffer above the purchase price for transaction costs is a reasonable rule of thumb for first-time buyers.</p>
    </BlogShell>
  );
}