import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { FuelCostCalculator } from "@/components/calculators/fuel-cost-calculator";

export const metadata: Metadata = {
  title: "Fuel Cost Calculator Zambia — Trip Cost Estimator",
  description: "Calculate the fuel cost of a trip based on distance, consumption and price per litre.",
  alternates: { canonical: "/calculators/fuel-cost" },
};

export default function FuelCostPage() {
  return (
    <CalculatorShell
      title="Fuel Cost Calculator"
      description="Estimate how much fuel a trip will cost, based on distance, your vehicle's consumption, and today's pump price."
      relatedSlugs={["import-duty", "road-tax", "budget-planner"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Litres needed = (Distance ÷ 100) × Consumption (L/100km)
          </p>
          <p>Total cost = Litres needed × Price per litre</p>
        </>
      }
      faqs={[
        {
          question: "Where do I find my car's fuel consumption?",
          answer:
            "Check your vehicle's manual or manufacturer spec sheet for L/100km. If you only know km per litre, divide 100 by that number to convert it.",
        },
        {
          question: "Why do I have to enter the fuel price myself?",
          answer:
            "Pump prices in Zambia are reviewed monthly by the Energy Regulation Board, so a hardcoded price would quickly go stale — entering today's price keeps this calculator accurate.",
        },
      ]}
    >
      <FuelCostCalculator />
    </CalculatorShell>
  );
}
