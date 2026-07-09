"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import { VAT_RATE } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function VatCalculator() {
  const [mode, setMode] = useState("exclusive");
  const [amount, setAmount] = useState("1000");
  const parsed = parseFloat(amount) || 0;

  const { net, vat, gross } = useMemo(() => {
    if (mode === "exclusive") {
      const vatAmount = parsed * VAT_RATE;
      return { net: parsed, vat: vatAmount, gross: parsed + vatAmount };
    }
    const netAmount = parsed / (1 + VAT_RATE);
    return { net: netAmount, vat: parsed - netAmount, gross: parsed };
  }, [parsed, mode]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="I have"
          value={mode}
          onChange={setMode}
          options={[
            { value: "exclusive", label: "A price without VAT (add VAT)" },
            { value: "inclusive", label: "A price with VAT (remove VAT)" },
          ]}
        />
        <NumberField label="Amount" value={amount} onChange={setAmount} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="VAT (16%)" value={formatKwacha(vat)} emphasis />
          <ResultCard label="Net amount (excl. VAT)" value={formatKwacha(net)} />
          <ResultCard label="Gross amount (incl. VAT)" value={formatKwacha(gross)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
