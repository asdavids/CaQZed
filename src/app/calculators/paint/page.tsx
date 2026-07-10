import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { PaintCalculator } from "@/components/calculators/paint-calculator";

export const metadata: Metadata = {
  title: "Paint Calculator — Litres Needed by Wall Area",
  description: "Calculate how many litres of paint you need based on wall area and coverage.",
  alternates: { canonical: "/calculators/paint" },
};

export default function PaintPage() {
  return (
    <CalculatorShell
      title="Paint Calculator"
      description="Calculate how much paint you need based on wall area, number of coats, and coverage rate."
      relatedSlugs={["cement", "budget-planner", "unit-converter"]}
      formulaExplanation={
        <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
          Litres needed = (Area × Coats) ÷ Coverage per litre
        </p>
      }
      faqs={[
        {
          question: "Where do I find the coverage rate for my paint?",
          answer:
            "It's printed on the paint tin, usually as m² per litre. Adjust the default in the calculator to match your specific paint for a more accurate result.",
        },
      ]}
    >
      <PaintCalculator />
    </CalculatorShell>
  );
}
