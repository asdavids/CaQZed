"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateNAPSA, calculateNHIMA, calculatePAYE } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function GrossToNetCalculator() {
  const [gross, setGross] = useState("15000");
  const parsed = parseFloat(gross) || 0;

  const result = useMemo(() => {
    const napsa = calculateNAPSA(parsed);
    const nhima = calculateNHIMA(parsed);
    const { tax: paye } = calculatePAYE(parsed);
    const net = parsed - napsa - nhima - paye;
    return { napsa, nhima, paye, net };
  }, [parsed]);

  return (
    <div>
      <NumberField label="Monthly gross salary" value={gross} onChange={setGross} prefix="K" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Net take-home pay" value={formatKwacha(result.net)} emphasis />
          <ResultCard label="Gross salary" value={formatKwacha(parsed)} />
          <ResultCard label="PAYE" value={formatKwacha(result.paye)} />
          <ResultCard label="NAPSA" value={formatKwacha(result.napsa)} />
          <ResultCard label="NHIMA" value={formatKwacha(result.nhima)} />
          <ResultCard label="Total deductions" value={formatKwacha(result.paye + result.napsa + result.nhima)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
