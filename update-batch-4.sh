#!/bin/bash
set -e
echo 'Updating CaQZed with 10 new calculators...'

mkdir -p 'src/app/calculators/budget-planner'
cat > 'src/app/calculators/budget-planner/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { BudgetPlannerCalculator } from "@/components/calculators/budget-planner-calculator";

export const metadata: Metadata = {
  title: "Budget Planner — Monthly Income and Expense Tracker",
  description: "Plan your monthly budget against your income and see what's left to save.",
  alternates: { canonical: "/calculators/budget-planner" },
};

export default function BudgetPlannerPage() {
  return (
    <CalculatorShell
      title="Budget Planner"
      description="See how your monthly income stacks up against your expenses, and what's left to save."
      relatedSlugs={["savings-goal", "debt-payoff", "gross-to-net"]}
      formulaExplanation={
        <p>
          This adds up your expense categories and subtracts the total from
          your income — a simple starting point for a monthly budget. A
          common rule of thumb is the 50/30/20 split: 50% needs, 30% wants,
          20% savings, though your own priorities may differ.
        </p>
      }
      faqs={[]}
    >
      <BudgetPlannerCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/cement'
cat > 'src/app/calculators/cement/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { CementCalculator } from "@/components/calculators/cement-calculator";

export const metadata: Metadata = {
  title: "Cement Calculator — Bags Needed for a Concrete Slab",
  description: "Calculate how many bags of cement you need for a slab, based on dimensions and mix ratio.",
  alternates: { canonical: "/calculators/cement" },
};

export default function CementPage() {
  return (
    <CalculatorShell
      title="Cement Calculator"
      description="Work out how many 50kg bags of cement you need for a concrete slab or foundation."
      legalReference="Standard construction industry estimating ratios (cement:sand:stone by volume)."
      relatedSlugs={["paint", "fertilizer", "budget-planner"]}
      formulaExplanation={
        <>
          <p>
            First we calculate the volume of concrete you need (length ×
            width × thickness), then multiply by the bags-per-cubic-metre
            figure for your chosen mix ratio.
          </p>
        </>
      }
      faqs={[
        {
          question: "Which mix ratio should I use?",
          answer:
            "1:2:4 is the general-purpose mix for slabs and foundations. Use 1:1.5:3 for structural elements like columns and beams that need higher strength, and 1:3:6 for mass concrete like footings where strength matters less. When in doubt, ask your site engineer.",
        },
        {
          question: "Should I add extra for wastage?",
          answer:
            "Yes — it's common practice to add 5-10% extra to account for spillage, uneven ground, and mixing losses. This calculator gives the theoretical minimum.",
        },
      ]}
    >
      <CementCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/date-calculator'
cat > 'src/app/calculators/date-calculator/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { DateCalculator } from "@/components/calculators/date-calculator";

export const metadata: Metadata = {
  title: "Date Calculator — Days Between Two Dates",
  description: "Calculate the number of days, weeks between any two dates.",
  alternates: { canonical: "/calculators/date-calculator" },
};

export default function DateCalculatorPage() {
  return (
    <CalculatorShell
      title="Date Calculator"
      description="Find the number of days between any two dates."
      relatedSlugs={["age", "school-fees-planner", "percentage"]}
      formulaExplanation={<p>Counts the exact number of calendar days between your two chosen dates.</p>}
      faqs={[]}
    >
      <DateCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/debt-payoff'
cat > 'src/app/calculators/debt-payoff/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { DebtPayoffCalculator } from "@/components/calculators/debt-payoff-calculator";

export const metadata: Metadata = {
  title: "Debt Payoff Calculator — Time and Interest to Clear a Debt",
  description: "Calculate how long it will take to pay off a debt, and how much interest you'll pay.",
  alternates: { canonical: "/calculators/debt-payoff" },
};

export default function DebtPayoffPage() {
  return (
    <CalculatorShell
      title="Debt Payoff Calculator"
      description="See how many months it will take to clear a debt at a fixed monthly payment, and the total interest you'll pay."
      relatedSlugs={["loan", "budget-planner", "loan-affordability"]}
      formulaExplanation={
        <p>
          Each month, interest is added to your remaining balance, then your
          payment is subtracted. This repeats until the balance reaches
          zero — the same way real loan and credit balances are worked out.
        </p>
      }
      faqs={[
        {
          question: "What if my payment barely covers the interest?",
          answer:
            "If your monthly payment is close to or below the interest charged each month, your balance will shrink very slowly or not at all — the calculator will flag this so you know to increase your payment.",
        },
      ]}
    >
      <DebtPayoffCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/fertilizer'
cat > 'src/app/calculators/fertilizer/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { FertilizerCalculator } from "@/components/calculators/fertilizer-calculator";

export const metadata: Metadata = {
  title: "Fertilizer Calculator — Quantity by Field Size",
  description: "Calculate how much fertilizer you need based on field size and application rate.",
  alternates: { canonical: "/calculators/fertilizer" },
};

export default function FertilizerPage() {
  return (
    <CalculatorShell
      title="Fertilizer Calculator"
      description="Calculate the total quantity of fertilizer needed for your field."
      relatedSlugs={["poultry-profit", "budget-planner", "unit-converter"]}
      formulaExplanation={
        <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
          Total fertilizer (kg) = Field size (ha) × Application rate (kg/ha)
        </p>
      }
      faqs={[
        {
          question: "What application rate should I use?",
          answer:
            "This depends heavily on your crop, soil fertility, and the specific fertilizer type (e.g. Compound D, Urea, D-Compound). Your agricultural extension officer or a soil test can give you the right rate for your field.",
        },
      ]}
    >
      <FertilizerCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/hourly-wage'
cat > 'src/app/calculators/hourly-wage/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { HourlyWageCalculator } from "@/components/calculators/hourly-wage-calculator";

export const metadata: Metadata = {
  title: "Hourly Wage Calculator — Convert Hourly to Monthly Pay",
  description: "Convert between hourly, daily, weekly, monthly and annual pay.",
  alternates: { canonical: "/calculators/hourly-wage" },
};

export default function HourlyWagePage() {
  return (
    <CalculatorShell
      title="Hourly Wage Calculator"
      description="Convert an hourly rate into daily, weekly, monthly and annual pay, or work the other way."
      relatedSlugs={["gross-to-net", "paye", "overtime"]}
      formulaExplanation={
        <p>
          Daily pay is your hourly rate × hours per day. Weekly pay is daily
          pay × working days per week. Monthly pay multiplies weekly pay by
          52 weeks ÷ 12 months, which averages out months with different
          numbers of paydays.
        </p>
      }
      faqs={[]}
    >
      <HourlyWageCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/paint'
cat > 'src/app/calculators/paint/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { PaintCalculator } from "@/components/calculators/paint-calculator";

export const metadata: Metadata = {
  title: "Paint Calculator — Litres Needed by Wall Area",
  description: "Calculate how many litres of paint you need based on wall area and coverage.",
  alternates: { canonical: "/calculators/paint" },
};

export default function PaintPage() {
  return (
    <CalculatorShell
      title="Paint Calculator"
      description="Calculate how much paint you need based on wall area, number of coats, and coverage rate."
      relatedSlugs={["cement", "budget-planner", "unit-converter"]}
      formulaExplanation={
        <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
          Litres needed = (Area × Coats) ÷ Coverage per litre
        </p>
      }
      faqs={[
        {
          question: "Where do I find the coverage rate for my paint?",
          answer:
            "It's printed on the paint tin, usually as m² per litre. Adjust the default in the calculator to match your specific paint for a more accurate result.",
        },
      ]}
    >
      <PaintCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/poultry-profit'
cat > 'src/app/calculators/poultry-profit/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { PoultryProfitCalculator } from "@/components/calculators/poultry-profit-calculator";

export const metadata: Metadata = {
  title: "Poultry Profit Calculator — Broiler Batch Profitability",
  description: "Estimate the profit from a batch of broiler chickens, accounting for mortality.",
  alternates: { canonical: "/calculators/poultry-profit" },
};

export default function PoultryProfitPage() {
  return (
    <CalculatorShell
      title="Poultry Profit Calculator"
      description="Estimate the profitability of a broiler batch, from day-old chicks to sale."
      relatedSlugs={["fertilizer", "break-even", "budget-planner"]}
      formulaExplanation={
        <>
          <p>
            Costs are calculated on the full number of birds you start with
            (since you pay for every chick and its feed), while revenue is
            calculated only on birds that survive to sale, based on your
            expected mortality rate.
          </p>
        </>
      }
      faqs={[
        {
          question: "What mortality rate should I expect?",
          answer:
            "This varies by management practices, disease control and housing quality — 5% is a commonly used planning estimate for a well-managed broiler batch, but talk to an experienced farmer or extension officer for a realistic figure in your situation.",
        },
      ]}
    >
      <PoultryProfitCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/school-fees-planner'
cat > 'src/app/calculators/school-fees-planner/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { SchoolFeesCalculator } from "@/components/calculators/school-fees-calculator";

export const metadata: Metadata = {
  title: "School Fees Planner — Save for School Fees",
  description: "Plan how much to save each month to cover school fees for your children.",
  alternates: { canonical: "/calculators/school-fees-planner" },
};

export default function SchoolFeesPage() {
  return (
    <CalculatorShell
      title="School Fees Planner"
      description="Work out how much to save each month to cover the next term's school fees."
      relatedSlugs={["savings-goal", "budget-planner", "date-calculator"]}
      formulaExplanation={
        <p>
          This multiplies your per-child termly fee by your number of
          children, subtracts what you&apos;ve already saved, then spreads
          the remaining amount evenly across the months you have left before
          the fees are due.
        </p>
      }
      faqs={[]}
    >
      <SchoolFeesCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/unit-converter'
cat > 'src/app/calculators/unit-converter/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { UnitConverter } from "@/components/calculators/unit-converter";

export const metadata: Metadata = {
  title: "Unit Converter — Length, Weight and Volume",
  description: "Convert between metric and imperial units of length, weight and volume.",
  alternates: { canonical: "/calculators/unit-converter" },
};

export default function UnitConverterPage() {
  return (
    <CalculatorShell
      title="Unit Converter"
      description="Convert between common units of length, weight and volume."
      relatedSlugs={["percentage", "date-calculator", "age"]}
      formulaExplanation={
        <p>
          Each unit is converted to a common base unit first (metres, kilograms, or litres), then converted to your target unit — this keeps the conversion accurate across any combination of units.
        </p>
      }
      faqs={[]}
    >
      <UnitConverter />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/budget-planner-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

export function BudgetPlannerCalculator() {
  const [income, setIncome] = useState("10000");
  const [housing, setHousing] = useState("2500");
  const [food, setFood] = useState("1500");
  const [transport, setTransport] = useState("800");
  const [utilities, setUtilities] = useState("600");
  const [other, setOther] = useState("1000");

  const inc = parseFloat(income) || 0;
  const values = [housing, food, transport, utilities, other].map((v) => parseFloat(v) || 0);

  const result = useMemo(() => {
    const totalExpenses = values.reduce((a, b) => a + b, 0);
    const remaining = inc - totalExpenses;
    const spentPct = inc !== 0 ? totalExpenses / inc : 0;
    return { totalExpenses, remaining, spentPct };
  }, [inc, values]);

  return (
    <div>
      <NumberField label="Monthly income" value={income} onChange={setIncome} prefix="K" />

      <h3 className="mt-5 text-[13px] font-semibold text-foreground-muted">Monthly expenses</h3>
      <div className="mt-2 grid gap-4 sm:grid-cols-2">
        <NumberField label="Housing / rent" value={housing} onChange={setHousing} prefix="K" />
        <NumberField label="Food & groceries" value={food} onChange={setFood} prefix="K" />
        <NumberField label="Transport" value={transport} onChange={setTransport} prefix="K" />
        <NumberField label="Utilities" value={utilities} onChange={setUtilities} prefix="K" />
        <NumberField label="Other" value={other} onChange={setOther} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard
            label={result.remaining >= 0 ? "Left to save" : "Over budget by"}
            value={formatKwacha(Math.abs(result.remaining))}
            emphasis
          />
          <ResultCard label="Total expenses" value={formatKwacha(result.totalExpenses)} />
          <ResultCard label="% of income spent" value={formatPercent(result.spentPct)} />
        </ResultsGrid>
      </div>

      {result.remaining < 0 && (
        <p className="mt-4 text-[13px] text-brand-gold bg-brand-gold-50 rounded-lg px-3.5 py-2.5">
          Your expenses are higher than your income this month — worth reviewing where to cut back.
        </p>
      )}
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/cement-calculator.tsx' << 'CAQZED_EOF'
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
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/date-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { ResultCard, ResultsGrid } from "@/components/calc-ui";

export function DateCalculator() {
  const today = new Date().toISOString().slice(0, 10);
  const [start, setStart] = useState(today);
  const [end, setEnd] = useState(today);

  const result = useMemo(() => {
    const s = new Date(start);
    const e = new Date(end);
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return null;
    const diffMs = e.getTime() - s.getTime();
    const totalDays = Math.round(diffMs / 86_400_000);
    const weeks = Math.floor(Math.abs(totalDays) / 7);
    const remDays = Math.abs(totalDays) % 7;
    return { totalDays, weeks, remDays };
  }, [start, end]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="block text-[13px] font-medium text-foreground-muted mb-1.5">Start date</span>
          <input
            type="date"
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[15px] outline-none focus:border-brand-green"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="block text-[13px] font-medium text-foreground-muted mb-1.5">End date</span>
          <input
            type="date"
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[15px] outline-none focus:border-brand-green"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </label>
      </div>

      {result && (
        <div className="mt-5">
          <ResultsGrid>
            <ResultCard label="Total days" value={`${result.totalDays}`} emphasis />
            <ResultCard label="Weeks + days" value={`${result.weeks}w ${result.remDays}d`} />
          </ResultsGrid>
        </div>
      )}
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/debt-payoff-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

function simulatePayoff(balance: number, annualRatePct: number, monthlyPayment: number) {
  const monthlyRate = annualRatePct / 100 / 12;
  let remaining = balance;
  let months = 0;
  let totalInterest = 0;

  if (monthlyPayment <= remaining * monthlyRate) {
    // Payment never covers interest — balance never clears
    return { months: Infinity, totalInterest: Infinity };
  }

  while (remaining > 0 && months < 1200) {
    const interest = remaining * monthlyRate;
    totalInterest += interest;
    remaining = remaining + interest - monthlyPayment;
    months += 1;
  }

  return { months, totalInterest };
}

export function DebtPayoffCalculator() {
  const [balance, setBalance] = useState("20000");
  const [rate, setRate] = useState("25");
  const [payment, setPayment] = useState("1500");

  const b = parseFloat(balance) || 0;
  const r = parseFloat(rate) || 0;
  const p = parseFloat(payment) || 0;

  const result = useMemo(() => simulatePayoff(b, r, p), [b, r, p]);
  const isImpossible = !Number.isFinite(result.months);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Current balance" value={balance} onChange={setBalance} prefix="K" />
        <NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" />
        <NumberField label="Monthly payment" value={payment} onChange={setPayment} prefix="K" />
      </div>

      <div className="mt-5">
        {isImpossible ? (
          <p className="text-[13px] text-brand-gold bg-brand-gold-50 rounded-lg px-3.5 py-2.5">
            This payment doesn&apos;t even cover the monthly interest — your balance would never go down. Increase your monthly payment.
          </p>
        ) : (
          <ResultsGrid>
            <ResultCard label="Time to pay off" value={`${result.months} months`} emphasis />
            <ResultCard label="Total interest paid" value={formatKwacha(result.totalInterest)} />
            <ResultCard label="Total paid" value={formatKwacha(b + result.totalInterest)} />
          </ResultsGrid>
        )}
      </div>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/fertilizer-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatNumber } from "@/lib/format";

export function FertilizerCalculator() {
  const [fieldSize, setFieldSize] = useState("2");
  const [rate, setRate] = useState("200");
  const [bagSize, setBagSize] = useState("50");

  const size = parseFloat(fieldSize) || 0;
  const r = parseFloat(rate) || 0;
  const bag = parseFloat(bagSize) || 50;

  const result = useMemo(() => {
    const totalKg = size * r;
    const bags = bag > 0 ? totalKg / bag : 0;
    return { totalKg, bags };
  }, [size, r, bag]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Field size" value={fieldSize} onChange={setFieldSize} suffix="hectares" />
        <NumberField label="Application rate" value={rate} onChange={setRate} suffix="kg/ha" />
        <NumberField label="Bag size" value={bagSize} onChange={setBagSize} suffix="kg" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Total fertilizer needed" value={`${formatNumber(result.totalKg)} kg`} emphasis />
          <ResultCard label="Bags needed" value={`${Math.ceil(result.bags)} bags`} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Application rates vary widely by crop, soil type and fertilizer formulation (e.g. Compound D, Urea) — use the rate recommended by your agricultural extension officer or soil test for best results.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/hourly-wage-calculator.tsx' << 'CAQZED_EOF'
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
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/paint-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatNumber } from "@/lib/format";

export function PaintCalculator() {
  const [area, setArea] = useState("60");
  const [coats, setCoats] = useState("2");
  const [coverage, setCoverage] = useState("10");
  const [canSize, setCanSize] = useState("20");

  const a = parseFloat(area) || 0;
  const c = parseFloat(coats) || 1;
  const cov = parseFloat(coverage) || 10;
  const can = parseFloat(canSize) || 20;

  const result = useMemo(() => {
    const litresNeeded = (a * c) / cov;
    const cansNeeded = can > 0 ? litresNeeded / can : 0;
    return { litresNeeded, cansNeeded };
  }, [a, c, cov, can]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Wall area to paint" value={area} onChange={setArea} suffix="m²" />
        <NumberField label="Number of coats" value={coats} onChange={setCoats} />
        <NumberField label="Coverage per litre" value={coverage} onChange={setCoverage} suffix="m²/L" />
        <NumberField label="Can size" value={canSize} onChange={setCanSize} suffix="L" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Paint needed" value={`${formatNumber(result.litresNeeded)} L`} emphasis />
          <ResultCard label="Cans needed" value={`${Math.ceil(result.cansNeeded)} × ${can}L`} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Coverage varies by paint brand and wall texture — check the coverage figure on your specific paint tin and adjust above for a more accurate estimate.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/poultry-profit-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha } from "@/lib/format";

export function PoultryProfitCalculator() {
  const [numBirds, setNumBirds] = useState("100");
  const [chickCost, setChickCost] = useState("15");
  const [feedCostPerBird, setFeedCostPerBird] = useState("45");
  const [otherCosts, setOtherCosts] = useState("500");
  const [mortalityPct, setMortalityPct] = useState("5");
  const [sellingPrice, setSellingPrice] = useState("100");

  const n = parseFloat(numBirds) || 0;
  const chick = parseFloat(chickCost) || 0;
  const feed = parseFloat(feedCostPerBird) || 0;
  const other = parseFloat(otherCosts) || 0;
  const mortality = parseFloat(mortalityPct) || 0;
  const price = parseFloat(sellingPrice) || 0;

  const result = useMemo(() => {
    const survivingBirds = n * (1 - mortality / 100);
    const totalCost = n * chick + n * feed + other;
    const totalRevenue = survivingBirds * price;
    const profit = totalRevenue - totalCost;
    const profitPerBird = survivingBirds > 0 ? profit / survivingBirds : 0;
    return { survivingBirds, totalCost, totalRevenue, profit, profitPerBird };
  }, [n, chick, feed, other, mortality, price]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Number of birds (day-old)" value={numBirds} onChange={setNumBirds} />
        <NumberField label="Cost per chick" value={chickCost} onChange={setChickCost} prefix="K" />
        <NumberField label="Feed cost per bird" value={feedCostPerBird} onChange={setFeedCostPerBird} prefix="K" />
        <NumberField label="Other costs (vaccines, litter, etc.)" value={otherCosts} onChange={setOtherCosts} prefix="K" />
        <NumberField label="Expected mortality" value={mortalityPct} onChange={setMortalityPct} suffix="%" />
        <NumberField label="Selling price per bird" value={sellingPrice} onChange={setSellingPrice} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Expected profit" value={formatKwacha(result.profit)} emphasis />
          <ResultCard label="Total revenue" value={formatKwacha(result.totalRevenue)} />
          <ResultCard label="Total cost" value={formatKwacha(result.totalCost)} />
          <ResultCard label="Surviving birds" value={`${Math.round(result.survivingBirds)}`} />
          <ResultCard label="Profit per bird" value={formatKwacha(result.profitPerBird)} />
        </ResultsGrid>
      </div>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/school-fees-calculator.tsx' << 'CAQZED_EOF'
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
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/unit-converter.tsx' << 'CAQZED_EOF'
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
CAQZED_EOF

mkdir -p 'src/lib/calculators'
cat > 'src/lib/calculators/registry.ts' << 'CAQZED_EOF'
export type CalculatorStatus = "live" | "soon";

export interface CalculatorMeta {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  status: CalculatorStatus;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { slug: "salary-employment", name: "Salary & Employment", description: "PAYE, NAPSA, NHIMA, payroll and take-home pay." },
  { slug: "business", name: "Business", description: "VAT, turnover tax, profit margins and pricing." },
  { slug: "banking-loans", name: "Banking & Loans", description: "Loans, mortgages, savings and interest." },
  { slug: "investments", name: "Investments", description: "Treasury bills, bonds, dividends and returns." },
  { slug: "utilities", name: "Utilities", description: "ZESCO, water, fuel and household costs." },
  { slug: "mobile-money", name: "Mobile Money", description: "Airtel Money, MTN MoMo and Zamtel Kwacha fees." },
  { slug: "vehicles", name: "Vehicles", description: "Import duty, road tax and running costs." },
  { slug: "construction", name: "Construction", description: "Materials, quantities and building costs." },
  { slug: "agriculture", name: "Agriculture", description: "Fertilizer, livestock and farm budgets." },
  { slug: "property", name: "Property", description: "Rental yield, mortgages and property tax." },
  { slug: "personal-finance", name: "Personal Finance", description: "Budgeting, savings goals and debt payoff." },
  { slug: "education", name: "Education", description: "School fees and student budgeting." },
  { slug: "government", name: "Government", description: "Passport, licence and registration fees." },
  { slug: "everyday", name: "Everyday", description: "Percentages, dates, units and conversions." },
];

export const CALCULATORS: CalculatorMeta[] = [
  // --- Salary & Employment ---
  { slug: "paye", name: "PAYE Calculator", shortDescription: "Income tax on your salary using 2026 ZRA bands.", category: "salary-employment", status: "live" },
  { slug: "napsa", name: "NAPSA Calculator", shortDescription: "Pension contribution, employee and employer share.", category: "salary-employment", status: "live" },
  { slug: "nhima", name: "NHIMA Calculator", shortDescription: "Health insurance contribution on your salary.", category: "salary-employment", status: "live" },
  { slug: "gross-to-net", name: "Gross to Net Salary", shortDescription: "Full payslip breakdown from gross salary.", category: "salary-employment", status: "live" },
  { slug: "net-to-gross", name: "Net to Gross Salary", shortDescription: "Find the gross salary for a target take-home pay.", category: "salary-employment", status: "live" },
  { slug: "skills-levy", name: "Skills Levy Calculator", shortDescription: "Employer skills development levy.", category: "salary-employment", status: "soon" },
  { slug: "pension", name: "Pension Calculator", shortDescription: "Estimate pension contributions and payout.", category: "salary-employment", status: "soon" },
  { slug: "employer-cost", name: "Employer Cost Calculator", shortDescription: "True cost of an employee to the business.", category: "salary-employment", status: "soon" },
  { slug: "overtime", name: "Overtime Calculator", shortDescription: "Overtime pay based on hourly rate.", category: "salary-employment", status: "soon" },
  { slug: "bonus-tax", name: "Bonus Tax Calculator", shortDescription: "Tax impact of a bonus or commission.", category: "salary-employment", status: "soon" },
  { slug: "hourly-wage", name: "Hourly Wage Calculator", shortDescription: "Convert between hourly, daily and annual pay.", category: "salary-employment", status: "live" },
  { slug: "leave-pay", name: "Leave Pay Calculator", shortDescription: "Leave days payout calculation.", category: "salary-employment", status: "soon" },
  { slug: "terminal-benefits", name: "Terminal Benefits Calculator", shortDescription: "Gratuity and terminal benefits estimate.", category: "salary-employment", status: "soon" },

  // --- Business ---
  { slug: "vat", name: "VAT Calculator", shortDescription: "Add or remove 16% VAT from any amount.", category: "business", status: "live" },
  { slug: "profit-margin", name: "Profit Margin Calculator", shortDescription: "Margin, markup and selling price.", category: "business", status: "live" },
  { slug: "turnover-tax", name: "Turnover Tax Calculator", shortDescription: "5% turnover tax for small businesses.", category: "business", status: "live" },
  { slug: "corporate-tax", name: "Corporate Tax Calculator", shortDescription: "Company income tax estimate.", category: "business", status: "soon" },
  { slug: "break-even", name: "Break-even Calculator", shortDescription: "Units needed to cover fixed costs.", category: "business", status: "live" },

  // --- Banking & Loans ---
  { slug: "loan", name: "Loan Repayment Calculator", shortDescription: "Monthly instalments and total interest.", category: "banking-loans", status: "live" },
  { slug: "mortgage", name: "Mortgage Calculator", shortDescription: "Home loan repayments over time.", category: "banking-loans", status: "live" },
  { slug: "compound-interest", name: "Compound Interest Calculator", shortDescription: "Growth of savings or investments over time.", category: "banking-loans", status: "live" },
  { slug: "fixed-deposit", name: "Fixed Deposit Calculator", shortDescription: "Maturity value of a fixed deposit.", category: "banking-loans", status: "live" },
  { slug: "loan-affordability", name: "Loan Affordability Calculator", shortDescription: "How much you can safely borrow.", category: "banking-loans", status: "live" },

  // --- Investments ---
  { slug: "treasury-bills", name: "Treasury Bills Calculator", shortDescription: "Returns on Zambian government treasury bills.", category: "investments", status: "soon" },
  { slug: "roi", name: "ROI Calculator", shortDescription: "Return on investment, in kwacha and percent.", category: "investments", status: "live" },
  { slug: "inflation", name: "Inflation Calculator", shortDescription: "What your money is really worth over time.", category: "investments", status: "soon" },

  // --- Utilities ---
  { slug: "zesco-bill", name: "ZESCO Bill Estimator", shortDescription: "Estimate your monthly electricity bill.", category: "utilities", status: "live" },
  { slug: "fuel-cost", name: "Fuel Cost Calculator", shortDescription: "Trip fuel cost based on distance and consumption.", category: "utilities", status: "live" },
  { slug: "water-bill", name: "Water Bill Calculator", shortDescription: "Estimate your household water bill.", category: "utilities", status: "soon" },

  // --- Mobile Money ---
  { slug: "mobile-money-fees", name: "Mobile Money Fees Calculator", shortDescription: "Compare Airtel Money, MTN MoMo and Zamtel fees.", category: "mobile-money", status: "soon" },

  // --- Vehicles ---
  { slug: "import-duty", name: "Vehicle Import Duty Calculator", shortDescription: "Customs and excise duty on imported vehicles.", category: "vehicles", status: "live" },
  { slug: "road-tax", name: "Road Tax Calculator", shortDescription: "Annual road tax by vehicle type.", category: "vehicles", status: "live" },
  { slug: "running-costs", name: "Running Costs Calculator", shortDescription: "Monthly cost of fuel, road tax, insurance and maintenance.", category: "vehicles", status: "live" },

  // --- Construction ---
  { slug: "cement", name: "Cement Calculator", shortDescription: "Bags of cement needed for a project.", category: "construction", status: "live" },
  { slug: "paint", name: "Paint Calculator", shortDescription: "Litres of paint needed by wall area.", category: "construction", status: "live" },

  // --- Agriculture ---
  { slug: "fertilizer", name: "Fertilizer Calculator", shortDescription: "Fertilizer quantity by field size.", category: "agriculture", status: "live" },
  { slug: "poultry-profit", name: "Poultry Profit Calculator", shortDescription: "Profitability of a poultry batch.", category: "agriculture", status: "live" },

  // --- Property ---
  { slug: "rental-yield", name: "Rental Yield Calculator", shortDescription: "Annual rental yield on a property.", category: "property", status: "live" },

  // --- Personal Finance ---
  { slug: "budget-planner", name: "Budget Planner", shortDescription: "Plan monthly income against expenses.", category: "personal-finance", status: "live" },
  { slug: "savings-goal", name: "Savings Goal Calculator", shortDescription: "How much to save each month to hit a target.", category: "personal-finance", status: "live" },
  { slug: "debt-payoff", name: "Debt Payoff Calculator", shortDescription: "Time and interest to clear a debt.", category: "personal-finance", status: "live" },

  // --- Education ---
  { slug: "school-fees-planner", name: "School Fees Planner", shortDescription: "Plan and save for school fees.", category: "education", status: "live" },

  // --- Government ---
  { slug: "passport-fees", name: "Passport Fees Calculator", shortDescription: "Zambian passport application costs.", category: "government", status: "soon" },

  // --- Everyday ---
  { slug: "percentage", name: "Percentage Calculator", shortDescription: "Percentages, increases and decreases.", category: "everyday", status: "live" },
  { slug: "age", name: "Age Calculator", shortDescription: "Exact age in years, months and days.", category: "everyday", status: "live" },
  { slug: "date-calculator", name: "Date Calculator", shortDescription: "Days between two dates.", category: "everyday", status: "live" },
  { slug: "unit-converter", name: "Unit Converter", shortDescription: "Convert length, weight, volume and more.", category: "everyday", status: "live" },
];

export function getLiveCalculators() {
  return CALCULATORS.filter((c) => c.status === "live");
}

export function getCalculatorsByCategory(categorySlug: string) {
  return CALCULATORS.filter((c) => c.category === categorySlug);
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCalculator(slug: string) {
  return CALCULATORS.find((c) => c.slug === slug);
}
CAQZED_EOF

echo 'Done. Run: git add -A && git commit -m "Add 10 more calculators" && git push'