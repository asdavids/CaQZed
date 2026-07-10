"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import {
  calculateImportDuty,
  calculateAdValoremDuty,
  calculateGoodsVehicleDuty,
  calculateBusDuty,
  calculateMotorcycleDuty,
  getCarbonSurtax,
  type BodyType,
  type AgeBand,
  type GoodsVehicleType,
} from "@/lib/vehicle-rates";
import { formatKwacha } from "@/lib/format";

type Category = "passengerCar" | "goodsVehicle" | "bus" | "motorcycle";

export function ImportDutyCalculator() {
  const [mode, setMode] = useState<"duty" | "landed">("duty");
  const [category, setCategory] = useState<Category>("passengerCar");
  const [fuelType, setFuelType] = useState<"standard" | "hybridElectric">("standard");
  const [ageBand, setAgeBand] = useState<AgeBand>("over5");

  // Passenger car inputs
  const [engineCc, setEngineCc] = useState("1500");
  const [bodyType, setBodyType] = useState<BodyType>("sedan");

  // Goods vehicle inputs
  const [goodsType, setGoodsType] = useState<GoodsVehicleType>("singleCab");
  const [gvwTonnes, setGvwTonnes] = useState("2");

  // Bus inputs
  const [seats, setSeats] = useState("20");

  // Motorcycle inputs
  const [motoCc, setMotoCc] = useState("150");

  // CIF (hybrid/electric passenger cars, and Total Landed Cost mode)
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

  const passengerCarSpecific = useMemo(
    () => calculateImportDuty(cc, bodyType, ageBand),
    [cc, bodyType, ageBand]
  );
  const adValorem = useMemo(() => calculateAdValoremDuty(cifKwacha, cc), [cifKwacha, cc]);
  const goodsVehicleResult = useMemo(
    () => calculateGoodsVehicleDuty(goodsType, parseFloat(gvwTonnes) || 0, ageBand),
    [goodsType, gvwTonnes, ageBand]
  );
  const busResult = useMemo(
    () => calculateBusDuty(parseFloat(seats) || 0, ageBand),
    [seats, ageBand]
  );
  const motoCcNum = parseFloat(motoCc) || 0;
  const motoResult = useMemo(() => calculateMotorcycleDuty(motoCcNum, ageBand), [motoCcNum, ageBand]);
  const motoSurtax = useMemo(() => getCarbonSurtax(motoCcNum), [motoCcNum]);

  // Unified duty total for the selected category
  const duty = useMemo(() => {
    if (category === "passengerCar") {
      return fuelType === "hybridElectric"
        ? { total: adValorem.total, label: "Ad valorem (hybrid/electric)" }
        : { total: passengerCarSpecific.total, label: passengerCarSpecific.bandLabel };
    }
    if (category === "goodsVehicle") {
      return { total: goodsVehicleResult.specificDuty, label: goodsVehicleResult.bandLabel };
    }
    if (category === "bus") {
      return { total: busResult.specificDuty, label: busResult.bandLabel };
    }
    return { total: motoResult.specificDuty + motoSurtax, label: motoResult.bandLabel };
  }, [category, fuelType, adValorem, passengerCarSpecific, goodsVehicleResult, busResult, motoResult, motoSurtax]);

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
      </div>

      <SelectField
        label="Vehicle category"
        value={category}
        onChange={(v) => setCategory(v as Category)}
        options={[
          { value: "passengerCar", label: "Passenger Car (sedan, hatchback, SUV, wagon)" },
          { value: "goodsVehicle", label: "Goods Vehicle (pickup, van, truck)" },
          { value: "bus", label: "Bus / Minibus" },
          { value: "motorcycle", label: "Motorcycle" },
        ]}
      />

      {category === "passengerCar" && (
        <>
          <div className="mt-4 inline-flex rounded-full border border-border p-1 bg-surface-muted">
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

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
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
                Hybrid/electric uses CIF value, not age band.
              </div>
            )}
          </div>

          {fuelType === "hybridElectric" && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <NumberField label="Vehicle price" value={priceUsd} onChange={setPriceUsd} prefix="$" />
              <NumberField label="USD to ZMW exchange rate" value={exchangeRate} onChange={setExchangeRate} prefix="K" />
            </div>
          )}
        </>
      )}

      {category === "goodsVehicle" && (
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <SelectField
            label="Type"
            value={goodsType}
            onChange={(v) => setGoodsType(v as GoodsVehicleType)}
            options={[
              { value: "singleCab", label: "Single Cab Pickup" },
              { value: "doubleCab", label: "Double Cab Pickup" },
              { value: "panelVan", label: "Panel Van" },
              { value: "truck", label: "Truck" },
            ]}
          />
          <NumberField label="Gross Vehicle Weight" value={gvwTonnes} onChange={setGvwTonnes} suffix="tonnes" />
          <SelectField
            label="Vehicle age"
            value={ageBand}
            onChange={(v) => setAgeBand(v as AgeBand)}
            options={[
              { value: "over5", label: "Over 5 years old" },
              { value: "years2to5", label: "2 – 5 years old" },
            ]}
          />
        </div>
      )}

      {category === "bus" && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <NumberField label="Seating capacity" value={seats} onChange={setSeats} suffix="seats" />
          <SelectField
            label="Vehicle age"
            value={ageBand}
            onChange={(v) => setAgeBand(v as AgeBand)}
            options={[
              { value: "over5", label: "Over 5 years old" },
              { value: "years2to5", label: "2 – 5 years old" },
            ]}
          />
        </div>
      )}

      {category === "motorcycle" && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <NumberField label="Engine capacity" value={motoCc} onChange={setMotoCc} suffix="cc" />
          <SelectField
            label="Vehicle age"
            value={ageBand}
            onChange={(v) => setAgeBand(v as AgeBand)}
            options={[
              { value: "over5", label: "Over 5 years old" },
              { value: "years2to5", label: "2 – 5 years old" },
            ]}
          />
        </div>
      )}

      {mode === "duty" && (
        <div className="mt-5">
          {category === "passengerCar" && fuelType === "standard" && (
            <ResultsGrid>
              <ResultCard label="Total duty payable" value={formatKwacha(passengerCarSpecific.total)} emphasis />
              <ResultCard label="Specific duty" value={formatKwacha(passengerCarSpecific.specificDuty)} />
              <ResultCard label="Carbon emission surtax" value={formatKwacha(passengerCarSpecific.carbonSurtax)} />
              <ResultCard label="Engine band" value={passengerCarSpecific.bandLabel} />
            </ResultsGrid>
          )}
          {category === "passengerCar" && fuelType === "hybridElectric" && (
            <ResultsGrid>
              <ResultCard label="Total duty payable" value={formatKwacha(adValorem.total)} emphasis />
              <ResultCard label="Customs duty (25%)" value={formatKwacha(adValorem.customsDuty)} />
              <ResultCard label="Excise duty (30%)" value={formatKwacha(adValorem.exciseDuty)} />
              <ResultCard label="VAT (16%)" value={formatKwacha(adValorem.vat)} />
              <ResultCard label="Carbon emission surtax" value={formatKwacha(adValorem.carbonSurtax)} />
              <ResultCard label="CIF value used" value={formatKwacha(cifKwacha)} />
            </ResultsGrid>
          )}
          {category === "goodsVehicle" && (
            <ResultsGrid>
              <ResultCard label="Total duty payable" value={formatKwacha(goodsVehicleResult.specificDuty)} emphasis />
              <ResultCard label="Weight band" value={goodsVehicleResult.bandLabel} />
            </ResultsGrid>
          )}
          {category === "bus" && (
            <ResultsGrid>
              <ResultCard label="Total duty payable" value={formatKwacha(busResult.specificDuty)} emphasis />
              <ResultCard label="Seat band" value={busResult.bandLabel} />
            </ResultsGrid>
          )}
          {category === "motorcycle" && (
            <ResultsGrid>
              <ResultCard label="Total duty payable" value={formatKwacha(motoResult.specificDuty + motoSurtax)} emphasis />
              <ResultCard label="Specific duty" value={formatKwacha(motoResult.specificDuty)} />
              <ResultCard label="Carbon emission surtax" value={formatKwacha(motoSurtax)} />
              <ResultCard label="Engine band" value={motoResult.bandLabel} />
            </ResultsGrid>
          )}
        </div>
      )}

      {mode === "landed" && (
        <div className="mt-6">
          {(category !== "passengerCar" || fuelType === "standard") && (
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
        {category === "goodsVehicle" || category === "bus"
          ? "Carbon emission surtax may apply separately based on engine size for this category — confirm with ZRA, as it isn't included in this total."
          : category === "passengerCar" && fuelType === "hybridElectric"
          ? "Hybrid and electric vehicles are assessed on CIF value rather than the flat specific duty schedule."
          : "Includes the carbon emission surtax based on engine size."}
      </p>
    </div>
  );
}
