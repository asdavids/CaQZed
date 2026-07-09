import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { ImportDutyCalculator } from "@/components/calculators/import-duty-calculator";
import { VEHICLE_RATES_LAST_VERIFIED } from "@/lib/vehicle-rates";

export const metadata: Metadata = {
  title: "Vehicle Import Duty Calculator Zambia 2026 — ZRA Specific Duty",
  description:
    "Calculate ZRA specific duty and carbon emission surtax for importing a used vehicle into Zambia, by engine size, body type and age.",
  alternates: { canonical: "/calculators/import-duty" },
};

export default function ImportDutyPage() {
  return (
    <CalculatorShell
      title="Vehicle Import Duty Calculator"
      description="Estimate ZRA specific duty and carbon emission surtax for a used vehicle, by engine size, body type and age."
      legalReference={`ZRA Used Motor Vehicle Specific Duty Schedule (effective 2025). Rates verified ${VEHICLE_RATES_LAST_VERIFIED}.`}
      relatedSlugs={["road-tax", "running-costs", "fuel-cost"]}
      formulaExplanation={
        <>
          <p>
            Unlike most import duties, ZRA charges used passenger vehicles a{" "}
            <strong>specific duty</strong> — a fixed Kwacha amount set by
            engine capacity, body type and age band — rather than a
            percentage of the vehicle&apos;s value. A carbon emission surtax,
            based only on engine size, is added on top.
          </p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Total duty = Specific duty (by cc, body type, age) + Carbon surtax (by cc)
          </p>
        </>
      }
      faqs={[
        {
          question: "Does this include shipping, clearing agent fees, or JEVIC inspection?",
          answer:
            "No — this is the ZRA duty only. Shipping/freight, clearing agent fees, JEVIC roadworthiness inspection, and Interpol clearance are separate costs on top of this.",
        },
        {
          question: "What about newer vehicles, hybrids or electric cars?",
          answer:
            "Vehicles under 2 years old, and hybrid or electric vehicles, are assessed differently — as a percentage of the vehicle's CIF (cost, insurance, freight) value rather than the flat specific duty schedule. Confirm the exact calculation with ZRA or a clearing agent.",
        },
        {
          question: "Why does an SUV cost more than a sedan with the same engine?",
          answer:
            "The ZRA schedule rates SUVs higher than sedans, hatchbacks or station wagons at every engine size — this is built into the official schedule, not an error.",
        },
      ]}
    >
      <ImportDutyCalculator />
    </CalculatorShell>
  );
}
