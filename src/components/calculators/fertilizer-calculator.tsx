"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatNumber } from "@/lib/format";

export function FertilizerCalculator() {
  const [fieldSize, setFieldSize] = useState("2");
  const [rate, setRate] = useState("200");
  const [bagSize, setBagSize] = useState("50");

  const size = parseFloat(fieldSize) || 0;
  const r = parseFloat(rate) || 0;
  const bag = parseFloat(bagSize) || 50;

  const result = useMemo(() => {
    const totalKg = size * r;
    const bags = bag > 0 ? totalKg / bag : 0;
    return { totalKg, bags };
  }, [size, r, bag]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Field size" value={fieldSize} onChange={setFieldSize} suffix="hectares" />
        <NumberField label="Application rate" value={rate} onChange={setRate} suffix="kg/ha" />
        <NumberField label="Bag size" value={bagSize} onChange={setBagSize} suffix="kg" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Total fertilizer needed" value={`${formatNumber(result.totalKg)} kg`} emphasis />
          <ResultCard label="Bags needed" value={`${Math.ceil(result.bags)} bags`} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Application rates vary widely by crop, soil type and fertilizer formulation (e.g. Compound D, Urea) — use the rate recommended by your agricultural extension officer or soil test for best results.
      </p>
    </div>
  );
}
