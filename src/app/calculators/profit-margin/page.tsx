import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { ProfitMarginCalculator } from "@/components/calculators/profit-margin-calculator";

export const metadata: Metadata = {
  title: "Profit Margin Calculator — Margin and Markup",
  description: "Calculate profit margin and markup from cost price and selling price.",
  alternates: { canonical: "/calculators/profit-margin" },
};

export default function ProfitMarginPage() {
  return (
    <CalculatorShell
      slug="profit-margin"
      title="Profit Margin Calculator"
      description="Calculate your profit margin and markup from cost price and selling price."
      relatedSlugs={["break-even", "vat", "turnover-tax"]}
      formulaExplanation={
        <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Margin = Profit ÷ Selling price</li>
            <li>Markup = Profit ÷ Cost price</li>
          </ul>
          <p>
            These are often confused: a 50% markup on a K70 cost gives a
            selling price of K105, which is only a 33% margin — they answer
            different questions.
          </p>
        </>
      }
      faqs={[]}
    >
      <ProfitMarginCalculator />
    </CalculatorShell>
  );
}
