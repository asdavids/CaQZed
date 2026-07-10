import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { SchoolFeesCalculator } from "@/components/calculators/school-fees-calculator";

export const metadata: Metadata = {
  title: "School Fees Planner — Save for School Fees",
  description: "Plan how much to save each month to cover school fees for your children.",
  alternates: { canonical: "/calculators/school-fees-planner" },
};

export default function SchoolFeesPage() {
  return (
    <CalculatorShell
      title="School Fees Planner"
      description="Work out how much to save each month to cover the next term's school fees."
      relatedSlugs={["savings-goal", "budget-planner", "date-calculator"]}
      formulaExplanation={
        <p>
          This multiplies your per-child termly fee by your number of
          children, subtracts what you&apos;ve already saved, then spreads
          the remaining amount evenly across the months you have left before
          the fees are due.
        </p>
      }
      faqs={[]}
    >
      <SchoolFeesCalculator />
    </CalculatorShell>
  );
}
