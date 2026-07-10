import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { NetToGrossCalculator } from "@/components/calculators/net-to-gross-calculator";

export const metadata: Metadata = {
  title: "Net to Gross Salary Calculator Zambia 2026",
  description:
    "Find the gross salary you need to earn to take home a specific net salary, after PAYE, NAPSA and NHIMA.",
  alternates: { canonical: "/calculators/net-to-gross" },
};

export default function NetToGrossPage() {
  return (
    <CalculatorShell
      slug="net-to-gross"
      title="Net to Gross Salary Calculator"
      description="Enter the take-home pay you want, and find the gross salary you'd need to negotiate for."
      legalReference="Uses the 2026 ZRA PAYE bands, NAPSA and NHIMA rates in reverse."
      relatedSlugs={["gross-to-net", "paye", "napsa"]}
      formulaExplanation={
        <>
          <p>
            Because PAYE is progressive, there&apos;s no simple formula to go
            directly from net pay to gross pay. This calculator works
            backwards: it tries a gross salary, calculates what the net pay
            would be, and narrows in until it finds the gross salary that
            produces your target net pay.
          </p>
        </>
      }
      faqs={[
        {
          question: "Why not just use a simple formula?",
          answer:
            "PAYE tax bands mean the tax rate changes at different income levels, so the relationship between gross and net isn't a straight line — it has to be solved rather than calculated directly.",
        },
      ]}
    >
      <NetToGrossCalculator />
    </CalculatorShell>
  );
}
