import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { TerminalBenefitsCalculator } from "@/components/calculators/terminal-benefits-calculator";

export const metadata: Metadata = {
  title: "Terminal Benefits & Gratuity Calculator Zambia 2026",
  description: "Calculate statutory gratuity (25% of basic pay) for fixed-term contracts under the Employment Code Act.",
  alternates: { canonical: "/calculators/terminal-benefits" },
};

export default function TerminalBenefitsPage() {
  return (
    <CalculatorShell
      title="Terminal Benefits Calculator"
      description="Calculate the statutory gratuity owed at the end of a fixed-term employment contract."
      legalReference="Employment Code Act No. 3 of 2019, Section 73."
      relatedSlugs={["leave-pay", "overtime", "gross-to-net"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Gratuity = Total basic pay earned during the contract × 25%
          </p>
          <p>
            This applies to long-term contracts (fixed-term, exceeding 12
            months). The 25% is a statutory minimum — your specific contract
            may specify a higher rate.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does this apply to permanent employees?",
          answer:
            "No — gratuity under Section 73 specifically applies to fixed-term contracts over 12 months. Permanent employees have different terminal benefit entitlements, such as leave pay and notice pay.",
        },
        {
          question: "Is gratuity taxed?",
          answer:
            "Sources genuinely disagree on this — some treat the statutory 25% as tax-favoured under the Income Tax Act, others say it's fully taxed as normal PAYE income. We're not confident enough in either answer to state one here — confirm directly with ZRA or your employer's payroll team before relying on a take-home figure.",
        },
        {
          question: "Am I entitled to gratuity if I resign early?",
          answer:
            "You're generally entitled to gratuity calculated on the months actually worked, not the full contract term, if your contract is terminated before its end date.",
        },
      ]}
    >
      <TerminalBenefitsCalculator />
    </CalculatorShell>
  );
}
