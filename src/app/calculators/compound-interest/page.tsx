import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { CompoundInterestCalculator } from "@/components/calculators/compound-interest-calculator";

export const metadata: Metadata = {
  title: "Compound Interest Calculator — Grow Your Savings",
  description: "See how your savings or investment grows over time with compound interest.",
  alternates: { canonical: "/calculators/compound-interest" },
};

export default function CompoundInterestPage() {
  return (
    <CalculatorShell
      slug="compound-interest"
      title="Compound Interest Calculator"
      description="See how your money grows when interest is earned on interest, not just your original amount."
      legalReference="Standard compound interest formula, used across savings and investment products."
      relatedSlugs={["fixed-deposit", "savings-goal", "roi"]}
      formulaExplanation={
        <>
          <p>Compound interest is calculated as:</p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            A = P × (1 + r/n)^(n×t)
          </p>
          <p>
            Where P is your starting amount, r is the annual interest rate, n
            is how many times per year interest is compounded, and t is the
            number of years.
          </p>
        </>
      }
      faqs={[
        {
          question: "Why does compounding frequency matter?",
          answer:
            "The more often interest is compounded, the sooner it starts earning interest on itself — monthly compounding grows slightly faster than annual compounding at the same stated rate.",
        },
      ]}
    >
      <CompoundInterestCalculator />
    </CalculatorShell>
  );
}
