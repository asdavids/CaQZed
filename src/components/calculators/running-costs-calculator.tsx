"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

export function RunningCostsCalculator() {
  const [monthlyDistance, setMonthlyDistance] = useState("1000");
  const [consumption, setConsumption] = useState("8");
  const [pricePerLitre, setPricePerLitre] = useState("32");
  const [annualRoadTax, setAnnualRoadTax] = useState("918");
  const [insurance, setInsurance] = useState("400");
  const [maintenance, setMaintenance] = useState("500");

  const dist = parseFloat(monthlyDistance) || 0;
  const cons = parseFloat(consumption) || 0;
  const price = parseFloat(pricePerLitre) || 0;
  const roadTax = parseFloat(annualRoadTax) || 0;
  const ins = parseFloat(insurance) || 0;
  const maint = parseFloat(maintenance) || 0;

  const result = useMemo(() => {
    const fuelCost = (dist / 100) * cons * price;
    const monthlyRoadTax = roadTax / 12;
    const total = fuelCost + monthlyRoadTax + ins + maint;
    return { fuelCost, monthlyRoadTax, total, annual: total * 12 };
  }, [dist, cons, price, roadTax, ins, maint]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Monthly distance driven" value={monthlyDistance} onChange={setMonthlyDistance} suffix="km" />
        <NumberField label="Fuel consumption" value={consumption} onChange={setConsumption} suffix="L/100km" />
        <NumberField label="Fuel price per litre" value={pricePerLitre} onChange={setPricePerLitre} prefix="K" />
        <NumberField label="Annual road tax" value={annualRoadTax} onChange={setAnnualRoadTax} prefix="K" />
        <NumberField label="Monthly insurance" value={insurance} onChange={setInsurance} prefix="K" />
        <NumberField label="Monthly maintenance budget" value={maintenance} onChange={setMaintenance} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Monthly running cost" value={formatKwacha(result.total)} emphasis />
          <ResultCard label="Estimated annual cost" value={formatKwacha(result.annual)} />
          <ResultCard label="Fuel (monthly)" value={formatKwacha(result.fuelCost)} />
          <ResultCard label="Road tax (monthly share)" value={formatKwacha(result.monthlyRoadTax)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Maintenance and insurance vary a lot by vehicle age, make and cover level — the defaults are rough starting points, not quotes. Use our{" "}
        <a href="/calculators/road-tax" className="text-brand-green hover:underline">Road Tax Calculator</a> to find your exact annual road tax figure.
      </p>
    </div>
  );
}
