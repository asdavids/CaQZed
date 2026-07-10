#!/bin/bash
set -e
echo 'Updating CaQZed: Hybrid/Electric ad valorem duty calculation...'

mkdir -p 'src/app/calculators/import-duty'
cat > 'src/app/calculators/import-duty/page.tsx' << 'CAQZED_EOF'
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
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/import-duty-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import {
  calculateImportDuty,
  calculateAdValoremDuty,
  type BodyType,
  type AgeBand,
} from "@/lib/vehicle-rates";
import { formatKwacha } from "@/lib/format";

export function ImportDutyCalculator() {
  const [mode, setMode] = useState<"duty" | "landed">("duty");
  const [fuelType, setFuelType] = useState<"standard" | "hybridElectric">("standard");

  // Vehicle details
  const [engineCc, setEngineCc] = useState("1500");
  const [bodyType, setBodyType] = useState<BodyType>("sedan");
  const [ageBand, setAgeBand] = useState<AgeBand>("over5");

  // CIF (needed for hybrid/electric always, and for Total Landed Cost mode)
  const [priceUsd, setPriceUsd] = useState("6000");
  const [exchangeRate, setExchangeRate] = useState("27");

  // Total Landed Cost extra fees
  const [feeJevic, setFeeJevic] = useState("3110");
  const [feeClearingAgent, setFeeClearingAgent] = useState("3000");
  const [feePortCharges, setFeePortCharges] = useState("7500");
  const [feeTransport, setFeeTransport] = useState("3500");
  const [feeRtsaFitness, setFeeRtsaFitness] = useState("64");
  const [feeRtsaReg, setFeeRtsaReg] = useState("750");
  const [feeRoadTax, setFeeRoadTax] = useState("600");
  const [feeInsurance, setFeeInsurance] = useState("1200");

  const cc = parseFloat(engineCc) || 0;
  const usd = parseFloat(priceUsd) || 0;
  const rate = parseFloat(exchangeRate) || 0;
  const cifKwacha = usd * rate;

  const specificDuty = useMemo(
    () => calculateImportDuty(cc, bodyType, ageBand),
    [cc, bodyType, ageBand]
  );
  const adValoremDuty = useMemo(
    () => calculateAdValoremDuty(cifKwacha, cc),
    [cifKwacha, cc]
  );

  const duty = fuelType === "hybridElectric" ? adValoremDuty : specificDuty;

  const landed = useMemo(() => {
    const extras =
      (parseFloat(feeJevic) || 0) +
      (parseFloat(feeClearingAgent) || 0) +
      (parseFloat(feePortCharges) || 0) +
      (parseFloat(feeTransport) || 0) +
      (parseFloat(feeRtsaFitness) || 0) +
      (parseFloat(feeRtsaReg) || 0) +
      (parseFloat(feeRoadTax) || 0) +
      (parseFloat(feeInsurance) || 0);
    const total = cifKwacha + duty.total + extras;
    return { extras, total };
  }, [cifKwacha, duty, feeJevic, feeClearingAgent, feePortCharges, feeTransport, feeRtsaFitness, feeRtsaReg, feeRoadTax, feeInsurance]);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        <div className="inline-flex rounded-full border border-border p-1 bg-surface-muted">
          <button
            onClick={() => setMode("duty")}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              mode === "duty" ? "bg-brand-green text-white" : "text-foreground-muted"
            }`}
          >
            ZRA Duty Only
          </button>
          <button
            onClick={() => setMode("landed")}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              mode === "landed" ? "bg-brand-green text-white" : "text-foreground-muted"
            }`}
          >
            Total Landed Cost
          </button>
        </div>
        <div className="inline-flex rounded-full border border-border p-1 bg-surface-muted">
          <button
            onClick={() => setFuelType("standard")}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              fuelType === "standard" ? "bg-brand-green text-white" : "text-foreground-muted"
            }`}
          >
            Petrol / Diesel
          </button>
          <button
            onClick={() => setFuelType("hybridElectric")}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              fuelType === "hybridElectric" ? "bg-brand-green text-white" : "text-foreground-muted"
            }`}
          >
            Hybrid / Electric
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Engine capacity" value={engineCc} onChange={setEngineCc} suffix="cc" />
        <SelectField
          label="Body type"
          value={bodyType}
          onChange={(v) => setBodyType(v as BodyType)}
          options={[
            { value: "sedan", label: "Sedan" },
            { value: "hatchback", label: "Hatchback" },
            { value: "stationWagon", label: "Station Wagon" },
            { value: "suv", label: "SUV" },
          ]}
        />
        {fuelType === "standard" ? (
          <SelectField
            label="Vehicle age"
            value={ageBand}
            onChange={(v) => setAgeBand(v as AgeBand)}
            options={[
              { value: "over5", label: "Over 5 years old" },
              { value: "years2to5", label: "2 – 5 years old" },
            ]}
          />
        ) : (
          <div className="text-[12px] text-foreground-muted flex items-end pb-2.5">
            Hybrid/electric vehicles use CIF value, not age band.
          </div>
        )}
      </div>

      {fuelType === "hybridElectric" && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <NumberField label="Vehicle price" value={priceUsd} onChange={setPriceUsd} prefix="$" />
          <NumberField label="USD to ZMW exchange rate" value={exchangeRate} onChange={setExchangeRate} prefix="K" />
        </div>
      )}

      {mode === "duty" && (
        <div className="mt-5">
          {fuelType === "standard" ? (
            <ResultsGrid>
              <ResultCard label="Total duty payable" value={formatKwacha(duty.total)} emphasis />
              <ResultCard label="Specific duty" value={formatKwacha(specificDuty.specificDuty)} />
              <ResultCard label="Carbon emission surtax" value={formatKwacha(specificDuty.carbonSurtax)} />
              <ResultCard label="Engine band" value={specificDuty.bandLabel} />
            </ResultsGrid>
          ) : (
            <ResultsGrid>
              <ResultCard label="Total duty payable" value={formatKwacha(adValoremDuty.total)} emphasis />
              <ResultCard label="Customs duty (25%)" value={formatKwacha(adValoremDuty.customsDuty)} />
              <ResultCard label="Excise duty (30%)" value={formatKwacha(adValoremDuty.exciseDuty)} />
              <ResultCard label="VAT (16%)" value={formatKwacha(adValoremDuty.vat)} />
              <ResultCard label="Carbon emission surtax" value={formatKwacha(adValoremDuty.carbonSurtax)} />
              <ResultCard label="CIF value used" value={formatKwacha(cifKwacha)} />
            </ResultsGrid>
          )}
        </div>
      )}

      {mode === "landed" && (
        <div className="mt-6">
          {fuelType === "standard" && (
            <>
              <h3 className="text-[13px] font-semibold mb-3">Purchase price</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <NumberField label="Price you paid" value={priceUsd} onChange={setPriceUsd} prefix="$" />
                <NumberField label="USD to ZMW exchange rate" value={exchangeRate} onChange={setExchangeRate} prefix="K" />
              </div>
            </>
          )}

          <h3 className="text-[13px] font-semibold mb-3 mt-6">
            Additional costs <span className="font-normal text-foreground-muted">(typical estimates — edit to match your own quotes)</span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <NumberField label="JEVIC inspection" value={feeJevic} onChange={setFeeJevic} prefix="K" />
            <NumberField label="Clearing agent" value={feeClearingAgent} onChange={setFeeClearingAgent} prefix="K" />
            <NumberField label="Port handling charges" value={feePortCharges} onChange={setFeePortCharges} prefix="K" />
            <NumberField label="Transport from border" value={feeTransport} onChange={setFeeTransport} prefix="K" />
            <NumberField label="RTSA fitness" value={feeRtsaFitness} onChange={setFeeRtsaFitness} prefix="K" />
            <NumberField label="RTSA registration" value={feeRtsaReg} onChange={setFeeRtsaReg} prefix="K" />
            <NumberField label="Road tax (first year)" value={feeRoadTax} onChange={setFeeRoadTax} prefix="K" />
            <NumberField label="Third-party insurance" value={feeInsurance} onChange={setFeeInsurance} prefix="K" />
          </div>

          <div className="mt-6">
            <ResultsGrid>
              <ResultCard label="Total landed cost" value={formatKwacha(landed.total)} emphasis />
              <ResultCard label="Vehicle price (CIF, converted)" value={formatKwacha(cifKwacha)} />
              <ResultCard label="ZRA duty" value={formatKwacha(duty.total)} />
              <ResultCard label="Additional costs" value={formatKwacha(landed.extras)} />
            </ResultsGrid>
          </div>

          <p className="mt-4 text-[12px] text-foreground-muted">
            Exchange rate changes daily — use today&apos;s rate from your bank or forex bureau. Road tax here uses your exact weight band on the{" "}
            <a href="/calculators/road-tax" className="text-brand-green hover:underline">Road Tax Calculator</a>.
          </p>
        </div>
      )}

      <p className="mt-4 text-[12px] text-foreground-muted">
        {fuelType === "standard"
          ? "This covers the standard used-vehicle specific duty schedule (the majority of imports)."
          : "Hybrid and electric vehicles are assessed on their CIF (Cost, Insurance, Freight) value rather than the flat specific duty schedule."}
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/lib'
cat > 'src/lib/vehicle-rates.ts' << 'CAQZED_EOF'
/**
 * VEHICLE RATES — import duty and road tax.
 *
 * Sources:
 * - Import duty: ZRA "Used Motor Vehicle Specific Duty Rates" schedule,
 *   effective 2025 (zra.org.zm). Specific duty is a flat Kwacha amount per
 *   engine-capacity/body-type/age band — NOT a percentage of vehicle value —
 *   for the used vehicles (over 2 years old) that make up the large majority
 *   of imports. Carbon emission surtax is added on top, based on engine size.
 * - Road tax: RTSA fee-unit schedule under Statutory Instrument No. 25 of
 *   2024 (effective 20 May 2024), fee unit value K0.40. Based on gross
 *   vehicle weight (GVW), not engine size.
 *
 * NOTE: Newer vehicles (under 2 years old) and hybrid/electric vehicles are
 * assessed differently (ad valorem, i.e. a percentage of CIF value) — this
 * calculator covers the standard used-vehicle specific duty schedule, which
 * applies to the majority of vehicles imported into Zambia.
 */

