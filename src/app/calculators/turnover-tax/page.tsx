import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { TurnoverTaxCalculator } from "@/components/calculators/turnover-tax-calculator";

export const metadata: Metadata = {
  title: "Turnover Tax Calculator Zambia 2026 — 5% Small Business Tax",
  description:
    "Calculate turnover tax for small Zambian businesses under the K5 million annual turnover threshold.",
  alternates: { canonical: "/calculators/turnover-tax" },
};

export default function TurnoverTaxPage() {
  return (
    <CalculatorShell
      slug="turnover-tax"
      title="Turnover Tax Calculator"
      description="Estimate turnover tax for small businesses trading below the K5 million annual turnover threshold."
      legalReference="Income Tax Act — turnover tax regime administered by ZRA, 5% rate effective 1 January 2025."
      relatedSlugs={["vat", "corporate-tax", "profit-margin"]}
      formulaExplanation={
        <>
          <p>
            Turnover tax is a simplified tax for small businesses, charged at
            5% of gross turnover instead of standard corporate income tax —
            available to businesses with annual turnover not exceeding K5
            million.
          </p>
          <p>
            Turnover, for this purpose, excludes interest, dividends,
            royalties, consultancy income, and income from mining operations.
          </p>
        </>
      }
      faqs={[
        {
          question: "What if my turnover goes above K5 million?",
          answer:
            "Once your annual turnover exceeds the threshold, you generally move to the standard corporate income tax regime instead of turnover tax. Confirm the exact treatment with ZRA.",
        },
        {
          question: "Is turnover tax instead of VAT?",
          answer:
            "Turnover tax and VAT are separate. Depending on your business activity and turnover, you may need to consider both — check your VAT registration obligations separately.",
        },
      ]}
    >
      <TurnoverTaxCalculator />
    </CalculatorShell>
  );
}
