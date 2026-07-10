"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import { formatNumber } from "@/lib/format";

// Common rule-of-thumb bags (50kg) of cement per cubic metre of wet concrete,
// by mix ratio (cement : sand : stone). Widely used construction estimating
// figures, not a government-regulated standard.
const MIX_RATIOS: Record<string, { label: string; bagsPerM3: number }> = {
  "1:1.5:3": { label: "1:1.5:3 (high strength — columns, beams)", bagsPerM3: 8.0 },
  "1:2:4": { label: "1:2:4 (general — slabs, foundations)", bagsPerM3: 6.3 },
  "1:3:6": { label: "1:3:6 (mass concrete — footings, blinding)", bagsPerM3: 4.6 },
};

export function CementCalculator() {
  const [length, setLength] = useState("5");
  const [width, setWidth] = useState("4");
  const [thickness, setThickness] = useState("0.15");
  const [mix, setMix] = useState("1:2:4");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const t = parseFloat(thickness) || 0;

  const result = useMemo(() => {
    const volume = l * w * t;
    const bagsPerM3 = MIX_RATIOS[mix]?.bagsPerM3 ?? 6.3;
    const bags = volume * bagsPerM3;
    return { volume, bags };
  }, [l, w, t, mix]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Length" value={length} onChange={setLength} suffix="m" />
        <NumberField label="Width" value={width} onChange={setWidth} suffix="m" />
        <NumberField label="Thickness" value={thickness} onChange={setThickness} suffix="m" />
      </div>
      <div className="mt-4">
        <SelectField
          label="Mix ratio"
          value={mix}
          onChange={setMix}
          options={Object.entries(MIX_RATIOS).map(([k, v]) => ({ value: k, label: v.label }))}
        />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Cement bags needed (50kg)" value={`${Math.ceil(result.bags)} bags`} emphasis />
          <ResultCard label="Concrete volume" value={`${formatNumber(result.volume)} m³`} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Based on standard construction industry estimating ratios, not an official building code. Always allow extra for wastage and confirm with your site engineer for structural work.
      </p>
    </div>
  );
}
