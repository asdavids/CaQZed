"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { TURNOVER_TAX_RATE, TURNOVER_TAX_THRESHOLD_ANNUAL } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function TurnoverTaxCalculator() {
  const [monthlyTurnover, setMonthlyTurnover] = useState("30000");
  const parsed = parseFloat(monthlyTurnover) || 0;
  const annualTurnover = parsed * 12;

  const result = useMemo(() => {
    const eligible = annualTurnover <= TURNOVER_TAX_THRESHOLD_ANNUAL;
    const monthlyTax = parsed * TURNOVER_TAX_RATE;
    return { eligible, monthlyTax, annualTax: monthlyTax * 12 };
  }, [parsed, annualTurnover]);

  return (
    <div>
      <NumberField label="Average monthly turnover" value={monthlyTurnover} onChange={setMonthlyTurnover} prefix="K" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Turnover tax (5%) / month" value={formatKwacha(result.monthlyTax)} emphasis />
          <ResultCard label="Estimated annual tax" value={formatKwacha(result.annualTax)} />
          <ResultCard label="Projected annual turnover" value={formatKwacha(annualTurnover)} />
        </ResultsGrid>
      </div>

      {!result.eligible && (
        <p className="mt-4 text-[13px] text-brand-gold bg-brand-gold-50 rounded-lg px-3.5 py-2.5">
          Your projected annual turnover is above the {formatKwacha(TURNOVER_TAX_THRESHOLD_ANNUAL)} threshold — you likely don&apos;t qualify for turnover tax and should be on standard corporate tax instead. Confirm with ZRA.
        </p>
      )}
    </div>
  );
}
