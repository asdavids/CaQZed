"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatNumber } from "@/lib/format";

export function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState("15000");
  const [price, setPrice] = useState("120");
  const [variableCost, setVariableCost] = useState("70");

  const fc = parseFloat(fixedCosts) || 0;
  const p = parseFloat(price) || 0;
  const vc = parseFloat(variableCost) || 0;

  const result = useMemo(() => {
    const contributionMargin = p - vc;
    const breakEvenUnits = contributionMargin > 0 ? fc / contributionMargin : 0;
    const breakEvenRevenue = breakEvenUnits * p;
    return { contributionMargin, breakEvenUnits, breakEvenRevenue };
  }, [fc, p, vc]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Fixed costs (monthly)" value={fixedCosts} onChange={setFixedCosts} prefix="K" />
        <NumberField label="Selling price per unit" value={price} onChange={setPrice} prefix="K" />
        <NumberField label="Variable cost per unit" value={variableCost} onChange={setVariableCost} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Break-even units" value={formatNumber(result.breakEvenUnits)} emphasis />
          <ResultCard label="Break-even revenue" value={formatKwacha(result.breakEvenRevenue)} />
          <ResultCard label="Contribution margin / unit" value={formatKwacha(result.contributionMargin)} />
        </ResultsGrid>
      </div>

      {result.contributionMargin <= 0 && (
        <p className="mt-4 text-[13px] text-brand-gold bg-brand-gold-50 rounded-lg px-3.5 py-2.5">
          Your selling price is at or below your variable cost — you can&apos;t break even at this price, no matter how many units you sell.
        </p>
      )}
    </div>
  );
}
