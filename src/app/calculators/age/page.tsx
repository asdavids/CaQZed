import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { AgeCalculator } from "@/components/calculators/age-calculator";

export const metadata: Metadata = {
  title: "Age Calculator — Exact Age in Years, Months and Days",
  description: "Calculate exact age in years, months and days between any two dates.",
  alternates: { canonical: "/calculators/age" },
};

export default function AgePage() {
  return (
    <CalculatorShell
      slug="age"
      title="Age Calculator"
      description="Find the exact age between two dates, down to the day."
      relatedSlugs={["date-calculator", "percentage"]}
      formulaExplanation={
        <p>
          This calculates the full calendar difference between two dates —
          counting complete years, then complete months, then remaining days —
          rather than just dividing total days by 365.
        </p>
      }
      faqs={[
        {
          question: "Why not just divide days by 365?",
          answer:
            "Because of leap years and varying month lengths, dividing by 365 gives a slightly inaccurate age. Calendar-based counting matches how age is conventionally stated.",
        },
      ]}
    >
      <AgeCalculator />
    </CalculatorShell>
  );
}
