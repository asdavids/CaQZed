import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("importing-a-car-zambia-complete-guide")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Importing a used vehicle is one of the biggest purchases most Zambians make. Get the budget right and it's excellent value. Underestimate the costs and you can find yourself short at the clearing stage. Here's every cost you'll face, in the order you'll face them.</p>

      <h2>The purchase price (CIF)</h2>
      <p>Most vehicles come from Japan, the UK, or South Africa. The price you agree to pay is typically quoted in USD or JPY and covers the cost of the vehicle, insurance, and freight to Zambia (CIF — Cost, Insurance, Freight). The Kwacha equivalent changes with the exchange rate, so check the rate on the day your money transfers.</p>

      <h2>ZRA Import Duty</h2>
      <p>This is the big one. ZRA uses a "specific duty" schedule for used passenger cars — a fixed Kwacha amount set by engine size, body type, and age, rather than a percentage of the vehicle's value. A typical 1500cc sedan over 5 years old attracts around K30,000–K34,000 in duty plus a carbon emission surtax based on engine size. SUVs and double cab pickups are taxed higher at every engine band.</p>
      <p>Hybrid and electric vehicles use a different, ad valorem method (25% customs + 30% excise + 16% VAT, each cascading on the previous) — and these can be significantly more expensive to clear.</p>

      <h2>Additional costs to budget for</h2>
      <ul>
        <li><strong>JEVIC inspection:</strong> approximately K3,100 — a roadworthiness inspection, usually done before the vehicle leaves Japan</li>
        <li><strong>Clearing agent fees:</strong> K2,500 – K4,000 typically, depending on the agent and complexity</li>
        <li><strong>Port handling charges:</strong> K6,000 – K9,000 at Dar es Salaam or Durban</li>
        <li><strong>Transport to Lusaka:</strong> K3,000 – K5,000</li>
        <li><strong>RTSA fitness certificate:</strong> approximately K64</li>
        <li><strong>RTSA registration:</strong> approximately K750</li>
        <li><strong>Road tax (first year):</strong> K440 – K920 depending on vehicle weight</li>
        <li><strong>Third-party insurance:</strong> from K1,200</li>
      </ul>

      <h2>A worked example</h2>
      <p>A 1500cc Toyota Wish (station wagon, over 5 years old) bought for $5,000 USD at an exchange rate of K27:</p>
      <ul>
        <li>CIF value: K135,000</li>
        <li>Specific duty + carbon surtax: approximately K31,000</li>
        <li>JEVIC + clearing + port + transport: approximately K20,000</li>
        <li>RTSA + road tax + insurance: approximately K2,000</li>
        <li>Total landed cost: approximately K188,000</li>
      </ul>

      <h2>Tips for keeping costs down</h2>
      <ul>
        <li>Get at least two clearing agent quotes before choosing one</li>
        <li>Verify the exchange rate on the day you pay, not when you agreed the deal</li>
        <li>Use the CaQZed Import Duty Calculator to check the specific duty for your exact vehicle before committing</li>
        <li>Vehicles over 5 years attract lower specific duty than 2-5 year old vehicles — for many buyers, older is cheaper on duty</li>
      </ul>
    </BlogShell>
  );
}