import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { PercentageCalculator } from "@/components/calculators/percentage-calculator";

export const metadata: Metadata = {
  title: "Percentage Calculator — Quick Percentage Maths",
  description: "Calculate percentages, increases and decreases instantly.",
  alternates: { canonical: "/calculators/percentage" },
};

export default function PercentagePage() {
  return (
    <CalculatorShell
      title="Percentage Calculator"
      description="Work out any percentage calculation instantly."
      relatedSlugs={["vat", "profit-margin", "age"]}
      formulaExplanation={
        <p>
          &quot;X% of Y&quot; is calculated as (X ÷ 100) × Y. &quot;X is what
          % of Y&quot; is calculated as (X ÷ Y) × 100.
        </p>
      }
      faqs={[]}
    >
      <PercentageCalculator />
    </CalculatorShell>
  );
}
