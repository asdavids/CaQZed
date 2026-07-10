import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { ZescoCalculator } from "@/components/calculators/zesco-calculator";

export const metadata: Metadata = {
  title: "ZESCO Bill Estimator Zambia 2026 — Electricity Units Cost",
  description:
    "Estimate the cost of your ZESCO prepaid electricity units using current ERB-approved residential tariff bands.",
  alternates: { canonical: "/calculators/zesco-bill" },
};

export default function ZescoPage() {
  return (
    <CalculatorShell
      slug="zesco-bill"
      title="ZESCO Bill Estimator"
      description="Estimate how much your electricity units will cost using the current residential tariff bands."
      legalReference="Energy Regulation Board (ERB) approved ZESCO residential tariffs."
      relatedSlugs={["water-bill", "fuel-cost", "budget-planner"]}
      formulaExplanation={
        <>
          <p>
            ZESCO uses a progressive block tariff for residential customers —
            the price per unit increases as your monthly consumption rises:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>0 – 100 units: K0.35/unit</li>
            <li>101 – 200 units: K1.00/unit</li>
            <li>201 – 400 units: K2.42/unit</li>
            <li>Above 400 units: K3.45/unit</li>
          </ul>
          <p>
            You only pay the higher rate on the units within each band, not
            your whole usage.
          </p>
        </>
      }
      faqs={[
        {
          question: "Why did my average rate go up as I used more units?",
          answer:
            "This is intentional — ZESCO's block structure protects low-usage households by keeping early units cheap, while heavier users pay progressively more per unit.",
        },
        {
          question: "Does this include VAT or other levies?",
          answer:
            "These are the base ERB-approved tariff bands. Your actual token purchase may include additional levies — check your ZESCO receipt for the full breakdown.",
        },
      ]}
    >
      <ZescoCalculator />
    </CalculatorShell>
  );
}