export const VEHICLE_RATES_LAST_VERIFIED = "2026-07-09";

export type BodyType = "sedan" | "hatchback" | "stationWagon" | "suv";
export type AgeBand = "over5" | "years2to5";

interface DutyBand {
  label: string;
  maxCc: number; // Infinity for "over"
  rates: Record<BodyType, Record<AgeBand, number>>;
}

export const IMPORT_DUTY_SCHEDULE: DutyBand[] = [
  {
    label: "1000cc and under",
    maxCc: 1000,
    rates: {
      sedan: { over5: 25_138.6, years2to5: 39_461.45 },
      hatchback: { over5: 25_138.6, years2to5: 34_020.5 },
      stationWagon: { over5: 25_138.6, years2to5: 39_461.45 },
      suv: { over5: 31_869.84, years2to5: 48_866.53 },
    },
  },
  {
    label: "1001cc – 1500cc",
    maxCc: 1500,
    rates: {
      sedan: { over5: 29_491.36, years2to5: 50_343.35 },
      hatchback: { over5: 29_491.36, years2to5: 44_902.4 },
      stationWagon: { over5: 29_491.36, years2to5: 50_340.6 },
      suv: { over5: 36_508.57, years2to5: 56_597.74 },
    },
  },
  {
    label: "1501cc – 2500cc",
    maxCc: 2500,
    rates: {
      sedan: { over5: 33_844.12, years2to5: 61_225.25 },
      hatchback: { over5: 33_844.12, years2to5: 55_784.3 },
      stationWagon: { over5: 36_020.71, years2to5: 61_225.25 },
      suv: { over5: 49_078.78, years2to5: 77_548.1 },
    },
  },
  {
    label: "2501cc – 3000cc",
    maxCc: 3000,
    rates: {
      sedan: { over5: 41_461.45, years2to5: 66_666.2 },
      hatchback: { over5: 41_461.45, years2to5: 65_666.2 },
      stationWagon: { over5: 41_461.45, years2to5: 66_666.2 },
      suv: { over5: 59_525.4, years2to5: 88_430.0 },
    },
  },
  {
    label: "Over 3000cc",
    maxCc: Infinity,
    rates: {
      sedan: { over5: 46_902.4, years2to5: 82_989.05 },
      hatchback: { over5: 46_902.4, years2to5: 72_107.15 },
      stationWagon: { over5: 46_902.4, years2to5: 82_989.05 },
      suv: { over5: 68_666.2, years2to5: 104_752.85 },
    },
  },
];

