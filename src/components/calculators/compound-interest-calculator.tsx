"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

const FREQUENCIES: Record<string, number> = {
  annually: 1,
  quarterly: 4,
  monthly: 12,
};

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("12");
  const [years, setYears] = useState("5");
  const [frequency, setFrequency] = useState("monthly");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) || 0;
  const y = parseFloat(years) || 0;
  const n = FREQUENCIES[frequency] ?? 12;

  const result = useMemo(() => {
    const futureValue = p * Math.pow(1 + r / 100 / n, n * y);
    return { futureValue, interestEarned: futureValue - p };
  }, [p, r, y, n]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Starting amount" value={principal} onChange={setPrincipal} prefix="K" />
        <NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" />
        <NumberField label="Number of years" value={years} onChange={setYears} suffix="years" />
        <SelectField
          label="Compounded"
          value={frequency}
          onChange={setFrequency}
          options={[
            { value: "annually", label: "Annually" },
            { value: "quarterly", label: "Quarterly" },
            { value: "monthly", label: "Monthly" },
          ]}
        />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Future value" value={formatKwacha(result.futureValue)} emphasis />
          <ResultCard label="Interest earned" value={formatKwacha(result.interestEarned)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
