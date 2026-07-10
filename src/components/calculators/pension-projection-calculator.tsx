"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateNAPSA } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function PensionProjectionCalculator() {
  const [salary, setSalary] = useState("15000");
  const [years, setYears] = useState("20");
  const [salaryGrowth, setSalaryGrowth] = useState("5");

  const s = parseFloat(salary) || 0;
  const y = parseFloat(years) || 0;
  const growth = parseFloat(salaryGrowth) || 0;

  const result = useMemo(() => {
    let currentSalary = s;
    let totalContributions = 0;
    for (let year = 0; year < y; year++) {
      const monthlyContribution = calculateNAPSA(currentSalary) * 2; // employee + employer
      totalContributions += monthlyContribution * 12;
      currentSalary *= 1 + growth / 100;
    }
    return { totalContributions, finalSalary: currentSalary };
  }, [s, y, growth]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Current monthly salary" value={salary} onChange={setSalary} prefix="K" />
        <NumberField label="Years contributing" value={years} onChange={setYears} suffix="years" />
        <NumberField label="Expected annual salary growth" value={salaryGrowth} onChange={setSalaryGrowth} suffix="%" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Total NAPSA contributions (you + employer)" value={formatKwacha(result.totalContributions)} emphasis />
          <ResultCard label="Projected final salary" value={formatKwacha(result.finalSalary)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This projects total contributions paid into your NAPSA pension over time — it is not your actual pension payout. NAPSA calculates your eventual benefit using its own formula based on your contribution history, which this calculator does not attempt to replicate. Contact NAPSA directly for a benefit estimate.
      </p>
    </div>
  );
}