export const CARBON_SURTAX_BANDS = [
  { maxCc: 1500, surtax: 123.2 },
  { maxCc: 2000, surtax: 246.4 },
  { maxCc: 3000, surtax: 352.0 },
  { maxCc: Infinity, surtax: 484.0 },
];

export function getDutyBand(engineCc: number): DutyBand {
  return (
    IMPORT_DUTY_SCHEDULE.find((b) => engineCc <= b.maxCc) ??
    IMPORT_DUTY_SCHEDULE[IMPORT_DUTY_SCHEDULE.length - 1]
  );
}

export function getCarbonSurtax(engineCc: number): number {
  const band = CARBON_SURTAX_BANDS.find((b) => engineCc <= b.maxCc);
  return band ? band.surtax : CARBON_SURTAX_BANDS[CARBON_SURTAX_BANDS.length - 1].surtax;
}

export function calculateImportDuty(
  engineCc: number,
  bodyType: BodyType,
  ageBand: AgeBand
): { specificDuty: number; carbonSurtax: number; total: number; bandLabel: string } {
  const band = getDutyBand(engineCc);
  const specificDuty = band.rates[bodyType][ageBand];
  const carbonSurtax = getCarbonSurtax(engineCc);
  return { specificDuty, carbonSurtax, total: specificDuty + carbonSurtax, bandLabel: band.label };
}

