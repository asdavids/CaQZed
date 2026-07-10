import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { PensionProjectionCalculator } from "@/components/calculators/pension-projection-calculator";

export const metadata: Metadata = {
  title: "Pension Contribution Projection Calculator Zambia",
  description: "Project your total NAPSA pension contributions over your working years.",
  alternates: { canonical: "/calculators/pension" },
};

export default function PensionPage() {
  return (
    <CalculatorShell
      slug="pension"
      title="Pension Contribution Projection"
      description="Project how much will be paid into your NAPSA pension over your remaining working years."
      legalReference="Based on NAPSA's 10% combined contribution rate (5% employee + 5% employer)."
      relatedSlugs={["napsa", "savings-goal", "compound-interest"]}
      formulaExplanation={
        <>
          <p>
            This adds up your combined NAPSA contributions (yours plus your
            employer&apos;s) year by year, assuming your salary grows at a
            steady annual rate.
          </p>
          <p>
            This shows total money paid in — it is deliberately not an
            estimate of your eventual pension payout, since NAPSA calculates
            benefits using its own formula based on your full contribution
            history, which isn&apos;t public enough to replicate accurately
            here.
          </p>
        </>
      }
      faqs={[
        {
          question: "So how do I find out my actual pension amount?",
          answer:
            "Contact NAPSA directly, or check your NAPSA statement — they can give you a benefit projection based on your real contribution history.",
        },
        {
          question: "Why does the calculator stop projecting salary growth at the NAPSA cap?",
          answer:
            "It doesn't — but note that NAPSA contributions themselves are capped at K1,861.80 per side per month regardless of how high your salary grows, so very high earners won't see contributions rise past that ceiling even as salary increases.",
        },
      ]}
    >
      <PensionProjectionCalculator />
    </CalculatorShell>
  );
}
