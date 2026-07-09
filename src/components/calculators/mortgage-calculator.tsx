"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

function calculateMortgage(price: number, downPct: number, annualRatePct: number, years: number) {
  const down = price * (downPct / 100);
  const principal = Math.max(0, price - down);
  const months = years * 12;
  const monthlyRate = annualRatePct / 100 / 12;

  if (principal <= 0 || months <= 0) {
    return { monthly: 0, totalInterest: 0, totalPayment: 0, principal, down };
  }
  if (monthlyRate === 0) {
    const monthly = principal / months;
    return { monthly, totalInterest: 0, totalPayment: principal, principal, down };
  }
  const monthly =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = monthly * months;
  return { monthly, totalInterest: totalPayment - principal, totalPayment, principal, down };
}

export function MortgageCalculator() {
  const [price, setPrice] = useState("800000");
  const [downPct, setDownPct] = useState("20");
  const [rate, setRate] = useState("22");
  const [years, setYears] = useState("20");

  const p = parseFloat(price) || 0;
  const d = parseFloat(downPct) || 0;
  const r = parseFloat(rate) || 0;
  const y = parseFloat(years) || 0;

  const result = useMemo(() => calculateMortgage(p, d, r, y), [p, d, r, y]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Property price" value={price} onChange={setPrice} prefix="K" />
        <NumberField label="Down payment" value={downPct} onChange={setDownPct} suffix="%" />
        <NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" />
        <NumberField label="Loan term" value={years} onChange={setYears} suffix="years" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Monthly repayment" value={formatKwacha(result.monthly)} emphasis />
          <ResultCard label="Loan amount" value={formatKwacha(result.principal)} />
          <ResultCard label="Down payment" value={formatKwacha(result.down)} />
          <ResultCard label="Total interest" value={formatKwacha(result.totalInterest)} />
          <ResultCard label="Total repayment" value={formatKwacha(result.totalPayment)} />
          <ResultCard label="Down payment %" value={formatPercent(d / 100)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
