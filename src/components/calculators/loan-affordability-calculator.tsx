"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

export function LoanAffordabilityCalculator() {
  const [income, setIncome] = useState("15000");
  const [existingDebt, setExistingDebt] = useState("1000");
  const [dtiLimit, setDtiLimit] = useState("40");
  const [rate, setRate] = useState("25");
  const [years, setYears] = useState("5");

  const inc = parseFloat(income) || 0;
  const debt = parseFloat(existingDebt) || 0;
  const dti = parseFloat(dtiLimit) || 0;
  const r = parseFloat(rate) || 0;
  const y = parseFloat(years) || 0;

  const result = useMemo(() => {
    const maxTotalDebtPayment = inc * (dti / 100);
    const affordableMonthlyPayment = Math.max(0, maxTotalDebtPayment - debt);
    const months = y * 12;
    const monthlyRate = r / 100 / 12;
    let maxLoan = 0;
    if (affordableMonthlyPayment > 0 && months > 0) {
      maxLoan =
        monthlyRate === 0
          ? affordableMonthlyPayment * months
          : (affordableMonthlyPayment * (Math.pow(1 + monthlyRate, months) - 1)) /
            (monthlyRate * Math.pow(1 + monthlyRate, months));
    }
    return { affordableMonthlyPayment, maxLoan };
  }, [inc, debt, dti, r, y]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Monthly income" value={income} onChange={setIncome} prefix="K" />
        <NumberField label="Existing monthly debt payments" value={existingDebt} onChange={setExistingDebt} prefix="K" />
        <NumberField label="Max debt-to-income ratio" value={dtiLimit} onChange={setDtiLimit} suffix="%" />
        <NumberField label="Loan interest rate" value={rate} onChange={setRate} suffix="%" />
        <NumberField label="Loan term" value={years} onChange={setYears} suffix="years" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Maximum loan amount" value={formatKwacha(result.maxLoan)} emphasis />
          <ResultCard label="Affordable monthly payment" value={formatKwacha(result.affordableMonthlyPayment)} />
          <ResultCard label="Debt-to-income limit used" value={formatPercent(dti / 100)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
