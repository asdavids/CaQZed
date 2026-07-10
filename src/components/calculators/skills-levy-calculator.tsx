"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { SKILLS_LEVY_RATE } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function SkillsLevyCalculator() {
  const [payroll, setPayroll] = useState("100000");
  const p = parseFloat(payroll) || 0;

  const levy = useMemo(() => p * SKILLS_LEVY_RATE, [p]);

  return (
    <div>
      <NumberField label="Total monthly payroll" value={payroll} onChange={setPayroll} prefix="K" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Skills Development Levy (0.5%)" value={formatKwacha(levy)} emphasis />
          <ResultCard label="Annual levy" value={formatKwacha(levy * 12)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This is an employer-only levy — it&apos;s calculated on your total payroll and does not get deducted from any individual employee&apos;s pay.
      </p>
    </div>
  );
}
