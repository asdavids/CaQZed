"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateNHIMA } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function NhimaCalculator() {
  const [salary, setSalary] = useState("15000");
  const parsed = parseFloat(salary) || 0;
  const employee = useMemo(() => calculateNHIMA(parsed), [parsed]);

  return (
    <div>
      <NumberField label="Monthly basic salary" value={salary} onChange={setSalary} prefix="K" />
      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Your contribution (1%)" value={formatKwacha(employee)} emphasis />
          <ResultCard label="Employer contribution (1%)" value={formatKwacha(employee)} />
          <ResultCard label="Total to NHIMA" value={formatKwacha(employee * 2)} />
          <ResultCard label="Monthly salary" value={formatKwacha(parsed)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
