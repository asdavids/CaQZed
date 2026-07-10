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
      description="Estimate ZRA specific duty and carbon emission surtax, or switch to Total Landed Cost mode to see everything: purchase price, duty, JEVIC, clearing, and RTSA fees."
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
          <p>
            <strong>Total Landed Cost mode</strong> goes further: it converts
            your USD purchase price to Kwacha at today&apos;s exchange rate,
            adds the ZRA duty above, then adds the other real costs of
            importing — JEVIC inspection, clearing agent, port handling,
            transport, RTSA fitness and registration, road tax, and
            insurance. Those extra costs vary by agent and route, so they're
            editable estimates, not fixed government rates — adjust them to
            match your own quotes for a more precise total.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does this include shipping, clearing agent fees, or JEVIC inspection?",
          answer:
            "The ZRA Duty Only mode doesn't — that's ZRA duty alone. Switch to Total Landed Cost mode to include shipping (via your CIF price), JEVIC, clearing agent, port charges, transport, and RTSA fees all in one total.",
        },
        {
          question: "What if my clearing agent quotes a different fee?",
          answer:
            "Every additional cost field in Total Landed Cost mode is editable — replace the default estimate with your actual quote for a more accurate total.",
        },
        {
          question: "What about newer vehicles, hybrids or electric cars?",
          answer:
            "Switch to the \"Hybrid / Electric\" toggle above — it's built in. Instead of the flat specific duty schedule, it calculates 25% customs duty on your vehicle's CIF value, then 30% excise duty on that total, then 16% VAT on top of that, plus the same carbon emission surtax. This ad valorem method also applies to vehicles under 2 years old.",
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
