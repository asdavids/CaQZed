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
