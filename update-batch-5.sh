#!/bin/bash
set -e
echo 'Updating CaQZed: Overtime, Leave Pay, Employer Cost, Skills Levy, Treasury Bills, Inflation...'

mkdir -p 'src/app/calculators/employer-cost'
cat > 'src/app/calculators/employer-cost/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { EmployerCostCalculator } from "@/components/calculators/employer-cost-calculator";

export const metadata: Metadata = {
  title: "Employer Cost Calculator Zambia — True Cost of an Employee",
  description: "Calculate the full statutory cost of an employee to a Zambian employer, including NAPSA, NHIMA and Skills Levy.",
  alternates: { canonical: "/calculators/employer-cost" },
};

export default function EmployerCostPage() {
  return (
    <CalculatorShell
      title="Employer Cost Calculator"
      description="See the true monthly cost of an employee once statutory employer contributions are added on top of gross salary."
      legalReference="NAPSA Act, National Health Insurance Act, and the Skills Development Levy under the Income Tax Act."
      relatedSlugs={["gross-to-net", "napsa", "skills-levy"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Total cost = Gross salary + NAPSA (employer 5%) + NHIMA (employer 1%) + Skills Levy (0.5%)
          </p>
          <p>
            These are the statutory on-costs every employer pays on top of an
            employee&apos;s gross salary — separate from what the employee
            sees deducted from their own payslip.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does this include the employee's own PAYE, NAPSA, and NHIMA?",
          answer:
            "No — those are deducted from the employee's gross pay, not paid on top by the employer. This calculator only shows the employer's additional statutory contributions.",
        },
        {
          question: "What other costs should I budget for?",
          answer:
            "This is the statutory minimum. Employers are also generally required to provide housing assistance, medical cover, and paid leave accrual, which add further to the real cost of an employee.",
        },
      ]}
    >
      <EmployerCostCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/inflation'
cat > 'src/app/calculators/inflation/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { InflationCalculator } from "@/components/calculators/inflation-calculator";

export const metadata: Metadata = {
  title: "Inflation Calculator Zambia — What Your Money Will Be Worth",
  description: "See how inflation erodes the purchasing power of your money over time.",
  alternates: { canonical: "/calculators/inflation" },
};

export default function InflationPage() {
  return (
    <CalculatorShell
      title="Inflation Calculator"
      description="See how much you'd need in the future to match today's buying power, at a given inflation rate."
      relatedSlugs={["treasury-bills", "savings-goal", "roi"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Future amount needed = Today&apos;s amount × (1 + inflation rate)^years
          </p>
          <p>
            This compounds inflation year over year, the same way prices
            actually rise — a small rate can erode a lot of value over a
            longer period.
          </p>
        </>
      }
      faqs={[
        {
          question: "Where do I find the current inflation rate?",
          answer:
            "The Zambia Statistics Agency (ZamStats) publishes the Consumer Price Index and annual inflation rate monthly.",
        },
        {
          question: "Why should I care about this if I'm not investing?",
          answer:
            "Even cash sitting in a low-interest account loses real value every year that inflation outpaces the interest rate — this shows you how much.",
        },
      ]}
    >
      <InflationCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/leave-pay'
cat > 'src/app/calculators/leave-pay/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { LeavePayCalculator } from "@/components/calculators/leave-pay-calculator";

export const metadata: Metadata = {
  title: "Leave Pay Calculator Zambia — Employment Code Act Fifth Schedule",
  description: "Calculate your annual leave payout using the Employment Code Act's official formula.",
  alternates: { canonical: "/calculators/leave-pay" },
};

export default function LeavePayPage() {
  return (
    <CalculatorShell
      title="Leave Pay Calculator"
      description="Calculate the value of your accrued annual leave using the Employment Code Act's Fifth Schedule formula."
      legalReference="Employment Code Act No. 3 of 2019, Sections 36-37 and the Fifth Schedule."
      relatedSlugs={["overtime", "terminal-benefits", "gross-to-net"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Leave pay = (Full monthly pay × Leave days) ÷ 26
          </p>
          <p>
            &quot;Full pay&quot; includes basic pay plus regular allowances
            (like housing or transport), but not one-off bonuses. The
            statutory minimum entitlement is 2 days of leave per month worked
            (24 days a year), available after 12 months of continuous
            service.
          </p>
        </>
      }
      faqs={[
        {
          question: "What happens to leave I don't use?",
          answer:
            "You can carry over up to 6 days to the following year. Anything beyond that must either be taken or paid out by your employer.",
        },
        {
          question: "Is leave pay taxed?",
          answer:
            "Yes — leave payouts, including at resignation or termination, are subject to PAYE like normal salary.",
        },
      ]}
    >
      <LeavePayCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/overtime'
cat > 'src/app/calculators/overtime/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { OvertimeCalculator } from "@/components/calculators/overtime-calculator";

export const metadata: Metadata = {
  title: "Overtime Calculator Zambia — Employment Code Act Rates",
  description: "Calculate overtime pay using the Employment Code Act's 1.5x and 2x statutory rates.",
  alternates: { canonical: "/calculators/overtime" },
};

export default function OvertimePage() {
  return (
    <CalculatorShell
      title="Overtime Calculator"
      description="Calculate your overtime pay based on the statutory rates in the Employment Code Act."
      legalReference="Employment Code Act No. 3 of 2019, Section 75(3)."
      relatedSlugs={["hourly-wage", "leave-pay", "employer-cost"]}
      formulaExplanation={
        <>
          <p>
            Your hourly rate is your monthly salary divided by 208 hours.
            Overtime beyond the normal 48-hour week is paid at 1.5× that
            rate. Work on a rest day or public holiday is paid at 2× your
            hourly rate.
          </p>
        </>
      }
      faqs={[
        {
          question: "Is everyone entitled to overtime pay?",
          answer:
            "Most employees are, but senior management and some expatriate staff on specific contract terms may be exempted under Employment Code Exemption Regulations — check your contract.",
        },
        {
          question: "What if my normal work week is less than 48 hours?",
          answer:
            "If your contract sets a shorter standard week, hours worked up to 48 hours can still be scheduled without overtime pay — only hours genuinely beyond the 48-hour threshold (or your contracted threshold, if more favourable) qualify.",
        },
      ]}
    >
      <OvertimeCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/skills-levy'
cat > 'src/app/calculators/skills-levy/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { SkillsLevyCalculator } from "@/components/calculators/skills-levy-calculator";

export const metadata: Metadata = {
  title: "Skills Development Levy Calculator Zambia",
  description: "Calculate the 0.5% Skills Development Levy on your business payroll.",
  alternates: { canonical: "/calculators/skills-levy" },
};

export default function SkillsLevyPage() {
  return (
    <CalculatorShell
      title="Skills Levy Calculator"
      description="Calculate the Skills Development Levy your business owes, based on total payroll."
      legalReference="Skills Development Levy Act — administered by ZRA, 0.5% of payroll."
      relatedSlugs={["employer-cost", "napsa", "turnover-tax"]}
      formulaExplanation={
        <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
          Skills Levy = Total monthly payroll × 0.5%
        </p>
      }
      faqs={[
        {
          question: "Who pays the Skills Development Levy?",
          answer:
            "It's an employer-only levy, paid on your total payroll — it's not deducted from any individual employee's salary.",
        },
      ]}
    >
      <SkillsLevyCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/treasury-bills'
cat > 'src/app/calculators/treasury-bills/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { TreasuryBillsCalculator } from "@/components/calculators/treasury-bills-calculator";

export const metadata: Metadata = {
  title: "Treasury Bills Calculator Zambia — Returns After Withholding Tax",
  description: "Calculate your return on Zambian government Treasury Bills, including the 15% withholding tax.",
  alternates: { canonical: "/calculators/treasury-bills" },
};

export default function TreasuryBillsPage() {
  return (
    <CalculatorShell
      title="Treasury Bills Calculator"
      description="Calculate your net return on a Bank of Zambia Treasury Bill, after withholding tax."
      legalReference="Treasury Bills are issued at a discount by the Bank of Zambia; interest income is subject to 15% withholding tax."
      relatedSlugs={["roi", "inflation", "compound-interest"]}
      formulaExplanation={
        <>
          <p>
            Treasury Bills are sold at a discount to their face value — you
            pay less today and receive the full face value at maturity. The
            difference is your return.
          </p>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Gross return = Face value × Yield × (Tenor ÷ 365)
          </p>
          <p>
            A 15% withholding tax is deducted from the interest earned by
            resident individual investors.
          </p>
        </>
      }
      faqs={[
        {
          question: "Where do I find the current yield?",
          answer:
            "The Bank of Zambia publishes results from each Treasury Bill auction, held roughly every two weeks across 91, 182, 273 and 364-day tenors, on its website.",
        },
        {
          question: "How do I actually buy a Treasury Bill?",
          answer:
            "Through a Primary Dealer commercial bank or a licensed broker. The minimum non-competitive bid is typically K1,000.",
        },
      ]}
    >
      <TreasuryBillsCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/employer-cost-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateEmployerCost } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function EmployerCostCalculator() {
  const [salary, setSalary] = useState("15000");
  const s = parseFloat(salary) || 0;

  const result = useMemo(() => calculateEmployerCost(s), [s]);

  return (
    <div>
      <NumberField label="Employee's monthly gross salary" value={salary} onChange={setSalary} prefix="K" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Total monthly cost to employer" value={formatKwacha(result.totalCost)} emphasis />
          <ResultCard label="Gross salary" value={formatKwacha(s)} />
          <ResultCard label="NAPSA (employer 5%)" value={formatKwacha(result.napsaEmployer)} />
          <ResultCard label="NHIMA (employer 1%)" value={formatKwacha(result.nhimaEmployer)} />
          <ResultCard label="Skills Development Levy (0.5%)" value={formatKwacha(result.skillsLevy)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This covers statutory on-costs only. It doesn&apos;t include benefits like housing assistance, medical cover, or leave pay accrual, which the Employment Code Act also requires employers to provide.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/inflation-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { formatKwacha, formatPercent } from "@/lib/format";

export function InflationCalculator() {
  const [amount, setAmount] = useState("10000");
  const [inflationRate, setInflationRate] = useState("13");
  const [years, setYears] = useState("5");

  const a = parseFloat(amount) || 0;
  const r = parseFloat(inflationRate) || 0;
  const y = parseFloat(years) || 0;

  const result = useMemo(() => {
    const futureValueNeeded = a * Math.pow(1 + r / 100, y);
    const realValueLost = futureValueNeeded - a;
    const purchasingPowerRemaining = a / Math.pow(1 + r / 100, y);
    return { futureValueNeeded, realValueLost, purchasingPowerRemaining };
  }, [a, r, y]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Amount today" value={amount} onChange={setAmount} prefix="K" />
        <NumberField label="Annual inflation rate" value={inflationRate} onChange={setInflationRate} suffix="%" />
        <NumberField label="Number of years" value={years} onChange={setYears} suffix="years" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label={`What you'd need in ${y || 0} years for the same buying power`} value={formatKwacha(result.futureValueNeeded)} emphasis />
          <ResultCard label="Value eroded by inflation" value={formatKwacha(result.realValueLost)} />
          <ResultCard label={`Today's K${a.toLocaleString()} will feel like`} value={formatKwacha(result.purchasingPowerRemaining)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Enter the latest annual inflation rate from the Zambia Statistics Agency (ZamStats) — inflation is reported monthly and changes often, so there&apos;s no fixed rate built in here.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/leave-pay-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateLeavePay, STATUTORY_ANNUAL_LEAVE_DAYS } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function LeavePayCalculator() {
  const [basicPay, setBasicPay] = useState("8000");
  const [allowances, setAllowances] = useState("1000");
  const [leaveDays, setLeaveDays] = useState(String(STATUTORY_ANNUAL_LEAVE_DAYS));

  const basic = parseFloat(basicPay) || 0;
  const allow = parseFloat(allowances) || 0;
  const days = parseFloat(leaveDays) || 0;
  const fullPay = basic + allow;

  const leaveValue = useMemo(() => calculateLeavePay(fullPay, days), [fullPay, days]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Monthly basic pay" value={basicPay} onChange={setBasicPay} prefix="K" />
        <NumberField label="Monthly allowances" value={allowances} onChange={setAllowances} prefix="K" />
        <NumberField label="Accrued leave days" value={leaveDays} onChange={setLeaveDays} suffix="days" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Leave pay" value={formatKwacha(leaveValue)} emphasis />
          <ResultCard label="Full monthly pay used" value={formatKwacha(fullPay)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Uses the Employment Code Act Fifth Schedule formula: (Full Pay × Leave Days) ÷ 26. The statutory minimum is 24 days per year (2 days per month), after 12 months of continuous service.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/overtime-calculator.tsx' << 'CAQZED_EOF'
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
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/skills-levy-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { SKILLS_LEVY_RATE } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function SkillsLevyCalculator() {
  const [payroll, setPayroll] = useState("100000");
  const p = parseFloat(payroll) || 0;

  const levy = useMemo(() => p * SKILLS_LEVY_RATE, [p]);

  return (
    <div>
      <NumberField label="Total monthly payroll" value={payroll} onChange={setPayroll} prefix="K" />

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Skills Development Levy (0.5%)" value={formatKwacha(levy)} emphasis />
          <ResultCard label="Annual levy" value={formatKwacha(levy * 12)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This is an employer-only levy — it&apos;s calculated on your total payroll and does not get deducted from any individual employee&apos;s pay.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/treasury-bills-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { TBILL_WITHHOLDING_TAX_RATE } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function TreasuryBillsCalculator() {
  const [faceValue, setFaceValue] = useState("10000");
  const [yieldRate, setYieldRate] = useState("11.5");
  const [tenor, setTenor] = useState("91");

  const face = parseFloat(faceValue) || 0;
  const y = parseFloat(yieldRate) || 0;
  const days = parseFloat(tenor) || 0;

  const result = useMemo(() => {
    const grossReturn = face * (y / 100) * (days / 365);
    const withholdingTax = grossReturn * TBILL_WITHHOLDING_TAX_RATE;
    const netReturn = grossReturn - withholdingTax;
    const purchasePrice = face - grossReturn;
    return { grossReturn, withholdingTax, netReturn, purchasePrice };
  }, [face, y, days]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Face value (amount at maturity)" value={faceValue} onChange={setFaceValue} prefix="K" />
        <NumberField label="Current yield rate" value={yieldRate} onChange={setYieldRate} suffix="%" />
        <NumberField label="Tenor" value={tenor} onChange={setTenor} suffix="days" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Net return (after tax)" value={formatKwacha(result.netReturn)} emphasis />
          <ResultCard label="Amount you pay today" value={formatKwacha(result.purchasePrice)} />
          <ResultCard label="Gross return" value={formatKwacha(result.grossReturn)} />
          <ResultCard label="Withholding tax (15%)" value={formatKwacha(result.withholdingTax)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Enter the yield from the latest BoZ auction — Treasury Bill yields are set at auction roughly every two weeks, so there&apos;s no single fixed rate to hardcode. Check the current 91/182/273/364-day yields on the Bank of Zambia website before investing.
      </p>
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
  { slug: "skills-levy", name: "Skills Levy Calculator", shortDescription: "Employer skills development levy.", category: "salary-employment", status: "live" },
  { slug: "pension", name: "Pension Calculator", shortDescription: "Estimate pension contributions and payout.", category: "salary-employment", status: "soon" },
  { slug: "employer-cost", name: "Employer Cost Calculator", shortDescription: "True cost of an employee to the business.", category: "salary-employment", status: "live" },
  { slug: "overtime", name: "Overtime Calculator", shortDescription: "Overtime pay based on hourly rate.", category: "salary-employment", status: "live" },
  { slug: "bonus-tax", name: "Bonus Tax Calculator", shortDescription: "Tax impact of a bonus or commission.", category: "salary-employment", status: "soon" },
  { slug: "hourly-wage", name: "Hourly Wage Calculator", shortDescription: "Convert between hourly, daily and annual pay.", category: "salary-employment", status: "live" },
  { slug: "leave-pay", name: "Leave Pay Calculator", shortDescription: "Leave days payout calculation.", category: "salary-employment", status: "live" },
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
  { slug: "treasury-bills", name: "Treasury Bills Calculator", shortDescription: "Returns on Zambian government treasury bills.", category: "investments", status: "live" },
  { slug: "roi", name: "ROI Calculator", shortDescription: "Return on investment, in kwacha and percent.", category: "investments", status: "live" },
  { slug: "inflation", name: "Inflation Calculator", shortDescription: "What your money is really worth over time.", category: "investments", status: "live" },

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

mkdir -p 'src/lib'
cat > 'src/lib/rates.ts' << 'CAQZED_EOF'
/**
 * OFFICIAL RATES — single source of truth.
 *
 * Every calculator reads its numbers from here instead of hardcoding them
 * inline. When ZRA / NAPSA / NHIMA / ZESCO publish new rates, this is the
 * only file that needs to change — every calculator that uses it updates
 * automatically.
 *
 * Later, this file can be swapped for a database table (see the project
 * brief's "Official Data Engine") without touching any calculator logic,
 * because calculators only ever call the functions below, never the raw
 * numbers directly.
 */

export const RATES_LAST_VERIFIED = "2026-07-09";

// ---------------------------------------------------------------------------
// PAYE — Pay As You Earn income tax
// Source: ZRA / PwC Worldwide Tax Summaries, "Zambia — Individual — Taxes on
// personal income", reviewed 20 March 2026. Annual bands divided by 12.
// https://taxsummaries.pwc.com/zambia/individual/taxes-on-personal-income
// ---------------------------------------------------------------------------
export const PAYE_BANDS_MONTHLY_2026 = [
  { upTo: 5_100, rate: 0 },
  { upTo: 7_100, rate: 0.2 },
  { upTo: 9_200, rate: 0.3 },
  { upTo: Infinity, rate: 0.37 },
] as const;

// ---------------------------------------------------------------------------
// NAPSA — National Pension Scheme Authority
// Employee and employer each contribute 5%, capped at K1,861.80/month each
// (insurable earnings ceiling ~K37,236/month) for the 2026 charge year.
// ---------------------------------------------------------------------------
export const NAPSA_RATE = 0.05;
export const NAPSA_MONTHLY_CAP = 1_861.8;

// ---------------------------------------------------------------------------
// NHIMA — National Health Insurance Management Authority
// 1% employee + 1% employer on gross/basic salary, no upper cap.
// ---------------------------------------------------------------------------
export const NHIMA_RATE = 0.01;

// ---------------------------------------------------------------------------
// Skills Development Levy — employer-only, does not affect employee net pay
// ---------------------------------------------------------------------------
export const SKILLS_LEVY_RATE = 0.005;

// ---------------------------------------------------------------------------
// VAT — standard rate
// Source: PwC Worldwide Tax Summaries / ZRA, Value Added Tax Act Cap. 331.
// ---------------------------------------------------------------------------
export const VAT_RATE = 0.16;

// ---------------------------------------------------------------------------
// ZESCO — residential prepaid electricity tariff bands
// Source: Energy Regulation Board (ERB) approved tariff reduction — top band
// cut from K6.39 to K3.45/kWh, first 200 units held flat to protect lifeline
// customers, effective through 31 October 2026.
// ---------------------------------------------------------------------------
export const ZESCO_RESIDENTIAL_BANDS = [
  { upTo: 100, rate: 0.35 },
  { upTo: 200, rate: 1.0 },
  { upTo: 400, rate: 2.42 },
  { upTo: Infinity, rate: 3.45 },
] as const;

export function calculateZescoBill(units: number): {
  total: number;
  breakdown: { band: string; units: number; rate: number; cost: number }[];
} {
  let remaining = Math.max(0, units);
  let lowerBound = 0;
  let total = 0;
  const breakdown: { band: string; units: number; rate: number; cost: number }[] = [];

  for (const band of ZESCO_RESIDENTIAL_BANDS) {
    if (remaining <= 0) break;
    const bandWidth = band.upTo - lowerBound;
    const bandUnits = Math.min(remaining, bandWidth);
    const cost = bandUnits * band.rate;
    if (bandUnits > 0) {
      breakdown.push({
        band:
          band.upTo === Infinity
            ? `Above ${lowerBound} units`
            : `${lowerBound + 1} – ${band.upTo} units`,
        units: bandUnits,
        rate: band.rate,
        cost,
      });
    }
    total += cost;
    remaining -= bandUnits;
    lowerBound = band.upTo;
  }

  return { total, breakdown };
}

// ---------------------------------------------------------------------------
// Turnover Tax — simplified regime for small businesses
// Source: PwC Worldwide Tax Summaries, "Zambia — Corporate — Other taxes".
// 5% of turnover for businesses with annual turnover not exceeding ZMW 5m,
// effective 1 January 2025. Excludes interest, dividends, royalties,
// consultancy income and mining income.
// ---------------------------------------------------------------------------
export const TURNOVER_TAX_RATE = 0.05;
export const TURNOVER_TAX_THRESHOLD_ANNUAL = 5_000_000;

/** Calculate PAYE on a given monthly taxable income using the 2026 bands. */
export function calculatePAYE(monthlyIncome: number): {

  tax: number;
  breakdown: { band: string; taxedAmount: number; rate: number; tax: number }[];
} {
  let remaining = Math.max(0, monthlyIncome);
  let lowerBound = 0;
  let totalTax = 0;
  const breakdown: { band: string; taxedAmount: number; rate: number; tax: number }[] = [];

  for (const band of PAYE_BANDS_MONTHLY_2026) {
    if (remaining <= 0) break;
    const bandWidth = band.upTo - lowerBound;
    const taxedAmount = Math.min(remaining, bandWidth);
    const tax = taxedAmount * band.rate;
    if (taxedAmount > 0) {
      breakdown.push({
        band:
          band.upTo === Infinity
            ? `Above K${lowerBound.toLocaleString()}`
            : `K${lowerBound.toLocaleString()} – K${band.upTo.toLocaleString()}`,
        taxedAmount,
        rate: band.rate,
        tax,
      });
    }
    totalTax += tax;
    remaining -= taxedAmount;
    lowerBound = band.upTo;
  }

  return { tax: totalTax, breakdown };
}

export function calculateNAPSA(grossSalary: number): number {
  return Math.min(grossSalary * NAPSA_RATE, NAPSA_MONTHLY_CAP);
}

export function calculateNHIMA(grossSalary: number): number {
  return grossSalary * NHIMA_RATE;
}

export function netFromGross(gross: number): number {
  const { tax } = calculatePAYE(gross);
  return gross - tax - calculateNAPSA(gross) - calculateNHIMA(gross);
}

/**
 * Reverse-solve gross salary from a target net (take-home) salary using
 * binary search. Net pay is a monotonically increasing function of gross
 * pay, so binary search converges reliably even though PAYE is a
 * piecewise/progressive function with no simple inverse.
 */
export function solveGrossForNet(targetNet: number): number {
  if (targetNet <= 0) return 0;
  let low = 0;
  let high = Math.max(targetNet * 3, 100_000);
  // Ensure the upper bound actually brackets the target.
  while (netFromGross(high) < targetNet && high < 100_000_000) {
    high *= 2;
  }
  for (let i = 0; i < 60; i++) {
    const mid = (low + high) / 2;
    if (netFromGross(mid) < targetNet) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return (low + high) / 2;
}

// ---------------------------------------------------------------------------
// Employment Code Act No. 3 of 2019 — overtime, leave pay
// Source: §75(3) (overtime), §36-37 and Fifth Schedule (leave pay).
// Cross-verified across wageindicator.org, Lexology and Mondaq summaries.
// ---------------------------------------------------------------------------
export const STANDARD_MONTHLY_HOURS = 208; // monthly wage ÷ 208 = hourly rate
export const OVERTIME_MULTIPLIER = 1.5; // hours beyond 48/week
export const REST_DAY_HOLIDAY_MULTIPLIER = 2.0; // work on rest day / public holiday
export const STATUTORY_ANNUAL_LEAVE_DAYS = 24; // 2 days/month, after 12 months service
export const LEAVE_PAY_DIVISOR = 26; // Fifth Schedule formula: (Full Pay × Days) ÷ 26

export function calculateHourlyRate(monthlySalary: number): number {
  return monthlySalary / STANDARD_MONTHLY_HOURS;
}

export function calculateLeavePay(fullMonthlyPay: number, leaveDays: number): number {
  return (fullMonthlyPay * leaveDays) / LEAVE_PAY_DIVISOR;
}

/** Total statutory cost of an employee to the employer, on top of gross pay. */
export function calculateEmployerCost(grossSalary: number): {
  napsaEmployer: number;
  nhimaEmployer: number;
  skillsLevy: number;
  totalCost: number;
} {
  const napsaEmployer = calculateNAPSA(grossSalary);
  const nhimaEmployer = calculateNHIMA(grossSalary);
  const skillsLevy = grossSalary * SKILLS_LEVY_RATE;
  return {
    napsaEmployer,
    nhimaEmployer,
    skillsLevy,
    totalCost: grossSalary + napsaEmployer + nhimaEmployer + skillsLevy,
  };
}

// ---------------------------------------------------------------------------
// Treasury Bills — withholding tax on interest income
// Source: multiple confirming sources (Pangaea Securities, Mansa Markets) —
// 15% withholding tax on Treasury Bill interest for resident individuals.
// Yields themselves are NOT hardcoded here — BoZ auctions T-bills roughly
// every two weeks and yields move with each auction, so the calculator asks
// for the current yield as an input rather than risking a stale rate.
// ---------------------------------------------------------------------------
export const TBILL_WITHHOLDING_TAX_RATE = 0.15;
CAQZED_EOF

echo 'Done. Run: git add -A && git commit -m "Add 6 more calculators" && git push'