"use client";

import { useMemo, useState } from "react";
import { NumberField, SelectField } from "@/components/calc-ui";
import { formatNumber } from "@/lib/format";

const UNITS: Record<string, Record<string, number>> = {
  length: { Metres: 1, Kilometres: 1000, Centimetres: 0.01, Miles: 1609.344, Feet: 0.3048, Inches: 0.0254 },
  weight: { Kilograms: 1, Grams: 0.001, Tonnes: 1000, Pounds: 0.453592, Ounces: 0.0283495 },
  volume: { Litres: 1, Millilitres: 0.001, "Cubic metres": 1000, "US Gallons": 3.78541 },
};

const CATEGORY_LABELS: Record<string, string> = {
  length: "Length",
  weight: "Weight",
  volume: "Volume",
};

export function UnitConverter() {
  const [category, setCategory] = useState("length");
  const units = UNITS[category];
  const unitNames = Object.keys(units);

  const [from, setFrom] = useState(unitNames[0]);
  const [to, setTo] = useState(unitNames[1] ?? unitNames[0]);
  const [value, setValue] = useState("1");

  const handleCategoryChange = (v: string) => {
    setCategory(v);
    const names = Object.keys(UNITS[v]);
    setFrom(names[0]);
    setTo(names[1] ?? names[0]);
  };

  const result = useMemo(() => {
    const v = parseFloat(value) || 0;
    const fromFactor = units[from] ?? 1;
    const toFactor = units[to] ?? 1;
    return (v * fromFactor) / toFactor;
  }, [value, from, to, units]);

  return (
    <div>
      <SelectField
        label="Category"
        value={category}
        onChange={handleCategoryChange}
        options={Object.keys(UNITS).map((k) => ({ value: k, label: CATEGORY_LABELS[k] }))}
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-3 items-end">
        <NumberField label="Value" value={value} onChange={setValue} />
        <SelectField label="From" value={from} onChange={setFrom} options={unitNames.map((u) => ({ value: u, label: u }))} />
        <SelectField label="To" value={to} onChange={setTo} options={unitNames.map((u) => ({ value: u, label: u }))} />
      </div>

      <div className="mt-5 rounded-xl bg-brand-green px-4 py-3.5 text-white">
        <div className="text-[12px] font-medium text-white/80">Result</div>
        <div className="mt-0.5 text-[20px] font-display font-semibold tabular-nums">
          {formatNumber(result)} {to}
        </div>
      </div>
    </div>
  );
}
