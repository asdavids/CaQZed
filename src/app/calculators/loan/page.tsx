import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { LoanCalculator } from "@/components/calculators/loan-calculator";

export const metadata: Metadata = {
  title: "Loan Repayment Calculator Zambia — Monthly Instalments",
  description:
    "Calculate your monthly loan instalment, total interest, and total repayment for any loan in Zambia.",
  alternates: { canonical: "/calculators/loan" },
};

export default function LoanPage() {
  return (
    <CalculatorShell
      title="Loan Repayment Calculator"
      description="Work out your monthly instalment and total interest on any personal loan, SACCO loan, or hire purchase."
      legalReference="Standard reducing-balance amortisation formula, used by most Zambian banks and SACCOs."
      relatedSlugs={["mortgage", "compound-interest", "loan-affordability"]}
      formulaExplanation={
        <>
          <p>
            This uses the standard reducing-balance loan formula (EMI —
            Equated Monthly Instalment), the method most Zambian banks and
            SACCOs use for personal loans:
          </p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            EMI = P × r × (1+r)^n / ((1+r)^n − 1)
          </p>
          <p>
            Where P is the loan amount, r is the monthly interest rate
            (annual rate ÷ 12), and n is the number of months.
          </p>
        </>
      }
      faqs={[
        {
          question: "Is this the exact amount my bank will charge?",
          answer:
            "This gives a close estimate using the standard formula. Your actual instalment may differ slightly due to processing fees, insurance, or a different interest calculation method — always confirm with your lender.",
        },
        {
          question: "What's a typical interest rate in Zambia?",
          answer:
            "Rates vary widely by lender and loan type — banks, SACCOs, and microfinance institutions all price risk differently. Check your specific lender's current rate.",
        },
      ]}
    >
      <LoanCalculator />
    </CalculatorShell>
  );
}
