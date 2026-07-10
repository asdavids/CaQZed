"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import { calculateHourlyRate, OVERTIME_MULTIPLIER, REST_DAY_HOLIDAY_MULTIPLIER } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function OvertimeCalculator() {
  const [salary, setSalary] = useState("8000");
  const [hours, setHours] = useState("10");
  const [dayType, setDayType] = useState("weekday");

  const s = parseFloat(salary) || 0;
  const h = parseFloat(hours) || 0;
  const multiplier = dayType === "weekday" ? OVERTIME_MULTIPLIER : REST_DAY_HOLIDAY_MULTIPLIER;

  const result = useMemo(() => {
    const hourlyRate = calculateHourlyRate(s);
    const overtimePay = hourlyRate * multiplier * h;
    return { hourlyRate, overtimePay };
  }, [s, h, multiplier]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Monthly basic salary" value={salary} onChange={setSalary} prefix="K" />
        <NumberField label="Overtime hours worked" value={hours} onChange={setHours} suffix="hrs" />
        <SelectField
          label="Type of overtime"
          value={dayType}
          onChange={setDayType}
          options={[
            { value: "weekday", label: "Beyond 48hr week (1.5×)" },
            { value: "restday", label: "Rest day / public holiday (2×)" },
          ]}
        />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Overtime pay" value={formatKwacha(result.overtimePay)} emphasis />
          <ResultCard label="Your hourly rate" value={formatKwacha(result.hourlyRate)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Hourly rate = monthly salary ÷ 208 hours, per the Employment Code Act. Senior management and expatriate staff on certain contracts may be exempted from overtime entitlement — check your contract.
      </p>
    </div>
  );
}
