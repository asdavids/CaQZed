"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatNumber } from "@/lib/format";

export function FuelCostCalculator() {
  const [distance, setDistance] = useState("300");
  const [consumption, setConsumption] = useState("8");
  const [pricePerLitre, setPricePerLitre] = useState("32");

  const d = parseFloat(distance) || 0;
  const c = parseFloat(consumption) || 0;
  const p = parseFloat(pricePerLitre) || 0;

  const result = useMemo(() => {
    const litresNeeded = (d / 100) * c;
    const totalCost = litresNeeded * p;
    return { litresNeeded, totalCost };
  }, [d, c, p]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Trip distance" value={distance} onChange={setDistance} suffix="km" />
        <NumberField label="Fuel consumption" value={consumption} onChange={setConsumption} suffix="L/100km" />
        <NumberField label="Fuel price per litre" value={pricePerLitre} onChange={setPricePerLitre} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Trip fuel cost" value={formatKwacha(result.totalCost)} emphasis />
          <ResultCard label="Litres needed" value={`${formatNumber(result.litresNeeded)} L`} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Enter today&apos;s pump price — fuel prices in Zambia change monthly, so we don&apos;t hardcode one.
      </p>
    </div>
  );
}
