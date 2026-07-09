"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculatePAYE } from "@/lib/rates";
import { formatKwacha, formatPercent } from "@/lib/format";

export function PayeCalculator() {
  const [income, setIncome] = useState("15000");

  const parsed = parseFloat(income) || 0;
  const result = useMemo(() => calculatePAYE(parsed), [parsed]);
  const effectiveRate = parsed > 0 ? result.tax / parsed : 0;

  return (
    <div>
      <NumberField
        label="Monthly taxable income"
        value={income}
        onChange={setIncome}
        prefix="K"
      />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="PAYE due" value={formatKwacha(result.tax)} emphasis />
          <ResultCard
            label="Income after PAYE"
            value={formatKwacha(parsed - result.tax)}
          />
          <ResultCard label="Effective tax rate" value={formatPercent(effectiveRate)} />
          <ResultCard label="Monthly income" value={formatKwacha(parsed)} />
        </ResultsGrid>
      </div>

      {result.breakdown.length > 0 && (
        <div className="mt-6">
          <h3 className="text-[13px] font-semibold text-foreground-muted mb-2">
            Band-by-band breakdown
          </h3>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-[13px]">
              <thead className="bg-surface-muted text-foreground-muted">
                <tr>
                  <th className="text-left font-medium px-3.5 py-2">Band</th>
                  <th className="text-left font-medium px-3.5 py-2">Rate</th>
                  <th className="text-right font-medium px-3.5 py-2">Tax</th>
                </tr>
              </thead>
              <tbody>
                {result.breakdown.map((b) => (
                  <tr key={b.band} className="border-t border-border">
                    <td className="px-3.5 py-2">{b.band}</td>
                    <td className="px-3.5 py-2">{formatPercent(b.rate)}</td>
                    <td className="px-3.5 py-2 text-right tabular-nums">
                      {formatKwacha(b.tax)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
