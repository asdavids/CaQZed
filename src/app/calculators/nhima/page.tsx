import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { NhimaCalculator } from "@/components/calculators/nhima-calculator";

export const metadata: Metadata = {
  title: "NHIMA Calculator Zambia 2026 — Health Insurance Contribution",
  description:
    "Calculate your NHIMA health insurance contribution in Zambia — 1% employee, 1% employer, no cap.",
  alternates: { canonical: "/calculators/nhima" },
};

export default function NhimaPage() {
  return (
    <CalculatorShell
      title="NHIMA Calculator"
      description="Work out your National Health Insurance Management Authority contribution."
      legalReference="National Health Insurance Act — administered by NHIMA."
      relatedSlugs={["paye", "napsa", "gross-to-net"]}
      formulaExplanation={
        <>
          <p>
            NHIMA funds Zambia&apos;s national health insurance scheme. You
            contribute 1% of your basic salary, matched by another 1% from
            your employer — a combined 2%, with no upper cap.
          </p>
        </>
      }
      faqs={[
        {
          question: "Is NHIMA calculated on gross or basic salary?",
          answer:
            "NHIMA is calculated on basic salary, not total gross pay including allowances. Confirm the exact definition used by your employer's payroll system.",
        },
        {
          question: "Does NHIMA reduce my taxable income?",
          answer:
            "No. Unlike NAPSA, NHIMA does not reduce your income for PAYE purposes.",
        },
      ]}
    >
      <NhimaCalculator />
    </CalculatorShell>
  );
}
