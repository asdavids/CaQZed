"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { STATUTORY_GRATUITY_RATE } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function TerminalBenefitsCalculator() {
  const [basicPay, setBasicPay] = useState("8000");
  const [months, setMonths] = useState("36");
  const [rate, setRate] = useState(String(STATUTORY_GRATUITY_RATE * 100));

  const basic = parseFloat(basicPay) || 0;
  const m = parseFloat(months) || 0;
  const r = parseFloat(rate) || 0;

  const result = useMemo(() => {
    const totalBasicEarned = basic * m;
    const gratuity = totalBasicEarned * (r / 100);
    return { totalBasicEarned, gratuity };
  }, [basic, m, r]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Monthly basic pay" value={basicPay} onChange={setBasicPay} prefix="K" />
        <NumberField label="Months worked on contract" value={months} onChange={setMonths} suffix="months" />
        <NumberField label="Gratuity rate" value={rate} onChange={setRate} suffix="%" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Gratuity" value={formatKwacha(result.gratuity)} emphasis />
          <ResultCard label="Total basic pay earned" value={formatKwacha(result.totalBasicEarned)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Gratuity applies to fixed-term contracts exceeding 12 months, calculated on basic pay only (not allowances). Sources disagree on whether the statutory 25% rate is tax-favoured or fully taxed as normal income — confirm the tax treatment with ZRA or your employer before relying on a take-home figure.
      </p>
    </div>
  );
}
