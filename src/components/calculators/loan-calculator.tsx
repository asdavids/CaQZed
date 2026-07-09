"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

function calculateEMI(principal: number, annualRatePct: number, months: number) {
  if (principal <= 0 || months <= 0) return { emi: 0, totalInterest: 0, totalPayment: 0 };
  const monthlyRate = annualRatePct / 100 / 12;
  if (monthlyRate === 0) {
    const emi = principal / months;
    return { emi, totalInterest: 0, totalPayment: principal };
  }
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  return { emi, totalInterest: totalPayment - principal, totalPayment };
}

export function LoanCalculator() {
  const [principal, setPrincipal] = useState("50000");
  const [rate, setRate] = useState("25");
  const [term, setTerm] = useState("24");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) || 0;
  const t = parseFloat(term) || 0;

  const { emi, totalInterest, totalPayment } = useMemo(
    () => calculateEMI(p, r, t),
    [p, r, t]
  );

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Loan amount" value={principal} onChange={setPrincipal} prefix="K" />
        <NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" />
        <NumberField label="Loan term" value={term} onChange={setTerm} suffix="months" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Monthly instalment" value={formatKwacha(emi)} emphasis />
          <ResultCard label="Total interest" value={formatKwacha(totalInterest)} />
          <ResultCard label="Total repayment" value={formatKwacha(totalPayment)} />
          <ResultCard label="Loan amount" value={formatKwacha(p)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
