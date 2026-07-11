import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("road-tax-zambia-guide")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Road tax (officially called motor vehicle licence fees) is collected by RTSA and is required for any vehicle operating on Zambian roads. Here's everything you need to know.</p>

      <h2>How it's calculated</h2>
      <p>Road tax is based on your vehicle's Gross Vehicle Weight (GVW) — the maximum total weight the vehicle is designed to carry, including passengers, cargo, and the vehicle itself. It is not based on engine size, vehicle age, or how much the car cost.</p>

      <h2>Finding your GVW</h2>
      <p>Check your vehicle's registration document (the blue book) or the sticker on the driver's door jamb. If you can't find it, the manufacturer's specification sheet (available online for most vehicles) will list GVW, GVM, or GVWR — they're the same thing. Don't confuse it with kerb weight (the empty vehicle weight), which is always lower.</p>

      <h2>Example bands for passenger cars</h2>
      <ul>
        <li>Under 800 kg GVW: K440 per year</li>
        <li>801 – 1,000 kg: K513 per year</li>
        <li>1,001 – 1,200 kg: K587 per year</li>
        <li>1,201 – 1,400 kg: K660 per year</li>
        <li>1,401 – 1,600 kg: K733 per year</li>
        <li>1,601 – 2,000 kg: K807 per year</li>
      </ul>
      <p>Most standard passenger cars fall in the 1,000 – 1,600 kg GVW range.</p>

      <h2>Motorcycles</h2>
      <p>Motorcycles have a flat rate: K73.48 per year, regardless of engine size.</p>

      <h2>Payment</h2>
      <p>You can pay road tax annually or quarterly (25% per quarter, with no surcharge for paying quarterly). It's paid at RTSA offices. Failure to display a valid licence disc is an offence.</p>

      <h2>Using the Road Tax Calculator</h2>
      <p>The CaQZed Road Tax Calculator covers all weight bands from under 800 kg to over 20,000 kg. Enter your GVW and it calculates your annual and quarterly amounts instantly.</p>
    </BlogShell>
  );
}