"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatNumber, formatPercent } from "@/lib/format";

export function PercentageCalculator() {
  const [x, setX] = useState("20");
  const [y, setY] = useState("150");

  const px = parseFloat(x) || 0;
  const py = parseFloat(y) || 0;

  const result = useMemo(() => {
    const whatIsXPercentOfY = (px / 100) * py;
    const xIsWhatPercentOfY = py !== 0 ? (px / py) * 100 : 0;
    return { whatIsXPercentOfY, xIsWhatPercentOfY };
  }, [px, py]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Value X" value={x} onChange={setX} />
        <NumberField label="Value Y" value={y} onChange={setY} />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label={`${formatNumber(px)}% of ${formatNumber(py)}`} value={formatNumber(result.whatIsXPercentOfY)} emphasis />
          <ResultCard label={`${formatNumber(px)} is what % of ${formatNumber(py)}`} value={formatPercent(result.xIsWhatPercentOfY / 100)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Tip: for a kwacha amount, just treat Y as your kwacha value — e.g. &quot;20% of K150&quot; = {formatKwacha(result.whatIsXPercentOfY)}.
      </p>
    </div>
  );
}
