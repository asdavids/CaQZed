import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("nhima-health-insurance-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>NHIMA — the National Health Insurance Management Authority — administers Zambia's mandatory national health insurance scheme. If you're formally employed, 1% of your salary is automatically deducted for it every month.</p>

      <h2>How contributions work</h2>
      <p>Both you and your employer each contribute 1% of your basic salary — a combined 2% going to NHIMA monthly. Unlike NAPSA, there is no upper cap on NHIMA contributions, so higher earners pay proportionally more.</p>

      <h2>Who's covered?</h2>
      <p>Your NHIMA membership covers you and your registered dependants — typically your spouse and children. When you're enrolled through your employer, you should receive a NHIMA membership card. You'll need this at accredited healthcare facilities to access your benefits.</p>

      <h2>What NHIMA covers</h2>
      <p>NHIMA provides a defined benefit package at accredited healthcare facilities — outpatient consultations, diagnostic tests, inpatient care, maternity services, and prescribed medications are covered up to defined limits. The scheme is still expanding its network of accredited providers across the country.</p>

      <h2>Using your NHIMA benefits</h2>
      <p>Present your NHIMA card at an accredited facility. The facility bills NHIMA directly for covered services. You may be responsible for services outside the benefit package or above NHIMA's rates.</p>

      <h2>Limitations to be aware of</h2>
      <p>NHIMA does not replace private medical insurance, particularly for high-cost procedures or specialist care. Many employers who previously offered comprehensive group medical schemes are reviewing their arrangements in light of NHIMA, so check what your employer's policy is and whether you need additional cover.</p>

      <h2>Checking your contributions</h2>
      <p>NHIMA has a member portal where you can verify your contribution history and registration status. Contact NHIMA directly if your contributions aren't reflecting correctly.</p>
    </BlogShell>
  );
}