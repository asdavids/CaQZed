import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { GrossToNetCalculator } from "@/components/calculators/gross-to-net-calculator";

export const metadata: Metadata = {
  title: "Gross to Net Salary Calculator Zambia 2026 — Full Payslip",
  description:
    "See your full payslip breakdown: PAYE, NAPSA, NHIMA and net take-home pay from your gross salary.",
  alternates: { canonical: "/calculators/gross-to-net" },
};

export default function GrossToNetPage() {
  return (
    <CalculatorShell
      slug="gross-to-net"
      title="Gross to Net Salary Calculator"
      description="See your complete payslip: PAYE, NAPSA and NHIMA deducted, and what actually lands in your account."
      legalReference="Combines ZRA PAYE bands, NAPSA and NHIMA statutory rates for 2026."
      relatedSlugs={["paye", "napsa", "nhima"]}
      formulaExplanation={
        <>
          <p>Net pay is calculated as:</p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Net = Gross − PAYE − NAPSA − NHIMA
          </p>
          <p>
            PAYE is calculated on full gross pay using the 2026 progressive
            bands. NAPSA is 5% of gross, capped at K1,861.80. NHIMA is 1% of
            basic salary, uncapped.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does this include allowances?",
          answer:
            "Enter your total gross salary including any cash allowances (housing, transport, etc.) that your employer taxes as part of your emoluments.",
        },
        {
          question: "Why might my actual payslip differ?",
          answer:
            "Employers may apply additional deductions (loans, union dues, insurance) or benefits-in-kind that this simplified calculator doesn't account for.",
        },
      ]}
    >
      <GrossToNetCalculator />
    </CalculatorShell>
  );
}
