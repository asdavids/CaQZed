import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { RentalYieldCalculator } from "@/components/calculators/rental-yield-calculator";

export const metadata: Metadata = {
  title: "Rental Yield Calculator Zambia — Gross and Net Yield",
  description: "Calculate gross and net rental yield on a property investment in Zambia.",
  alternates: { canonical: "/calculators/rental-yield" },
};

export default function RentalYieldPage() {
  return (
    <CalculatorShell
      title="Rental Yield Calculator"
      description="Calculate the gross and net annual rental yield on a property."
      relatedSlugs={["mortgage", "roi", "loan-affordability"]}
      formulaExplanation={
        <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gross yield = (Monthly rent × 12) ÷ Property value</li>
            <li>Net yield = (Annual rent − Annual expenses) ÷ Property value</li>
          </ul>
          <p>
            Net yield gives a more realistic picture since it accounts for
            costs like maintenance, agent fees, and insurance.
          </p>
        </>
      }
      faqs={[]}
    >
      <RentalYieldCalculator />
    </CalculatorShell>
  );
}
