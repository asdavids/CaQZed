import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { BonusTaxCalculator } from "@/components/calculators/bonus-tax-calculator";

export const metadata: Metadata = {
  title: "Bonus Tax Calculator Zambia 2026 — Tax Impact of a Bonus",
  description: "See how much tax a bonus adds to your PAYE, and what you'll actually take home.",
  alternates: { canonical: "/calculators/bonus-tax" },
};

export default function BonusTaxPage() {
  return (
    <CalculatorShell
      slug="bonus-tax"
      title="Bonus Tax Calculator"
      description="See how much of your bonus goes to PAYE, and what you'll actually receive."
      legalReference="Uses the 2026 ZRA PAYE bands, applied to salary plus bonus combined."
      relatedSlugs={["paye", "gross-to-net", "leave-pay"]}
      formulaExplanation={
        <>
          <p>
            There's no separate &quot;bonus tax&quot; in Zambia — a bonus is
            simply added to your normal salary for the month it's paid, and
            taxed together through the same progressive PAYE bands. This can
            push part of your income into a higher band for that month.
          </p>
        </>
      }
      faqs={[
        {
          question: "Will my bonus be taxed at a flat higher rate?",
          answer:
            "No — only the portion of your combined salary-plus-bonus that falls into a higher band is taxed at that rate. The rest is still taxed at your normal rates.",
        },
        {
          question: "Does NAPSA or NHIMA apply to bonuses too?",
          answer:
            "This depends on how your payroll treats bonuses — check with your employer, as treatment can vary.",
        },
      ]}
    >
      <BonusTaxCalculator />
    </CalculatorShell>
  );
}
