import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { OvertimeCalculator } from "@/components/calculators/overtime-calculator";

export const metadata: Metadata = {
  title: "Overtime Calculator Zambia — Employment Code Act Rates",
  description: "Calculate overtime pay using the Employment Code Act's 1.5x and 2x statutory rates.",
  alternates: { canonical: "/calculators/overtime" },
};

export default function OvertimePage() {
  return (
    <CalculatorShell
      title="Overtime Calculator"
      description="Calculate your overtime pay based on the statutory rates in the Employment Code Act."
      legalReference="Employment Code Act No. 3 of 2019, Section 75(3)."
      relatedSlugs={["hourly-wage", "leave-pay", "employer-cost"]}
      formulaExplanation={
        <>
          <p>
            Your hourly rate is your monthly salary divided by 208 hours.
            Overtime beyond the normal 48-hour week is paid at 1.5× that
            rate. Work on a rest day or public holiday is paid at 2× your
            hourly rate.
          </p>
        </>
      }
      faqs={[
        {
          question: "Is everyone entitled to overtime pay?",
          answer:
            "Most employees are, but senior management and some expatriate staff on specific contract terms may be exempted under Employment Code Exemption Regulations — check your contract.",
        },
        {
          question: "What if my normal work week is less than 48 hours?",
          answer:
            "If your contract sets a shorter standard week, hours worked up to 48 hours can still be scheduled without overtime pay — only hours genuinely beyond the 48-hour threshold (or your contracted threshold, if more favourable) qualify.",
        },
      ]}
    >
      <OvertimeCalculator />
    </CalculatorShell>
  );
}
