"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import { calculateImportDuty, type BodyType, type AgeBand } from "@/lib/vehicle-rates";
import { formatKwacha } from "@/lib/format";

export function ImportDutyCalculator() {
  const [engineCc, setEngineCc] = useState("1500");
  const [bodyType, setBodyType] = useState<BodyType>("sedan");
  const [ageBand, setAgeBand] = useState<AgeBand>("over5");

  const cc = parseFloat(engineCc) || 0;
  const result = useMemo(
    () => calculateImportDuty(cc, bodyType, ageBand),
    [cc, bodyType, ageBand]
  );

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Engine capacity" value={engineCc} onChange={setEngineCc} suffix="cc" />
        <SelectField
          label="Body type"
          value={bodyType}
          onChange={(v) => setBodyType(v as BodyType)}
          options={[
            { value: "sedan", label: "Sedan" },
            { value: "hatchback", label: "Hatchback" },
            { value: "stationWagon", label: "Station Wagon" },
            { value: "suv", label: "SUV" },
          ]}
        />
        <SelectField
          label="Vehicle age"
          value={ageBand}
          onChange={(v) => setAgeBand(v as AgeBand)}
          options={[
            { value: "over5", label: "Over 5 years old" },
            { value: "years2to5", label: "2 – 5 years old" },
          ]}
        />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Total duty payable" value={formatKwacha(result.total)} emphasis />
          <ResultCard label="Specific duty" value={formatKwacha(result.specificDuty)} />
          <ResultCard label="Carbon emission surtax" value={formatKwacha(result.carbonSurtax)} />
          <ResultCard label="Engine band" value={result.bandLabel} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This covers the standard used-vehicle specific duty schedule (the majority of imports). Vehicles under 2 years old, hybrids and electric vehicles are assessed differently, as a percentage of the vehicle&apos;s CIF value — confirm with ZRA for those cases.
      </p>
    </div>
  );
}
