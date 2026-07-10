"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

export function InflationCalculator() {
  const [amount, setAmount] = useState("10000");
  const [inflationRate, setInflationRate] = useState("13");
  const [years, setYears] = useState("5");

  const a = parseFloat(amount) || 0;
  const r = parseFloat(inflationRate) || 0;
  const y = parseFloat(years) || 0;

  const result = useMemo(() => {
    const futureValueNeeded = a * Math.pow(1 + r / 100, y);
    const realValueLost = futureValueNeeded - a;
    const purchasingPowerRemaining = a / Math.pow(1 + r / 100, y);
    return { futureValueNeeded, realValueLost, purchasingPowerRemaining };
  }, [a, r, y]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Amount today" value={amount} onChange={setAmount} prefix="K" />
        <NumberField label="Annual inflation rate" value={inflationRate} onChange={setInflationRate} suffix="%" />
        <NumberField label="Number of years" value={years} onChange={setYears} suffix="years" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label={`What you'd need in ${y || 0} years for the same buying power`} value={formatKwacha(result.futureValueNeeded)} emphasis />
          <ResultCard label="Value eroded by inflation" value={formatKwacha(result.realValueLost)} />
          <ResultCard label={`Today's K${a.toLocaleString()} will feel like`} value={formatKwacha(result.purchasingPowerRemaining)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Enter the latest annual inflation rate from the Zambia Statistics Agency (ZamStats) — inflation is reported monthly and changes often, so there&apos;s no fixed rate built in here.
      </p>
    </div>
  );
}
