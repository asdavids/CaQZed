import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("how-paye-works-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>PAYE — Pay As You Earn — is the income tax your employer deducts from your salary before you receive it. It goes directly to the Zambia Revenue Authority (ZRA) every month, which is why you never have to file a personal tax return if your only income is a salary.</p>

      <h2>The 2026 PAYE bands</h2>
      <p>Zambia uses a progressive tax system, meaning different portions of your income are taxed at different rates. For 2026, the monthly bands are:</p>
      <ul>
        <li>K0 – K5,100: taxed at 0%</li>
        <li>K5,101 – K7,100: taxed at 20%</li>
        <li>K7,101 – K9,200: taxed at 30%</li>
        <li>Above K9,200: taxed at 37%</li>
      </ul>

      <h2>How the progressive system works</h2>
      <p>The most important thing to understand is that progressive taxation does NOT mean your whole salary is taxed at one rate. Only the income in each band is taxed at that band's rate.</p>
      <p>Example: if you earn K12,000 per month, your PAYE is calculated like this:</p>
      <ul>
        <li>First K5,100 at 0% = K0</li>
        <li>Next K2,000 (K5,101 to K7,100) at 20% = K400</li>
        <li>Next K2,100 (K7,101 to K9,200) at 30% = K630</li>
        <li>Remaining K2,800 (above K9,200) at 37% = K1,036</li>
        <li>Total PAYE = K2,066</li>
      </ul>

      <h2>What PAYE is calculated on</h2>
      <p>PAYE is calculated on your total gross emoluments — which means basic salary plus most cash allowances. Some allowances (such as genuine reimbursements for business expenses) may be excluded, but housing allowances, transport allowances, and similar regular payments are typically included. Your employer's payroll system handles this.</p>

      <h2>Can PAYE ever reduce as your income increases?</h2>
      <p>No. Because you're only ever taxed at a higher rate on the income that falls into a higher band — not your entire income — earning more always means more net income, even if a portion is taxed more heavily.</p>

      <h2>Checking your deductions</h2>
      <p>Use the PAYE Calculator on CaQZed to work out exactly what should be deducted for any salary level, using the current 2026 bands. If what's appearing on your payslip is significantly different and you can't explain why, it's worth asking your payroll department to walk you through the calculation.</p>
    </BlogShell>
  );
}