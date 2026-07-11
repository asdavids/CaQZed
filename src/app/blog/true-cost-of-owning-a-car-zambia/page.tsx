import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("true-cost-of-owning-a-car-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Most people calculate the cost of a car as the purchase price plus fuel. The real monthly cost is considerably higher. Here's a complete breakdown so you can budget accurately before buying.</p>

      <h2>Fuel</h2>
      <p>For a vehicle consuming 8L per 100km, driving 1,000 km per month, and at a pump price of K32 per litre: (1000 ÷ 100) × 8 × K32 = K2,560 per month. This is usually the largest recurring cost and the one most sensitive to external price movements.</p>

      <h2>Road tax</h2>
      <p>A typical 1,400 kg GVW passenger car pays K660 per year in road tax — K55 per month when spread out. It's small, but it's an unavoidable annual commitment.</p>

      <h2>Insurance</h2>
      <p>At minimum, you need third-party insurance (required by law). Comprehensive cover is significantly more expensive. Budget K800 – K2,000+ per month depending on the vehicle value and cover level.</p>

      <h2>Maintenance</h2>
      <p>This is the cost most people underestimate. An older imported vehicle needs an oil change every 5,000 – 10,000 km, filter replacements, tyre rotations, and periodic larger repairs. A reasonable maintenance reserve for a typical used import is K500 – K1,500 per month. Putting aside a regular amount every month is much better than facing a K15,000 gearbox repair with no reserves.</p>

      <h2>Loan repayment (if financed)</h2>
      <p>If you borrowed to buy the car, add the monthly instalment. On a K120,000 loan at 25% over 48 months, that's approximately K3,840 per month.</p>

      <h2>A realistic monthly total</h2>
      <ul>
        <li>Fuel: K2,560</li>
        <li>Road tax (monthly share): K55</li>
        <li>Insurance: K1,000</li>
        <li>Maintenance reserve: K700</li>
        <li>Loan instalment (if applicable): K3,840</li>
        <li>Total: K8,155 per month (without loan: K4,315)</li>
      </ul>
      <p>Use the Running Costs Calculator on CaQZed to model your specific vehicle and driving pattern.</p>
    </BlogShell>
  );
}