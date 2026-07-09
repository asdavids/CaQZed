"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import { calculateRoadTax } from "@/lib/vehicle-rates";
import { formatKwacha } from "@/lib/format";

export function RoadTaxCalculator() {
  const [vehicleType, setVehicleType] = useState("car");
  const [gvw, setGvw] = useState("1500");

  const isMotorcycle = vehicleType === "motorcycle";
  const weight = parseFloat(gvw) || 0;

  const result = useMemo(
    () => calculateRoadTax(weight, isMotorcycle),
    [weight, isMotorcycle]
  );

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Vehicle type"
          value={vehicleType}
          onChange={setVehicleType}
          options={[
            { value: "car", label: "Car / truck / bus (by weight)" },
            { value: "motorcycle", label: "Motorcycle" },
          ]}
        />
        {!isMotorcycle && (
          <NumberField label="Gross vehicle weight (GVW)" value={gvw} onChange={setGvw} suffix="kg" />
        )}
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Annual road tax" value={formatKwacha(result.annual)} emphasis />
          <ResultCard label="Per quarter" value={formatKwacha(result.quarterly)} />
          <ResultCard label="Weight band" value={result.bandLabel} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        GVW is the maximum weight your vehicle is designed to carry (including passengers and cargo) — check your registration card or door-jamb sticker, not the empty/kerb weight.
      </p>
    </div>
  );
}
