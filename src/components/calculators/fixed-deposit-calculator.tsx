"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

export function FixedDepositCalculator() {
  const [amount, setAmount] = useState("20000");
  const [rate, setRate] = useState("10");
  const [months, setMonths] = useState("12");

  const p = parseFloat(amount) || 0;
  const r = parseFloat(rate) || 0;
  const m = parseFloat(months) || 0;

  const result = useMemo(() => {
    const interest = p * (r / 100) * (m / 12);
    return { interest, maturity: p + interest };
  }, [p, r, m]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Deposit amount" value={amount} onChange={setAmount} prefix="K" />
        <NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" />
        <NumberField label="Term" value={months} onChange={setMonths} suffix="months" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Maturity value" value={formatKwacha(result.maturity)} emphasis />
          <ResultCard label="Interest earned" value={formatKwacha(result.interest)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
