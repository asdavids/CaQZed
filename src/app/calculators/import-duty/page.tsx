import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { ImportDutyCalculator } from "@/components/calculators/import-duty-calculator";
import { VEHICLE_RATES_LAST_VERIFIED } from "@/lib/vehicle-rates";

export const metadata: Metadata = {
  title: "Vehicle Import Duty Calculator Zambia 2026 — Cars, Trucks, Buses, Motorcycles",
  description:
    "Calculate ZRA import duty for cars, pickups, vans, trucks, buses and motorcycles in Zambia, including carbon surtax and Total Landed Cost.",
  alternates: { canonical: "/calculators/import-duty" },
};

export default function ImportDutyPage() {
  return (
    <CalculatorShell
      slug="import-duty"
      title="Vehicle Import Duty Calculator"
      description="Estimate ZRA import duty for cars, pickups, vans, trucks, buses or motorcycles — or switch to Total Landed Cost mode for the full picture."
      legalReference={`ZRA Used Motor Vehicle Specific Duty Schedule (effective 2025). Rates verified ${VEHICLE_RATES_LAST_VERIFIED}.`}
      relatedSlugs={["road-tax", "running-costs", "fuel-cost"]}
      formulaExplanation={
        <>
          <p>
            ZRA charges most used vehicles a <strong>specific duty</strong> —
            a fixed Kwacha amount — rather than a percentage of value. What
            sets the amount depends on the vehicle category:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Passenger cars: engine size, body type and age</li>
            <li>Goods vehicles (pickups, vans, trucks): gross vehicle weight (GVW) and age</li>
            <li>Buses: seating capacity and age</li>
            <li>Motorcycles: engine size and age, on their own separate bands</li>
          </ul>
          <p>
            A carbon emission surtax, based on engine size, is added on top
            for passenger cars and motorcycles.
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
          question: "What about newer passenger cars, hybrids or electric cars?",
          answer:
            "Switch to the \"Hybrid / Electric\" toggle when Passenger Car is selected — it's built in. Instead of the flat specific duty schedule, it calculates 25% customs duty on your vehicle's CIF value, then 30% excise duty on that total, then 16% VAT on top of that, plus the same carbon emission surtax. This ad valorem method also applies to passenger cars under 2 years old.",
        },
        {
          question: "Does the carbon surtax apply to trucks and buses too?",
          answer:
            "We're not confident enough to say either way, so it isn't included in the goods vehicle or bus totals here — confirm with ZRA or a clearing agent if your vehicle has a large engine.",
        },
        {
          question: "Why does a double cab pickup cost more than a single cab of the same weight?",
          answer:
            "ZRA rates double cab pickups higher than single cabs at the same GVW — this reflects their classification as dual-purpose vehicles, not an error in the calculator.",
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
