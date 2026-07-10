"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatNumber } from "@/lib/format";

export function PaintCalculator() {
  const [area, setArea] = useState("60");
  const [coats, setCoats] = useState("2");
  const [coverage, setCoverage] = useState("10");
  const [canSize, setCanSize] = useState("20");

  const a = parseFloat(area) || 0;
  const c = parseFloat(coats) || 1;
  const cov = parseFloat(coverage) || 10;
  const can = parseFloat(canSize) || 20;

  const result = useMemo(() => {
    const litresNeeded = (a * c) / cov;
    const cansNeeded = can > 0 ? litresNeeded / can : 0;
    return { litresNeeded, cansNeeded };
  }, [a, c, cov, can]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Wall area to paint" value={area} onChange={setArea} suffix="m²" />
        <NumberField label="Number of coats" value={coats} onChange={setCoats} />
        <NumberField label="Coverage per litre" value={coverage} onChange={setCoverage} suffix="m²/L" />
        <NumberField label="Can size" value={canSize} onChange={setCanSize} suffix="L" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Paint needed" value={`${formatNumber(result.litresNeeded)} L`} emphasis />
          <ResultCard label="Cans needed" value={`${Math.ceil(result.cansNeeded)} × ${can}L`} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Coverage varies by paint brand and wall texture — check the coverage figure on your specific paint tin and adjust above for a more accurate estimate.
      </p>
    </div>
  );
}
