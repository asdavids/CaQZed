"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

function simulatePayoff(balance: number, annualRatePct: number, monthlyPayment: number) {
  const monthlyRate = annualRatePct / 100 / 12;
  let remaining = balance;
  let months = 0;
  let totalInterest = 0;

  if (monthlyPayment <= remaining * monthlyRate) {
    // Payment never covers interest — balance never clears
    return { months: Infinity, totalInterest: Infinity };
  }

  while (remaining > 0 && months < 1200) {
    const interest = remaining * monthlyRate;
    totalInterest += interest;
    remaining = remaining + interest - monthlyPayment;
    months += 1;
  }

  return { months, totalInterest };
}

export function DebtPayoffCalculator() {
  const [balance, setBalance] = useState("20000");
  const [rate, setRate] = useState("25");
  const [payment, setPayment] = useState("1500");

  const b = parseFloat(balance) || 0;
  const r = parseFloat(rate) || 0;
  const p = parseFloat(payment) || 0;

  const result = useMemo(() => simulatePayoff(b, r, p), [b, r, p]);
  const isImpossible = !Number.isFinite(result.months);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Current balance" value={balance} onChange={setBalance} prefix="K" />
        <NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" />
        <NumberField label="Monthly payment" value={payment} onChange={setPayment} prefix="K" />
      </div>

      <div className="mt-5">
        {isImpossible ? (
          <p className="text-[13px] text-brand-gold bg-brand-gold-50 rounded-lg px-3.5 py-2.5">
            This payment doesn&apos;t even cover the monthly interest — your balance would never go down. Increase your monthly payment.
          </p>
        ) : (
          <ResultsGrid>
            <ResultCard label="Time to pay off" value={`${result.months} months`} emphasis />
            <ResultCard label="Total interest paid" value={formatKwacha(result.totalInterest)} />
            <ResultCard label="Total paid" value={formatKwacha(b + result.totalInterest)} />
          </ResultsGrid>
        )}
      </div>
    </div>
  );
}
