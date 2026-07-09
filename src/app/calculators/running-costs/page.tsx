import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { RunningCostsCalculator } from "@/components/calculators/running-costs-calculator";

export const metadata: Metadata = {
  title: "Vehicle Running Costs Calculator Zambia — Monthly Cost of Ownership",
  description:
    "Estimate your total monthly running costs: fuel, road tax, insurance and maintenance.",
  alternates: { canonical: "/calculators/running-costs" },
};

export default function RunningCostsPage() {
  return (
    <CalculatorShell
      title="Vehicle Running Costs Calculator"
      description="Add up fuel, road tax, insurance and maintenance to see your true monthly cost of running a vehicle."
      legalReference="Combines your fuel usage with the RTSA road tax schedule and your own insurance/maintenance estimates."
      relatedSlugs={["fuel-cost", "road-tax", "import-duty"]}
      formulaExplanation={
        <>
          <p>
            This adds together the costs that recur every month: fuel (based
            on your distance and consumption), your road tax spread evenly
            across 12 months, plus your own estimates for insurance and
            maintenance.
          </p>
        </>
      }
      faqs={[
        {
          question: "Why do I need to enter my own insurance and maintenance figures?",
          answer:
            "These vary enormously by vehicle age, make, model and cover level — there's no single official rate to use, so getting your own quote or recent spending history will give a far more accurate result than any default we could set.",
        },
        {
          question: "Does this include the loan repayment if I financed the car?",
          answer:
            "No — this covers running costs only. Use the Loan Repayment Calculator separately and add that figure to get your full monthly cost of ownership.",
        },
      ]}
    >
      <RunningCostsCalculator />
    </CalculatorShell>
  );
}
