"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateLeavePay, STATUTORY_ANNUAL_LEAVE_DAYS } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function LeavePayCalculator() {
  const [basicPay, setBasicPay] = useState("8000");
  const [allowances, setAllowances] = useState("1000");
  const [leaveDays, setLeaveDays] = useState(String(STATUTORY_ANNUAL_LEAVE_DAYS));

  const basic = parseFloat(basicPay) || 0;
  const allow = parseFloat(allowances) || 0;
  const days = parseFloat(leaveDays) || 0;
  const fullPay = basic + allow;

  const leaveValue = useMemo(() => calculateLeavePay(fullPay, days), [fullPay, days]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Monthly basic pay" value={basicPay} onChange={setBasicPay} prefix="K" />
        <NumberField label="Monthly allowances" value={allowances} onChange={setAllowances} prefix="K" />
        <NumberField label="Accrued leave days" value={leaveDays} onChange={setLeaveDays} suffix="days" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Leave pay" value={formatKwacha(leaveValue)} emphasis />
          <ResultCard label="Full monthly pay used" value={formatKwacha(fullPay)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Uses the Employment Code Act Fifth Schedule formula: (Full Pay × Leave Days) ÷ 26. The statutory minimum is 24 days per year (2 days per month), after 12 months of continuous service.
      </p>
    </div>
  );
}
