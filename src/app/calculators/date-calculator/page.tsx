import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { DateCalculator } from "@/components/calculators/date-calculator";

export const metadata: Metadata = {
  title: "Date Calculator — Days Between Two Dates",
  description: "Calculate the number of days, weeks between any two dates.",
  alternates: { canonical: "/calculators/date-calculator" },
};

export default function DateCalculatorPage() {
  return (
    <CalculatorShell
      title="Date Calculator"
      description="Find the number of days between any two dates."
      relatedSlugs={["age", "school-fees-planner", "percentage"]}
      formulaExplanation={<p>Counts the exact number of calendar days between your two chosen dates.</p>}
      faqs={[]}
    >
      <DateCalculator />
    </CalculatorShell>
  );
}
