import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { PayeCalculator } from "@/components/calculators/paye-calculator";

export const metadata: Metadata = {
  title: "PAYE Calculator Zambia 2026 — ZRA Income Tax",
  description:
    "Calculate your PAYE income tax in Zambia using the official 2026 ZRA bands. Free, instant, and accurate.",
  alternates: { canonical: "/calculators/paye" },
};

export default function PayePage() {
  return (
    <CalculatorShell
      slug="paye"
      title="PAYE Calculator"
      description="Estimate your Pay As You Earn income tax using the 2026 ZRA monthly bands."
      legalReference="Income Tax Act, Chapter 323 of the Laws of Zambia — administered by the Zambia Revenue Authority (ZRA)."
      relatedSlugs={["napsa", "nhima", "gross-to-net"]}
      formulaExplanation={
        <>
          <p>
            PAYE is calculated on a progressive band system, meaning different
            portions of your income are taxed at different rates — not one
            flat rate on the whole amount.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>K0 – K5,100 is taxed at 0%</li>
            <li>K5,100 – K7,100 is taxed at 20%</li>
            <li>K7,100 – K9,200 is taxed at 30%</li>
            <li>Above K9,200 is taxed at 37%</li>
          </ul>
          <p>
            Only the income that falls within each band is taxed at that
            band&apos;s rate — earning more never reduces your take-home pay.
          </p>
        </>
      }
      faqs={[
        {
          question: "Is PAYE calculated before or after NAPSA?",
          answer:
            "PAYE is calculated on your full gross emoluments, before NAPSA is deducted. NHIMA is deducted separately and does not affect the PAYE calculation.",
        },
        {
          question: "Are bonuses and commissions taxed the same way?",
          answer:
            "Yes. Bonuses, commissions and overtime are added to your gross pay for the month they're paid and taxed through the same progressive bands.",
        },
        {
          question: "Do these bands change?",
          answer:
            "ZRA can revise PAYE bands, typically announced in the national budget. Always confirm the current bands with ZRA if you're filing or running payroll.",
        },
      ]}
    >
      <PayeCalculator />
    </CalculatorShell>
  );
}
