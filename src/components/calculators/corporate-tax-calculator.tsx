"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import { CORPORATE_TAX_RATES } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

type Sector = keyof typeof CORPORATE_TAX_RATES;

export function CorporateTaxCalculator() {
  const [profit, setProfit] = useState("500000");
  const [sector, setSector] = useState<Sector>("standard");

  const p = parseFloat(profit) || 0;
  const rate = CORPORATE_TAX_RATES[sector].rate;

  const result = useMemo(() => {
    const tax = p * rate;
    return { tax, afterTax: p - tax };
  }, [p, rate]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Taxable business profit (annual)" value={profit} onChange={setProfit} prefix="K" />
        <SelectField
          label="Sector"
          value={sector}
          onChange={(v) => setSector(v as Sector)}
          options={Object.entries(CORPORATE_TAX_RATES).map(([key, v]) => ({
            value: key,
            label: `${v.label} (${(v.rate * 100).toFixed(0)}%)`,
          }))}
        />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Corporate income tax" value={formatKwacha(result.tax)} emphasis />
          <ResultCard label="Profit after tax" value={formatKwacha(result.afterTax)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This covers the three most common sector rates. Mining royalties, PPP project rates, and other special regimes have their own separate rules — confirm with ZRA if your business falls outside these categories.
      </p>
    </div>
  );
}
