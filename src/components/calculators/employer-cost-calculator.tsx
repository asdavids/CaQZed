"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateEmployerCost } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function EmployerCostCalculator() {
  const [salary, setSalary] = useState("15000");
  const s = parseFloat(salary) || 0;

  const result = useMemo(() => calculateEmployerCost(s), [s]);

  return (
    <div>
      <NumberField label="Employee's monthly gross salary" value={salary} onChange={setSalary} prefix="K" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Total monthly cost to employer" value={formatKwacha(result.totalCost)} emphasis />
          <ResultCard label="Gross salary" value={formatKwacha(s)} />
          <ResultCard label="NAPSA (employer 5%)" value={formatKwacha(result.napsaEmployer)} />
          <ResultCard label="NHIMA (employer 1%)" value={formatKwacha(result.nhimaEmployer)} />
          <ResultCard label="Skills Development Levy (0.5%)" value={formatKwacha(result.skillsLevy)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This covers statutory on-costs only. It doesn&apos;t include benefits like housing assistance, medical cover, or leave pay accrual, which the Employment Code Act also requires employers to provide.
      </p>
    </div>
  );
}
