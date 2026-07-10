import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { LoanAffordabilityCalculator } from "@/components/calculators/loan-affordability-calculator";

export const metadata: Metadata = {
  title: "Loan Affordability Calculator Zambia — How Much Can You Borrow",
  description:
    "Estimate the maximum loan you can afford based on your income and existing debt.",
  alternates: { canonical: "/calculators/loan-affordability" },
};

export default function LoanAffordabilityPage() {
  return (
    <CalculatorShell
      slug="loan-affordability"
      title="Loan Affordability Calculator"
      description="Estimate how much you can safely borrow, based on your income, existing debt, and a target debt-to-income ratio."
      legalReference="Debt-to-income ratio is a common lending benchmark used by banks worldwide; the default 40% is a widely used guideline, not a fixed Zambian legal limit."
      relatedSlugs={["loan", "mortgage", "debt-payoff"]}
      formulaExplanation={
        <>
          <p>
            This calculator caps your total monthly debt payments at a
            percentage of your income (the debt-to-income ratio), subtracts
            what you&apos;re already paying toward other debts, then works
            out the loan size that fits the remaining affordable payment at
            your given rate and term.
          </p>
        </>
      }
      faqs={[
        {
          question: "What debt-to-income ratio should I use?",
          answer:
            "40% is a common lending guideline, but individual banks in Zambia set their own limits — some are stricter, some more flexible. Check with your specific lender.",
        },
        {
          question: "Does this guarantee loan approval?",
          answer:
            "No — this is an affordability estimate only. Actual approval depends on your lender's full credit assessment, including credit history and other factors.",
        },
      ]}
    >
      <LoanAffordabilityCalculator />
    </CalculatorShell>
  );
}
