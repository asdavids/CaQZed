import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { RoiCalculator } from "@/components/calculators/roi-calculator";

export const metadata: Metadata = {
  title: "ROI Calculator — Return on Investment",
  description: "Calculate return on investment in kwacha and percent, plus annualized return.",
  alternates: { canonical: "/calculators/roi" },
};

export default function RoiPage() {
  return (
    <CalculatorShell
      slug="roi"
      title="ROI Calculator"
      description="Calculate the return on any investment, in both kwacha and percentage terms."
      relatedSlugs={["compound-interest", "treasury-bills", "inflation"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            ROI = (Final value − Initial investment) ÷ Initial investment
          </p>
          <p>
            Annualized return spreads that total return evenly across your
            holding period, so you can compare investments held for different
            lengths of time.
          </p>
        </>
      }
      faqs={[]}
    >
      <RoiCalculator />
    </CalculatorShell>
  );
}
