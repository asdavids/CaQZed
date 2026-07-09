import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { RoadTaxCalculator } from "@/components/calculators/road-tax-calculator";
import { VEHICLE_RATES_LAST_VERIFIED } from "@/lib/vehicle-rates";

export const metadata: Metadata = {
  title: "Road Tax Calculator Zambia 2026 — RTSA Annual Fees",
  description:
    "Calculate your annual and quarterly RTSA road tax by vehicle weight, using the current fee-unit schedule.",
  alternates: { canonical: "/calculators/road-tax" },
};

export default function RoadTaxPage() {
  return (
    <CalculatorShell
      title="Road Tax Calculator"
      description="Calculate your annual RTSA road tax based on your vehicle's gross vehicle weight (GVW)."
      legalReference={`RTSA fee-unit schedule under Statutory Instrument No. 25 of 2024, fee unit value K0.40. Rates verified ${VEHICLE_RATES_LAST_VERIFIED}.`}
      relatedSlugs={["import-duty", "running-costs", "fuel-cost"]}
      formulaExplanation={
        <>
          <p>
            Road tax fees are set in &quot;fee units&quot;, and the
            government adjusts the Kwacha value of a fee unit to move rates
            across the board.
          </p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Annual road tax = Fee units for your weight band × K0.40
          </p>
          <p>
            Cars are banded by gross vehicle weight (GVW) — the maximum
            design weight including passengers and cargo, not the empty
            weight. Motorcycles have their own flat rate.
          </p>
        </>
      }
      faqs={[
        {
          question: "Where do I find my vehicle's GVW?",
          answer:
            "Check your registration card (blue book), or the sticker/plate on the driver's door jamb. If you can't find it, the manufacturer's specification sheet online will list it (sometimes as GVWR or GVM).",
        },
        {
          question: "Can I pay quarterly?",
          answer:
            "Yes — RTSA allows quarterly payment at 25% of the annual fee per quarter, with no surcharge for paying this way.",
        },
        {
          question: "Are electric vehicles charged differently?",
          answer:
            "No — the current schedule doesn't have a separate EV category. Electric and hybrid vehicles are taxed by GVW just like petrol and diesel vehicles.",
        },
      ]}
    >
      <RoadTaxCalculator />
    </CalculatorShell>
  );
}
