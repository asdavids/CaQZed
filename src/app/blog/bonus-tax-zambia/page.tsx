import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("bonus-tax-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>A common misconception in Zambia is that bonuses are taxed at a special flat rate — sometimes people say "30%" or "37%". Neither is quite right. Bonuses are taxed by being added to your normal salary for the month they're paid and then running the whole combined amount through PAYE bands.</p>

      <h2>How bonus taxation actually works</h2>
      <p>Your employer calculates your PAYE for the month as if your bonus were part of your normal salary. So if your salary is K10,000 and you receive a K5,000 bonus, your PAYE for that month is calculated on K15,000 combined.</p>

      <h2>What this means in practice</h2>
      <p>At K10,000 salary, your monthly PAYE is approximately K1,807. Add a K5,000 bonus, and PAYE for that month becomes approximately K3,657 — an extra K1,850 in tax from the K5,000 bonus. Your effective tax rate on the bonus itself is 37% (because the bonus is all in the top band), but you haven't been taxed at 37% on your whole salary.</p>

      <h2>The higher-band effect</h2>
      <p>The reason bonuses feel more heavily taxed is that if you already earn enough to be in the 30% or 37% band, your entire bonus lands there — whereas your regular salary has chunks that pass through the 0%, 20%, and 30% bands first.</p>

      <h2>Can you reduce the tax on a bonus?</h2>
      <p>In most standard employment situations, no — the tax is assessed in the month of receipt. Some employer compensation structures spread bonuses across multiple months to avoid the top-band concentration, but this is a payroll design choice, not something most employees can influence.</p>

      <h2>Checking your numbers</h2>
      <p>The Bonus Tax Calculator on CaQZed lets you see exactly how much of any bonus goes to PAYE, so you know what you'll actually take home before you start spending it.</p>
    </BlogShell>
  );
}