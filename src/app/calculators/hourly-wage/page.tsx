import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { HourlyWageCalculator } from "@/components/calculators/hourly-wage-calculator";

export const metadata: Metadata = {
  title: "Hourly Wage Calculator — Convert Hourly to Monthly Pay",
  description: "Convert between hourly, daily, weekly, monthly and annual pay.",
  alternates: { canonical: "/calculators/hourly-wage" },
};

export default function HourlyWagePage() {
  return (
    <CalculatorShell
      title="Hourly Wage Calculator"
      description="Convert an hourly rate into daily, weekly, monthly and annual pay, or work the other way."
      relatedSlugs={["gross-to-net", "paye", "overtime"]}
      formulaExplanation={
        <p>
          Daily pay is your hourly rate × hours per day. Weekly pay is daily
          pay × working days per week. Monthly pay multiplies weekly pay by
          52 weeks ÷ 12 months, which averages out months with different
          numbers of paydays.
        </p>
      }
      faqs={[]}
    >
      <HourlyWageCalculator />
    </CalculatorShell>
  );
}
