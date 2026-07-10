import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { PoultryProfitCalculator } from "@/components/calculators/poultry-profit-calculator";

export const metadata: Metadata = {
  title: "Poultry Profit Calculator — Broiler Batch Profitability",
  description: "Estimate the profit from a batch of broiler chickens, accounting for mortality.",
  alternates: { canonical: "/calculators/poultry-profit" },
};

export default function PoultryProfitPage() {
  return (
    <CalculatorShell
      title="Poultry Profit Calculator"
      description="Estimate the profitability of a broiler batch, from day-old chicks to sale."
      relatedSlugs={["fertilizer", "break-even", "budget-planner"]}
      formulaExplanation={
        <>
          <p>
            Costs are calculated on the full number of birds you start with
            (since you pay for every chick and its feed), while revenue is
            calculated only on birds that survive to sale, based on your
            expected mortality rate.
          </p>
        </>
      }
      faqs={[
        {
          question: "What mortality rate should I expect?",
          answer:
            "This varies by management practices, disease control and housing quality — 5% is a commonly used planning estimate for a well-managed broiler batch, but talk to an experienced farmer or extension officer for a realistic figure in your situation.",
        },
      ]}
    >
      <PoultryProfitCalculator />
    </CalculatorShell>
  );
}
