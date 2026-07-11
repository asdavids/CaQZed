import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("poultry-farming-zambia-profit-margins")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Broiler farming is one of the most accessible small businesses in Zambia — relatively low startup capital, a 6-week production cycle, and consistent demand. But the margins are tighter than they look at first glance. Here's an honest numbers breakdown.</p>

      <h2>The basic production economics</h2>
      <p>A typical 500-bird batch takes approximately 6 weeks to reach market weight (1.8 – 2.2 kg live). Key variable costs:</p>
      <ul>
        <li><strong>Day-old chicks:</strong> approximately K14 – K18 each, so K7,000 – K9,000 for 500</li>
        <li><strong>Feed:</strong> roughly 2.5 – 3 kg of feed per kg of live weight gained; at K5 – K7 per kg of feed, feed cost per bird is approximately K25 – K45</li>
        <li><strong>Medications and vaccinations:</strong> K2 – K5 per bird</li>
        <li><strong>Utilities and labour:</strong> varies significantly by scale and setup</li>
      </ul>

      <h2>Mortality</h2>
      <p>Expect 4–8% mortality in a typical batch under good management conditions. Budget for losing 20–40 birds per 500. Higher mortality is a red flag — usually poor ventilation, disease pressure, or feed quality issues.</p>

      <h2>Revenue</h2>
      <p>Live bird prices at farm gate fluctuate, but a reasonable planning price is K28 – K36 per kg live weight. On a 2 kg average bird, that's K56 – K72 per bird. For 480 surviving birds: K26,880 – K34,560 total revenue.</p>

      <h2>The thin margin problem</h2>
      <p>The economics of poultry farming are sensitive to feed prices, chick prices, and market prices — all three of which can move independently. When feed prices spike (as they do when maize is scarce), margins can disappear entirely without a corresponding rise in live bird prices.</p>

      <h2>What makes the difference</h2>
      <ul>
        <li>Feed conversion ratio (FCR) — better biosecurity and management directly reduces feed waste</li>
        <li>Direct-to-consumer sales command higher prices than selling to middlemen</li>
        <li>Scale matters — fixed costs spread over more birds improve margins</li>
        <li>Processing and selling dressed birds adds significant value per bird</li>
      </ul>
    </BlogShell>
  );
}