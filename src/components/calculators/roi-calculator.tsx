"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

export function RoiCalculator() {
  const [initial, setInitial] = useState("10000");
  const [final, setFinal] = useState("13500");
  const [years, setYears] = useState("2");

  const i = parseFloat(initial) || 0;
  const f = parseFloat(final) || 0;
  const y = parseFloat(years) || 0;

  const result = useMemo(() => {
    const gain = f - i;
    const roi = i !== 0 ? gain / i : 0;
    const annualizedRoi = y > 0 && i > 0 && f > 0 ? Math.pow(f / i, 1 / y) - 1 : 0;
    return { gain, roi, annualizedRoi };
  }, [i, f, y]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Initial investment" value={initial} onChange={setInitial} prefix="K" />
        <NumberField label="Final value" value={final} onChange={setFinal} prefix="K" />
        <NumberField label="Holding period" value={years} onChange={setYears} suffix="years" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Total return (ROI)" value={formatPercent(result.roi)} emphasis />
          <ResultCard label="Profit / loss" value={formatKwacha(result.gain)} />
          <ResultCard label="Annualized return" value={formatPercent(result.annualizedRoi)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
