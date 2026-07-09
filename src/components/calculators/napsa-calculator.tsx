"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateNAPSA, NAPSA_MONTHLY_CAP } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function NapsaCalculator() {
  const [salary, setSalary] = useState("15000");
  const parsed = parseFloat(salary) || 0;

  const employeeContribution = useMemo(() => calculateNAPSA(parsed), [parsed]);
  const employerContribution = employeeContribution; // matched 1:1
  const isCapped = parsed * 0.05 > NAPSA_MONTHLY_CAP;

  return (
    <div>
      <NumberField label="Monthly gross salary" value={salary} onChange={setSalary} prefix="K" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Your contribution (5%)" value={formatKwacha(employeeContribution)} emphasis />
          <ResultCard label="Employer contribution (5%)" value={formatKwacha(employerContribution)} />
          <ResultCard label="Total to NAPSA" value={formatKwacha(employeeContribution + employerContribution)} />
          <ResultCard label="Monthly cap" value={formatKwacha(NAPSA_MONTHLY_CAP)} />
        </ResultsGrid>
      </div>

      {isCapped && (
        <p className="mt-4 text-[13px] text-brand-green bg-brand-green-50 rounded-lg px-3.5 py-2.5">
          Your salary is above the NAPSA insurable ceiling, so your contribution is capped at {formatKwacha(NAPSA_MONTHLY_CAP)}.
        </p>
      )}
    </div>
  );
}
