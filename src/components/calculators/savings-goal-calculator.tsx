"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

export function SavingsGoalCalculator() {
  const [goal, setGoal] = useState("50000");
  const [current, setCurrent] = useState("5000");
  const [months, setMonths] = useState("12");
  const [rate, setRate] = useState("0");

  const g = parseFloat(goal) || 0;
  const c = parseFloat(current) || 0;
  const m = parseFloat(months) || 0;
  const r = parseFloat(rate) || 0;

  const result = useMemo(() => {
    const remaining = Math.max(0, g - c);
    if (m <= 0) return { monthlySavings: 0, remaining };
    const monthlyRate = r / 100 / 12;
    if (monthlyRate === 0) {
      return { monthlySavings: remaining / m, remaining };
    }
    // Future value of annuity: FV = PMT * ((1+r)^n - 1) / r  => PMT = FV * r / ((1+r)^n - 1)
    const growthOfCurrent = c * Math.pow(1 + monthlyRate, m);
    const stillNeeded = Math.max(0, g - growthOfCurrent);
    const monthlySavings =
      (stillNeeded * monthlyRate) / (Math.pow(1 + monthlyRate, m) - 1);
    return { monthlySavings, remaining };
  }, [g, c, m, r]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Savings goal" value={goal} onChange={setGoal} prefix="K" />
        <NumberField label="Current savings" value={current} onChange={setCurrent} prefix="K" />
        <NumberField label="Months to save" value={months} onChange={setMonths} suffix="months" />
        <NumberField label="Annual interest rate (optional)" value={rate} onChange={setRate} suffix="%" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Monthly savings needed" value={formatKwacha(result.monthlySavings)} emphasis />
          <ResultCard label="Amount still needed" value={formatKwacha(result.remaining)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
