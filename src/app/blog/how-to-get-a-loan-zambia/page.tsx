import type { Metadata } from "next";
import { BlogShell } from "@/components/blog-shell";
import { getBlogPost } from "@/lib/blog/registry";

const post = getBlogPost("how-to-get-a-loan-zambia")!;
export const metadata: Metadata = { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };

export default function Post() {
  return (
    <BlogShell post={post}>
      <p>Taking out a loan is one of the most significant financial decisions most people make. Before you sign anything in Zambia, here's what to understand about how loans work and what to look for in the fine print.</p>

      <h2>Reducing balance vs flat rate interest</h2>
      <p>Most reputable Zambian banks use the reducing balance (or "diminishing balance") method — the interest you pay each month is calculated on the outstanding balance, which shrinks as you repay. This means you pay less interest over time as the principal reduces.</p>
      <p>Some informal lenders and hire-purchase agreements use flat rate interest — where interest is calculated on the original loan amount throughout the entire term, even as you pay it off. A 20% flat rate loan is significantly more expensive than a 20% reducing balance loan. Always ask which method applies.</p>

      <h2>The true cost of a loan</h2>
      <p>Interest rate alone doesn't tell you the full cost. Banks often charge additional fees: processing/origination fees (commonly 1–3% of the loan amount), insurance premiums, and sometimes early repayment penalties. The Annual Percentage Rate (APR) or total cost of credit figure — if the lender will give it to you — is more useful than the headline interest rate.</p>

      <h2>How monthly instalments are calculated</h2>
      <p>For a reducing balance loan, the monthly instalment (EMI) is calculated using a standard formula. For a K50,000 loan at 25% per year over 24 months, your monthly instalment is approximately K2,812. Use the CaQZed Loan Calculator to check exact figures for any loan before you commit.</p>

      <h2>How much can you afford to borrow?</h2>
      <p>A common rule of thumb is that your total monthly debt repayments (including the new loan) shouldn't exceed 40% of your net income. Lenders in Zambia typically assess your ability to repay based on your payslip. Use the Loan Affordability Calculator to see what that means for your specific situation.</p>

      <h2>Questions to ask before signing</h2>
      <ul>
        <li>Is this reducing balance or flat rate?</li>
        <li>What is the total amount repayable over the full term?</li>
        <li>Are there processing, insurance, or other upfront fees?</li>
        <li>What happens if I miss a payment?</li>
        <li>Can I repay early, and if so, is there a penalty?</li>
      </ul>
    </BlogShell>
  );
}