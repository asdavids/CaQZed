import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { TreasuryBillsCalculator } from "@/components/calculators/treasury-bills-calculator";

export const metadata: Metadata = {
  title: "Treasury Bills Calculator Zambia — Returns After Withholding Tax",
  description: "Calculate your return on Zambian government Treasury Bills, including the 15% withholding tax.",
  alternates: { canonical: "/calculators/treasury-bills" },
};

export default function TreasuryBillsPage() {
  return (
    <CalculatorShell
      title="Treasury Bills Calculator"
      description="Calculate your net return on a Bank of Zambia Treasury Bill, after withholding tax."
      legalReference="Treasury Bills are issued at a discount by the Bank of Zambia; interest income is subject to 15% withholding tax."
      relatedSlugs={["roi", "inflation", "compound-interest"]}
      formulaExplanation={
        <>
          <p>
            Treasury Bills are sold at a discount to their face value — you
            pay less today and receive the full face value at maturity. The
            difference is your return.
          </p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Gross return = Face value × Yield × (Tenor ÷ 365)
          </p>
          <p>
            A 15% withholding tax is deducted from the interest earned by
            resident individual investors.
          </p>
        </>
      }
      faqs={[
        {
          question: "Where do I find the current yield?",
          answer:
            "The Bank of Zambia publishes results from each Treasury Bill auction, held roughly every two weeks across 91, 182, 273 and 364-day tenors, on its website.",
        },
        {
          question: "How do I actually buy a Treasury Bill?",
          answer:
            "Through a Primary Dealer commercial bank or a licensed broker. The minimum non-competitive bid is typically K1,000.",
        },
      ]}
    >
      <TreasuryBillsCalculator />
    </CalculatorShell>
  );
}
