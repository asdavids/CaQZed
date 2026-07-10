"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

export function SchoolFeesCalculator() {
  const [feePerTerm, setFeePerTerm] = useState("3500");
  const [numChildren, setNumChildren] = useState("1");
  const [termsPerYear, setTermsPerYear] = useState("3");
  const [monthsToSave, setMonthsToSave] = useState("3");
  const [currentSavings, setCurrentSavings] = useState("0");

  const fee = parseFloat(feePerTerm) || 0;
  const children = parseFloat(numChildren) || 1;
  const terms = parseFloat(termsPerYear) || 3;
  const months = parseFloat(monthsToSave) || 1;
  const current = parseFloat(currentSavings) || 0;

  const result = useMemo(() => {
    const totalPerTerm = fee * children;
    const totalPerYear = totalPerTerm * terms;
    const stillNeeded = Math.max(0, totalPerTerm - current);
    const monthlySavings = months > 0 ? stillNeeded / months : 0;
    return { totalPerTerm, totalPerYear, monthlySavings, stillNeeded };
  }, [fee, children, terms, months, current]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Fee per term (per child)" value={feePerTerm} onChange={setFeePerTerm} prefix="K" />
        <NumberField label="Number of children" value={numChildren} onChange={setNumChildren} />
        <NumberField label="Terms per year" value={termsPerYear} onChange={setTermsPerYear} />
        <NumberField label="Months to save before next term" value={monthsToSave} onChange={setMonthsToSave} suffix="months" />
        <NumberField label="Already saved" value={currentSavings} onChange={setCurrentSavings} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Monthly savings needed" value={formatKwacha(result.monthlySavings)} emphasis />
          <ResultCard label="Total due next term" value={formatKwacha(result.totalPerTerm)} />
          <ResultCard label="Estimated annual fees" value={formatKwacha(result.totalPerYear)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
