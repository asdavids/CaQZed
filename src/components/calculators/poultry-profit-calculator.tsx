"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

export function PoultryProfitCalculator() {
  const [numBirds, setNumBirds] = useState("100");
  const [chickCost, setChickCost] = useState("15");
  const [feedCostPerBird, setFeedCostPerBird] = useState("45");
  const [otherCosts, setOtherCosts] = useState("500");
  const [mortalityPct, setMortalityPct] = useState("5");
  const [sellingPrice, setSellingPrice] = useState("100");

  const n = parseFloat(numBirds) || 0;
  const chick = parseFloat(chickCost) || 0;
  const feed = parseFloat(feedCostPerBird) || 0;
  const other = parseFloat(otherCosts) || 0;
  const mortality = parseFloat(mortalityPct) || 0;
  const price = parseFloat(sellingPrice) || 0;

  const result = useMemo(() => {
    const survivingBirds = n * (1 - mortality / 100);
    const totalCost = n * chick + n * feed + other;
    const totalRevenue = survivingBirds * price;
    const profit = totalRevenue - totalCost;
    const profitPerBird = survivingBirds > 0 ? profit / survivingBirds : 0;
    return { survivingBirds, totalCost, totalRevenue, profit, profitPerBird };
  }, [n, chick, feed, other, mortality, price]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Number of birds (day-old)" value={numBirds} onChange={setNumBirds} />
        <NumberField label="Cost per chick" value={chickCost} onChange={setChickCost} prefix="K" />
        <NumberField label="Feed cost per bird" value={feedCostPerBird} onChange={setFeedCostPerBird} prefix="K" />
        <NumberField label="Other costs (vaccines, litter, etc.)" value={otherCosts} onChange={setOtherCosts} prefix="K" />
        <NumberField label="Expected mortality" value={mortalityPct} onChange={setMortalityPct} suffix="%" />
        <NumberField label="Selling price per bird" value={sellingPrice} onChange={setSellingPrice} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Expected profit" value={formatKwacha(result.profit)} emphasis />
          <ResultCard label="Total revenue" value={formatKwacha(result.totalRevenue)} />
          <ResultCard label="Total cost" value={formatKwacha(result.totalCost)} />
          <ResultCard label="Surviving birds" value={`${Math.round(result.survivingBirds)}`} />
          <ResultCard label="Profit per bird" value={formatKwacha(result.profitPerBird)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
