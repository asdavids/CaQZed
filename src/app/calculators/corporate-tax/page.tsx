import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { CorporateTaxCalculator } from "@/components/calculators/corporate-tax-calculator";

export const metadata: Metadata = {
  title: "Corporate Tax Calculator Zambia 2026 — Company Income Tax",
  description: "Calculate corporate income tax in Zambia by sector: standard, farming/agro-processing, or telecommunications.",
  alternates: { canonical: "/calculators/corporate-tax" },
};

export default function CorporateTaxPage() {
  return (
    <CalculatorShell
      slug="corporate-tax"
      title="Corporate Tax Calculator"
      description="Calculate company income tax based on your business sector's rate."
      legalReference="Income Tax Act, Chapter 323 — standard rate 30%, with reduced rates for specific sectors."
      relatedSlugs={["turnover-tax", "vat", "profit-margin"]}
      formulaExplanation={
        <>
          <p>
            Zambia's standard corporate income tax rate is 30%, but a few
            sectors get different rates: farming and agro-processing pay a
            reduced 10%, while telecommunications companies pay a higher 35%.
          </p>
        </>
      }
      faqs={[
        {
          question: "What if my business doesn't fit these three categories?",
          answer:
            "Mining companies, PPP projects, and a few other special cases have their own separate tax treatment not covered here — check with ZRA or a tax advisor for those.",
        },
        {
          question: "Is this the same as turnover tax?",
          answer:
            "No — turnover tax is a simplified 5% regime for small businesses under K5 million annual turnover, calculated on revenue. Corporate tax is calculated on actual taxable profit, and applies once you're above that threshold.",
        },
      ]}
    >
      <CorporateTaxCalculator />
    </CalculatorShell>
  );
}
