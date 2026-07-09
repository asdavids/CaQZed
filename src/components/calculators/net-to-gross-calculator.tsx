"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateNAPSA, calculateNHIMA, calculatePAYE, solveGrossForNet } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function NetToGrossCalculator() {
  const [net, setNet] = useState("10000");
  const targetNet = parseFloat(net) || 0;

  const result = useMemo(() => {
    const gross = solveGrossForNet(targetNet);
    const napsa = calculateNAPSA(gross);
    const nhima = calculateNHIMA(gross);
    const { tax: paye } = calculatePAYE(gross);
    return { gross, napsa, nhima, paye };
  }, [targetNet]);

  return (
    <div>
      <NumberField label="Desired net (take-home) pay" value={net} onChange={setNet} prefix="K" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Required gross salary" value={formatKwacha(result.gross)} emphasis />
          <ResultCard label="PAYE" value={formatKwacha(result.paye)} />
          <ResultCard label="NAPSA" value={formatKwacha(result.napsa)} />
          <ResultCard label="NHIMA" value={formatKwacha(result.nhima)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
