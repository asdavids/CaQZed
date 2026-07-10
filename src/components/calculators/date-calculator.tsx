"use client";

import { useMemo, useState } from "react";
import { ResultCard, ResultsGrid } from "@/components/calc-ui";

export function DateCalculator() {
  const today = new Date().toISOString().slice(0, 10);
  const [start, setStart] = useState(today);
  const [end, setEnd] = useState(today);

  const result = useMemo(() => {
    const s = new Date(start);
    const e = new Date(end);
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return null;
    const diffMs = e.getTime() - s.getTime();
    const totalDays = Math.round(diffMs / 86_400_000);
    const weeks = Math.floor(Math.abs(totalDays) / 7);
    const remDays = Math.abs(totalDays) % 7;
    return { totalDays, weeks, remDays };
  }, [start, end]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="block text-[13px] font-medium text-foreground-muted mb-1.5">Start date</span>
          <input
            type="date"
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[15px] outline-none focus:border-brand-green"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="block text-[13px] font-medium text-foreground-muted mb-1.5">End date</span>
          <input
            type="date"
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[15px] outline-none focus:border-brand-green"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </label>
      </div>

      {result && (
        <div className="mt-5">
          <ResultsGrid>
            <ResultCard label="Total days" value={`${result.totalDays}`} emphasis />
            <ResultCard label="Weeks + days" value={`${result.weeks}w ${result.remDays}d`} />
          </ResultsGrid>
        </div>
      )}
    </div>
  );
}
