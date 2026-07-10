"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculatePAYE } from "@/lib/rates";
import { formatKwacha, formatPercent } from "@/lib/format";

export function BonusTaxCalculator() {
  const [salary, setSalary] = useState("15000");
  const [bonus, setBonus] = useState("5000");

  const s = parseFloat(salary) || 0;
  const b = parseFloat(bonus) || 0;

  const result = useMemo(() => {
    const payeWithoutBonus = calculatePAYE(s).tax;
    const payeWithBonus = calculatePAYE(s + b).tax;
    const extraTax = payeWithBonus - payeWithoutBonus;
    const bonusAfterTax = b - extraTax;
    const marginalRate = b > 0 ? extraTax / b : 0;
    return { extraTax, bonusAfterTax, marginalRate };
  }, [s, b]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Normal monthly salary" value={salary} onChange={setSalary} prefix="K" />
        <NumberField label="Bonus amount" value={bonus} onChange={setBonus} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Bonus after tax" value={formatKwacha(result.bonusAfterTax)} emphasis />
          <ResultCard label="Extra PAYE from the bonus" value={formatKwacha(result.extraTax)} />
          <ResultCard label="Effective rate on the bonus" value={formatPercent(result.marginalRate)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Bonuses are added to your normal salary for the month they're paid and taxed through the same PAYE bands — this shows how much of the bonus that pushes into a higher band.
      </p>
    </div>
  );
}
