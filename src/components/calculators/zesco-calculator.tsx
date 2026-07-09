"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateZescoBill } from "@/lib/rates";
import { formatKwacha, formatNumber } from "@/lib/format";

export function ZescoCalculator() {
  const [units, setUnits] = useState("250");
  const parsed = parseFloat(units) || 0;
  const result = useMemo(() => calculateZescoBill(parsed), [parsed]);
  const avgRate = parsed > 0 ? result.total / parsed : 0;

  return (
    <div>
      <NumberField label="Units (kWh) to buy" value={units} onChange={setUnits} suffix="kWh" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Estimated cost" value={formatKwacha(result.total)} emphasis />
          <ResultCard label="Average rate per unit" value={`K${formatNumber(avgRate)}`} />
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
                  <th className="text-right font-medium px-3.5 py-2">Rate/unit</th>
                  <th className="text-right font-medium px-3.5 py-2">Cost</th>
                </tr>
              </thead>
              <tbody>
                {result.breakdown.map((b) => (
                  <tr key={b.band} className="border-t border-border">
                    <td className="px-3.5 py-2">{b.band}</td>
                    <td className="px-3.5 py-2 text-right tabular-nums">K{formatNumber(b.rate)}</td>
                    <td className="px-3.5 py-2 text-right tabular-nums">{formatKwacha(b.cost)}</td>
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