// ---------------------------------------------------------------------------
// Ad valorem duty — used instead of the specific duty schedule for vehicles
// under 2 years old, and for hybrid/electric vehicles of any age, since the
// flat specific-duty schedule above does not apply to them.
// Source: ZRA Motor Vehicle Tax Calculator methodology — 25% customs duty on
// CIF value, 30% excise duty on the resulting excisable value, 16% VAT on
// the resulting vatable value (each duty cascades onto the value including
// the previous one). Cross-verified against a ZRA worked example.
// ---------------------------------------------------------------------------
export const AD_VALOREM_CUSTOMS_RATE = 0.25;
export const AD_VALOREM_EXCISE_RATE = 0.3;
export const AD_VALOREM_VAT_RATE = 0.16;

export function calculateAdValoremDuty(cifValueZmw: number, engineCc: number) {
  const customsDuty = cifValueZmw * AD_VALOREM_CUSTOMS_RATE;
  const excisableValue = cifValueZmw + customsDuty;
  const exciseDuty = excisableValue * AD_VALOREM_EXCISE_RATE;
  const vatableValue = excisableValue + exciseDuty;
  const vat = vatableValue * AD_VALOREM_VAT_RATE;
  const carbonSurtax = getCarbonSurtax(engineCc);
  const total = customsDuty + exciseDuty + vat + carbonSurtax;
  return { customsDuty, exciseDuty, vat, carbonSurtax, total };
}

// ---------------------------------------------------------------------------
// Road tax — RTSA fee-unit schedule, SI No. 25 of 2024, fee unit = K0.40
// ---------------------------------------------------------------------------
export const ROAD_TAX_FEE_UNIT_VALUE = 0.4;

export const ROAD_TAX_BANDS = [
  { label: "Motorcycle", maxKg: 0, isMotorcycle: true, feeUnits: 183.7 },
  { label: "Up to 800 kg", maxKg: 800, feeUnits: 1_100 },
  { label: "801 – 1,000 kg", maxKg: 1_000, feeUnits: 1_283.37 },
  { label: "1,001 – 1,200 kg", maxKg: 1_200, feeUnits: 1_466.63 },
  { label: "1,201 – 1,400 kg", maxKg: 1_400, feeUnits: 1_650 },
  { label: "1,401 – 1,600 kg", maxKg: 1_600, feeUnits: 1_833.37 },
  { label: "1,601 – 2,000 kg", maxKg: 2_000, feeUnits: 2_016.63 },
  { label: "2,001 – 4,000 kg", maxKg: 4_000, feeUnits: 2_292.63 },
  { label: "4,001 – 6,000 kg", maxKg: 6_000, feeUnits: 2_566.63 },
  { label: "6,001 – 9,000 kg", maxKg: 9_000, feeUnits: 2_933.37 },
  { label: "9,001 – 12,000 kg", maxKg: 12_000, feeUnits: 3_300 },
  { label: "12,001 – 15,000 kg", maxKg: 15_000, feeUnits: 3_666.63 },
  { label: "15,001 – 17,000 kg", maxKg: 17_000, feeUnits: 4_583.37 },
  { label: "17,001 – 20,000 kg", maxKg: 20_000, feeUnits: 5_958.37 },
  { label: "Above 20,000 kg", maxKg: Infinity, feeUnits: 13_750 },
];

export function calculateRoadTax(gvwKg: number, isMotorcycle: boolean) {
  const band = isMotorcycle
    ? ROAD_TAX_BANDS[0]
    : ROAD_TAX_BANDS.slice(1).find((b) => gvwKg <= b.maxKg) ??
      ROAD_TAX_BANDS[ROAD_TAX_BANDS.length - 1];
  const annual = band.feeUnits * ROAD_TAX_FEE_UNIT_VALUE;
  return { annual, quarterly: annual / 4, bandLabel: band.label };
}
CAQZED_EOF

echo 'Done. Run: git add -A && git commit -m "Add hybrid/electric duty calc" && git push'