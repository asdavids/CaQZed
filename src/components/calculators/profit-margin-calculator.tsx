"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

export function ProfitMarginCalculator() {
  const [cost, setCost] = useState("70");
  const [sellingPrice, setSellingPrice] = useState("120");

  const c = parseFloat(cost) || 0;
  const s = parseFloat(sellingPrice) || 0;

  const result = useMemo(() => {
    const profit = s - c;
    const margin = s !== 0 ? profit / s : 0;
    const markup = c !== 0 ? profit / c : 0;
    return { profit, margin, markup };
  }, [c, s]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Cost price" value={cost} onChange={setCost} prefix="K" />
        <NumberField label="Selling price" value={sellingPrice} onChange={setSellingPrice} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Profit margin" value={formatPercent(result.margin)} emphasis />
          <ResultCard label="Markup" value={formatPercent(result.markup)} />
          <ResultCard label="Profit per unit" value={formatKwacha(result.profit)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Margin is profit as a % of selling price. Markup is profit as a % of cost — they answer different questions and are never the same number.
      </p>
    </div>
  );
}
