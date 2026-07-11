import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("treasury-bills-zambia-beginners-guide")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Treasury Bills (T-bills) are short-term debt securities issued by the Zambian government through the Bank of Zambia. They're one of the safest investments available in Zambia — you're lending money to the government, which then pays you back more than you lent.</p>

      <h2>How T-bills work</h2>
      <p>T-bills are sold at a discount to their face value. You pay less than the face value today, and receive the full face value when the bill matures. The difference is your return. For example, you might pay K9,500 today for a bill with a K10,000 face value maturing in 91 days — a return of K500.</p>

      <h2>Available tenors</h2>
      <p>The Bank of Zambia auctions T-bills in four tenors: 91 days (3 months), 182 days (6 months), 273 days (9 months), and 364 days (1 year). Longer tenors typically offer higher yields.</p>

      <h2>How yields are set</h2>
      <p>Yields are determined at auction, held roughly every two weeks. The Bank of Zambia publishes results on its website. Yields move with monetary policy, inflation expectations, and government borrowing needs — they're not fixed, and they can change significantly between auctions.</p>

      <h2>Withholding tax</h2>
      <p>Interest earned on T-bills by resident individuals is subject to 15% withholding tax, deducted automatically. The net return on a bill yielding 12% for a Zambian individual investor is therefore 10.2% (12% × 85%). Use the CaQZed Treasury Bills Calculator to see exactly what your net return would be on any bill.</p>

      <h2>How to buy them</h2>
      <p>Retail investors can buy T-bills through any Primary Dealer bank in Zambia (most major banks). You submit a non-competitive bid — you accept the weighted average yield determined at auction. The minimum non-competitive bid is typically K1,000 face value. Ask your bank's investments desk for the process.</p>

      <h2>Is it right for you?</h2>
      <p>T-bills are suitable for conservative, short-to-medium-term savers who want government-backed security and predictable returns. They're not suitable for money you might need immediately, since the funds are locked until maturity (though some banks allow early exit for a fee).</p>
    </BlogShell>
  );
}