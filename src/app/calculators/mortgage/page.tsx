import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { MortgageCalculator } from "@/components/calculators/mortgage-calculator";

export const metadata: Metadata = {
  title: "Mortgage Calculator Zambia — Monthly Home Loan Repayments",
  description:
    "Calculate your monthly mortgage repayment, total interest, and down payment for a home loan in Zambia.",
  alternates: { canonical: "/calculators/mortgage" },
};

export default function MortgagePage() {
  return (
    <CalculatorShell
      title="Mortgage Calculator"
      description="Work out your monthly home loan repayment based on property price, down payment, interest rate and term."
      legalReference="Standard reducing-balance amortisation formula, used by Zambian banks for mortgage lending."
      relatedSlugs={["loan", "rental-yield", "loan-affordability"]}
      formulaExplanation={
        <>
          <p>
            Your down payment reduces the amount you actually borrow. The
            remaining loan amount is repaid monthly using the standard
            reducing-balance formula, the same method used for the Loan
            Repayment Calculator.
          </p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Loan amount = Price − Down payment
          </p>
        </>
      }
      faqs={[
        {
          question: "What down payment do Zambian banks usually require?",
          answer:
            "This varies by bank and property type, often 10–30%. Check with your specific lender for their current requirement.",
        },
        {
          question: "Does this include legal fees, valuation or insurance?",
          answer:
            "No — this covers principal and interest only. Mortgages in Zambia typically also involve legal fees, property valuation, and mortgage insurance, which add to your upfront and ongoing costs.",
        },
      ]}
    >
      <MortgageCalculator />
    </CalculatorShell>
  );
}
