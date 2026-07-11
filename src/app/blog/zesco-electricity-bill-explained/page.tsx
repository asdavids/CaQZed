import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("zesco-electricity-bill-explained")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>If you've noticed that your ZESCO prepaid tokens get smaller as the month goes on — or that buying units in large batches doesn't give you as much as you expected — that's the block tariff system at work. Here's how it works and how to use it to your advantage.</p>

      <h2>What is a block tariff?</h2>
      <p>ZESCO charges different prices per unit (kWh) depending on how many units you've used in the month. The more you use, the more expensive each additional unit becomes. This is a deliberate policy to protect low-income households (who use less electricity) while pricing heavier users more realistically.</p>

      <h2>The 2026 residential bands</h2>
      <ul>
        <li>0 – 100 units: K0.35 per unit</li>
        <li>101 – 200 units: K1.00 per unit</li>
        <li>201 – 400 units: K2.42 per unit</li>
        <li>Above 400 units: K3.45 per unit</li>
      </ul>

      <h2>A worked example</h2>
      <p>If you buy 250 units in a month, your cost is:</p>
      <ul>
        <li>First 100 at K0.35 = K35.00</li>
        <li>Next 100 at K1.00 = K100.00</li>
        <li>Last 50 at K2.42 = K121.00</li>
        <li>Total: K256.00 (an average of K1.02 per unit)</li>
      </ul>

      <h2>Why buying in bulk doesn't save money</h2>
      <p>With a flat-rate system, buying 500 units in one go saves over buying 100 at a time because you always pay the same per unit. With ZESCO's block tariff, buying 500 units is actually more expensive per unit than buying 100 at a time — because you push further into the higher-priced bands each time.</p>

      <h2>How to reduce your ZESCO bill</h2>
      <ul>
        <li>Reduce consumption to stay within the 0–100 or 0–200 unit bands where possible</li>
        <li>LED bulbs use a fraction of the electricity of traditional bulbs</li>
        <li>Water heaters, irons, and microwaves are the biggest consumers — use them less or off-peak</li>
        <li>If you have a geyser, insulating it and setting a timer are the most effective single changes</li>
      </ul>
    </BlogShell>
  );
}