import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { FixedDepositCalculator } from "@/components/calculators/fixed-deposit-calculator";

export const metadata: Metadata = {
  title: "Fixed Deposit Calculator Zambia — Maturity Value",
  description: "Calculate the maturity value and interest earned on a fixed deposit.",
  alternates: { canonical: "/calculators/fixed-deposit" },
};

export default function FixedDepositPage() {
  return (
    <CalculatorShell
      slug="fixed-deposit"
      title="Fixed Deposit Calculator"
      description="Work out what your fixed deposit will be worth at maturity."
      legalReference="Simple interest calculation, the common method for fixed-term deposits at Zambian banks."
      relatedSlugs={["compound-interest", "savings-goal", "roi"]}
      formulaExplanation={
        <>
          <p>
            Most fixed deposits use simple interest over the term:
          </p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Interest = Principal × Rate × (Term in months ÷ 12)
          </p>
        </>
      }
      faqs={[
        {
          question: "Does my bank use simple or compound interest?",
          answer:
            "Most Zambian fixed deposits use simple interest over the fixed term. Confirm the exact method with your bank, as it can affect your actual payout.",
        },
        {
          question: "What if I withdraw early?",
          answer:
            "Early withdrawal usually reduces your interest rate or incurs a penalty — this calculator assumes you hold the deposit to full maturity.",
        },
      ]}
    >
      <FixedDepositCalculator />
    </CalculatorShell>
  );
}
