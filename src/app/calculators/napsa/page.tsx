import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { NapsaCalculator } from "@/components/calculators/napsa-calculator";

export const metadata: Metadata = {
  title: "NAPSA Calculator Zambia 2026 — Pension Contribution",
  description:
    "Calculate your NAPSA pension contribution in Zambia — employee and employer share, with the 2026 monthly cap.",
  alternates: { canonical: "/calculators/napsa" },
};

export default function NapsaPage() {
  return (
    <CalculatorShell
      slug="napsa"
      title="NAPSA Calculator"
      description="Work out your National Pension Scheme Authority contribution, employee and employer share."
      legalReference="National Pension Scheme Authority Act — administered by NAPSA."
      relatedSlugs={["paye", "nhima", "gross-to-net"]}
      formulaExplanation={
        <>
          <p>
            NAPSA is Zambia&apos;s mandatory pension scheme. Both you and your
            employer each contribute 5% of your gross salary, for a combined
            10%.
          </p>
          <p>
            Contributions are capped at K1,861.80 per side per month (based
            on the insurable earnings ceiling) — so even on a very high
            salary, you never pay more than the cap.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does NAPSA reduce my PAYE?",
          answer:
            "Some payroll systems deduct NAPSA before calculating PAYE, but ZRA's standard method calculates PAYE on full gross emoluments. Check with your payroll provider for your specific setup.",
        },
        {
          question: "What happens to my NAPSA contributions?",
          answer:
            "They build your pension fund, which you can access on retirement, or under specific conditions such as emigration or invalidity, as defined by NAPSA rules.",
        },
      ]}
    >
      <NapsaCalculator />
    </CalculatorShell>
  );
}
