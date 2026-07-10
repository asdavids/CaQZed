import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { FertilizerCalculator } from "@/components/calculators/fertilizer-calculator";

export const metadata: Metadata = {
  title: "Fertilizer Calculator — Quantity by Field Size",
  description: "Calculate how much fertilizer you need based on field size and application rate.",
  alternates: { canonical: "/calculators/fertilizer" },
};

export default function FertilizerPage() {
  return (
    <CalculatorShell
      title="Fertilizer Calculator"
      description="Calculate the total quantity of fertilizer needed for your field."
      relatedSlugs={["poultry-profit", "budget-planner", "unit-converter"]}
      formulaExplanation={
        <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
          Total fertilizer (kg) = Field size (ha) × Application rate (kg/ha)
        </p>
      }
      faqs={[
        {
          question: "What application rate should I use?",
          answer:
            "This depends heavily on your crop, soil fertility, and the specific fertilizer type (e.g. Compound D, Urea, D-Compound). Your agricultural extension officer or a soil test can give you the right rate for your field.",
        },
      ]}
    >
      <FertilizerCalculator />
    </CalculatorShell>
  );
}
