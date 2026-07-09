"use client";

import { useMemo, useState } from "react";
import { ResultCard, ResultsGrid } from "@/components/calc-ui";

function diffDetailed(from: Date, to: Date) {
  if (to < from) return { years: 0, months: 0, days: 0, totalDays: 0 };
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const totalDays = Math.floor((to.getTime() - from.getTime()) / 86_400_000);
  return { years, months, days, totalDays };
}

export function AgeCalculator() {
  const today = new Date().toISOString().slice(0, 10);
  const [dob, setDob] = useState("2000-01-01");
  const [asOf, setAsOf] = useState(today);

  const result = useMemo(() => {
    const from = new Date(dob);
    const to = new Date(asOf);
    if (isNaN(from.getTime()) || isNaN(to.getTime())) return null;
    return diffDetailed(from, to);
  }, [dob, asOf]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="block text-[13px] font-medium text-foreground-muted mb-1.5">
            Date of birth
          </span>
          <input
            type="date"
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[15px] outline-none focus:border-brand-green"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="block text-[13px] font-medium text-foreground-muted mb-1.5">
            Calculate age as of
          </span>
          <input
            type="date"
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[15px] outline-none focus:border-brand-green"
            value={asOf}
            onChange={(e) => setAsOf(e.target.value)}
          />
        </label>
      </div>

      {result && (
        <div className="mt-5">
          <ResultsGrid>
            <ResultCard label="Age" value={`${result.years} years, ${result.months} months, ${result.days} days`} emphasis />
            <ResultCard label="Total days lived" value={result.totalDays.toLocaleString()} />
          </ResultsGrid>
        </div>
      )}
    </div>
  );
}
