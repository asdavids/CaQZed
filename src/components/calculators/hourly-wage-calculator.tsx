"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

export function HourlyWageCalculator() {
  const [hourlyRate, setHourlyRate] = useState("60");
  const [hoursPerDay, setHoursPerDay] = useState("8");
  const [daysPerWeek, setDaysPerWeek] = useState("5");

  const rate = parseFloat(hourlyRate) || 0;
  const hpd = parseFloat(hoursPerDay) || 0;
  const dpw = parseFloat(daysPerWeek) || 0;

  const result = useMemo(() => {
    const daily = rate * hpd;
    const weekly = daily * dpw;
    const monthly = weekly * (52 / 12);
    const annual = weekly * 52;
    return { daily, weekly, monthly, annual };
  }, [rate, hpd, dpw]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Hourly rate" value={hourlyRate} onChange={setHourlyRate} prefix="K" />
        <NumberField label="Hours per day" value={hoursPerDay} onChange={setHoursPerDay} />
        <NumberField label="Working days per week" value={daysPerWeek} onChange={setDaysPerWeek} />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Monthly pay" value={formatKwacha(result.monthly)} emphasis />
          <ResultCard label="Daily pay" value={formatKwacha(result.daily)} />
          <ResultCard label="Weekly pay" value={formatKwacha(result.weekly)} />
          <ResultCard label="Annual pay" value={formatKwacha(result.annual)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
