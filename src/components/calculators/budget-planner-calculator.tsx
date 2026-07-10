"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

export function BudgetPlannerCalculator() {
  const [income, setIncome] = useState("10000");
  const [housing, setHousing] = useState("2500");
  const [food, setFood] = useState("1500");
  const [transport, setTransport] = useState("800");
  const [utilities, setUtilities] = useState("600");
  const [other, setOther] = useState("1000");

  const inc = parseFloat(income) || 0;
  const values = [housing, food, transport, utilities, other].map((v) => parseFloat(v) || 0);

  const result = useMemo(() => {
    const totalExpenses = values.reduce((a, b) => a + b, 0);
    const remaining = inc - totalExpenses;
    const spentPct = inc !== 0 ? totalExpenses / inc : 0;
    return { totalExpenses, remaining, spentPct };
  }, [inc, values]);

  return (
    <div>
      <NumberField label="Monthly income" value={income} onChange={setIncome} prefix="K" />

      <h3 className="mt-5 text-[13px] font-semibold text-foreground-muted">Monthly expenses</h3>
      <div className="mt-2 grid gap-4 sm:grid-cols-2">
        <NumberField label="Housing / rent" value={housing} onChange={setHousing} prefix="K" />
        <NumberField label="Food & groceries" value={food} onChange={setFood} prefix="K" />
        <NumberField label="Transport" value={transport} onChange={setTransport} prefix="K" />
        <NumberField label="Utilities" value={utilities} onChange={setUtilities} prefix="K" />
        <NumberField label="Other" value={other} onChange={setOther} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard
            label={result.remaining >= 0 ? "Left to save" : "Over budget by"}
            value={formatKwacha(Math.abs(result.remaining))}
            emphasis
          />
          <ResultCard label="Total expenses" value={formatKwacha(result.totalExpenses)} />
          <ResultCard label="% of income spent" value={formatPercent(result.spentPct)} />
        </ResultsGrid>
      </div>

      {result.remaining < 0 && (
        <p className="mt-4 text-[13px] text-brand-gold bg-brand-gold-50 rounded-lg px-3.5 py-2.5">
          Your expenses are higher than your income this month — worth reviewing where to cut back.
        </p>
      )}
    </div>
  );
}
