"use client";

import { useMemo, useState } from "react";
import { SelectField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { VISA_FEES, PERMIT_FEES_PRIVATE, PERMIT_FEES_NGO } from "@/lib/visa-permit-rates";
import { formatNumber } from "@/lib/format";

const GROUPS = [
  { label: "Visa Fees (USD)", items: VISA_FEES },
  { label: "Permits — Private Sector (ZMW)", items: PERMIT_FEES_PRIVATE },
  { label: "Permits — Gov't / NGO / Non-profit (ZMW)", items: PERMIT_FEES_NGO },
];

export function VisaPermitFeesCalculator() {
  const [selectedIndex, setSelectedIndex] = useState("0");

  const allItems = useMemo(() => GROUPS.flatMap((g) => g.items), []);
  const selected = allItems[parseInt(selectedIndex, 10)] ?? allItems[0];

  return (
    <div>
      <SelectField
        label="Service"
        value={selectedIndex}
        onChange={setSelectedIndex}
        options={allItems.map((item, i) => ({
          value: String(i),
          label: item.service,
        }))}
      />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard
            label="Total fee"
            value={`${selected.currency === "USD" ? "$" : "K"}${formatNumber(selected.total)}`}
            emphasis
          />
          <ResultCard
            label="Statutory fee"
            value={`${selected.currency === "USD" ? "$" : "K"}${formatNumber(selected.statutoryFee)}`}
          />
          <ResultCard
            label="Administrative fee"
            value={`${selected.currency === "USD" ? "$" : "K"}${formatNumber(selected.adminFee)}`}
          />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Sourced directly from the Zambia Department of Immigration fee schedule. This covers visas and permits (for foreign nationals) — it does not cover Zambian citizen passport application fees.
      </p>
    </div>
  );
}
