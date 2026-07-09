"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

export function RentalYieldCalculator() {
  const [propertyValue, setPropertyValue] = useState("900000");
  const [monthlyRent, setMonthlyRent] = useState("7000");
  const [annualExpenses, setAnnualExpenses] = useState("6000");

  const value = parseFloat(propertyValue) || 0;
  const rent = parseFloat(monthlyRent) || 0;
  const expenses = parseFloat(annualExpenses) || 0;

  const result = useMemo(() => {
    const annualRent = rent * 12;
    const grossYield = value !== 0 ? annualRent / value : 0;
    const netAnnualIncome = annualRent - expenses;
    const netYield = value !== 0 ? netAnnualIncome / value : 0;
    return { annualRent, grossYield, netYield, netAnnualIncome };
  }, [value, rent, expenses]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Property value" value={propertyValue} onChange={setPropertyValue} prefix="K" />
        <NumberField label="Monthly rental income" value={monthlyRent} onChange={setMonthlyRent} prefix="K" />
        <NumberField label="Annual expenses" value={annualExpenses} onChange={setAnnualExpenses} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Gross rental yield" value={formatPercent(result.grossYield)} emphasis />
          <ResultCard label="Net rental yield" value={formatPercent(result.netYield)} />
          <ResultCard label="Annual rental income" value={formatKwacha(result.annualRent)} />
          <ResultCard label="Net annual income" value={formatKwacha(result.netAnnualIncome)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
