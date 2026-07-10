"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { TBILL_WITHHOLDING_TAX_RATE } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function TreasuryBillsCalculator() {
  const [faceValue, setFaceValue] = useState("10000");
  const [yieldRate, setYieldRate] = useState("11.5");
  const [tenor, setTenor] = useState("91");

  const face = parseFloat(faceValue) || 0;
  const y = parseFloat(yieldRate) || 0;
  const days = parseFloat(tenor) || 0;

  const result = useMemo(() => {
    const grossReturn = face * (y / 100) * (days / 365);
    const withholdingTax = grossReturn * TBILL_WITHHOLDING_TAX_RATE;
    const netReturn = grossReturn - withholdingTax;
    const purchasePrice = face - grossReturn;
    return { grossReturn, withholdingTax, netReturn, purchasePrice };
  }, [face, y, days]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Face value (amount at maturity)" value={faceValue} onChange={setFaceValue} prefix="K" />
        <NumberField label="Current yield rate" value={yieldRate} onChange={setYieldRate} suffix="%" />
        <NumberField label="Tenor" value={tenor} onChange={setTenor} suffix="days" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Net return (after tax)" value={formatKwacha(result.netReturn)} emphasis />
          <ResultCard label="Amount you pay today" value={formatKwacha(result.purchasePrice)} />
          <ResultCard label="Gross return" value={formatKwacha(result.grossReturn)} />
          <ResultCard label="Withholding tax (15%)" value={formatKwacha(result.withholdingTax)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Enter the yield from the latest BoZ auction — Treasury Bill yields are set at auction roughly every two weeks, so there&apos;s no single fixed rate to hardcode. Check the current 91/182/273/364-day yields on the Bank of Zambia website before investing.
      </p>
    </div>
  );
}
