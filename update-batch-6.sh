#!/bin/bash
set -e
echo 'Updating CaQZed: Corporate Tax, Gratuity, Bonus Tax, Pension, Visa & Permit Fees...'

mkdir -p 'src/app/calculators/bonus-tax'
cat > 'src/app/calculators/bonus-tax/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { BonusTaxCalculator } from "@/components/calculators/bonus-tax-calculator";

export const metadata: Metadata = {
  title: "Bonus Tax Calculator Zambia 2026 — Tax Impact of a Bonus",
  description: "See how much tax a bonus adds to your PAYE, and what you'll actually take home.",
  alternates: { canonical: "/calculators/bonus-tax" },
};

export default function BonusTaxPage() {
  return (
    <CalculatorShell
      title="Bonus Tax Calculator"
      description="See how much of your bonus goes to PAYE, and what you'll actually receive."
      legalReference="Uses the 2026 ZRA PAYE bands, applied to salary plus bonus combined."
      relatedSlugs={["paye", "gross-to-net", "leave-pay"]}
      formulaExplanation={
        <>
          <p>
            There's no separate &quot;bonus tax&quot; in Zambia — a bonus is
            simply added to your normal salary for the month it's paid, and
            taxed together through the same progressive PAYE bands. This can
            push part of your income into a higher band for that month.
          </p>
        </>
      }
      faqs={[
        {
          question: "Will my bonus be taxed at a flat higher rate?",
          answer:
            "No — only the portion of your combined salary-plus-bonus that falls into a higher band is taxed at that rate. The rest is still taxed at your normal rates.",
        },
        {
          question: "Does NAPSA or NHIMA apply to bonuses too?",
          answer:
            "This depends on how your payroll treats bonuses — check with your employer, as treatment can vary.",
        },
      ]}
    >
      <BonusTaxCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/corporate-tax'
cat > 'src/app/calculators/corporate-tax/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { CorporateTaxCalculator } from "@/components/calculators/corporate-tax-calculator";

export const metadata: Metadata = {
  title: "Corporate Tax Calculator Zambia 2026 — Company Income Tax",
  description: "Calculate corporate income tax in Zambia by sector: standard, farming/agro-processing, or telecommunications.",
  alternates: { canonical: "/calculators/corporate-tax" },
};

export default function CorporateTaxPage() {
  return (
    <CalculatorShell
      title="Corporate Tax Calculator"
      description="Calculate company income tax based on your business sector's rate."
      legalReference="Income Tax Act, Chapter 323 — standard rate 30%, with reduced rates for specific sectors."
      relatedSlugs={["turnover-tax", "vat", "profit-margin"]}
      formulaExplanation={
        <>
          <p>
            Zambia's standard corporate income tax rate is 30%, but a few
            sectors get different rates: farming and agro-processing pay a
            reduced 10%, while telecommunications companies pay a higher 35%.
          </p>
        </>
      }
      faqs={[
        {
          question: "What if my business doesn't fit these three categories?",
          answer:
            "Mining companies, PPP projects, and a few other special cases have their own separate tax treatment not covered here — check with ZRA or a tax advisor for those.",
        },
        {
          question: "Is this the same as turnover tax?",
          answer:
            "No — turnover tax is a simplified 5% regime for small businesses under K5 million annual turnover, calculated on revenue. Corporate tax is calculated on actual taxable profit, and applies once you're above that threshold.",
        },
      ]}
    >
      <CorporateTaxCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/pension'
cat > 'src/app/calculators/pension/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { PensionProjectionCalculator } from "@/components/calculators/pension-projection-calculator";

export const metadata: Metadata = {
  title: "Pension Contribution Projection Calculator Zambia",
  description: "Project your total NAPSA pension contributions over your working years.",
  alternates: { canonical: "/calculators/pension" },
};

export default function PensionPage() {
  return (
    <CalculatorShell
      title="Pension Contribution Projection"
      description="Project how much will be paid into your NAPSA pension over your remaining working years."
      legalReference="Based on NAPSA's 10% combined contribution rate (5% employee + 5% employer)."
      relatedSlugs={["napsa", "savings-goal", "compound-interest"]}
      formulaExplanation={
        <>
          <p>
            This adds up your combined NAPSA contributions (yours plus your
            employer&apos;s) year by year, assuming your salary grows at a
            steady annual rate.
          </p>
          <p>
            This shows total money paid in — it is deliberately not an
            estimate of your eventual pension payout, since NAPSA calculates
            benefits using its own formula based on your full contribution
            history, which isn&apos;t public enough to replicate accurately
            here.
          </p>
        </>
      }
      faqs={[
        {
          question: "So how do I find out my actual pension amount?",
          answer:
            "Contact NAPSA directly, or check your NAPSA statement — they can give you a benefit projection based on your real contribution history.",
        },
        {
          question: "Why does the calculator stop projecting salary growth at the NAPSA cap?",
          answer:
            "It doesn't — but note that NAPSA contributions themselves are capped at K1,861.80 per side per month regardless of how high your salary grows, so very high earners won't see contributions rise past that ceiling even as salary increases.",
        },
      ]}
    >
      <PensionProjectionCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/terminal-benefits'
cat > 'src/app/calculators/terminal-benefits/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { TerminalBenefitsCalculator } from "@/components/calculators/terminal-benefits-calculator";

export const metadata: Metadata = {
  title: "Terminal Benefits & Gratuity Calculator Zambia 2026",
  description: "Calculate statutory gratuity (25% of basic pay) for fixed-term contracts under the Employment Code Act.",
  alternates: { canonical: "/calculators/terminal-benefits" },
};

export default function TerminalBenefitsPage() {
  return (
    <CalculatorShell
      title="Terminal Benefits Calculator"
      description="Calculate the statutory gratuity owed at the end of a fixed-term employment contract."
      legalReference="Employment Code Act No. 3 of 2019, Section 73."
      relatedSlugs={["leave-pay", "overtime", "gross-to-net"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Gratuity = Total basic pay earned during the contract × 25%
          </p>
          <p>
            This applies to long-term contracts (fixed-term, exceeding 12
            months). The 25% is a statutory minimum — your specific contract
            may specify a higher rate.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does this apply to permanent employees?",
          answer:
            "No — gratuity under Section 73 specifically applies to fixed-term contracts over 12 months. Permanent employees have different terminal benefit entitlements, such as leave pay and notice pay.",
        },
        {
          question: "Is gratuity taxed?",
          answer:
            "Sources genuinely disagree on this — some treat the statutory 25% as tax-favoured under the Income Tax Act, others say it's fully taxed as normal PAYE income. We're not confident enough in either answer to state one here — confirm directly with ZRA or your employer's payroll team before relying on a take-home figure.",
        },
        {
          question: "Am I entitled to gratuity if I resign early?",
          answer:
            "You're generally entitled to gratuity calculated on the months actually worked, not the full contract term, if your contract is terminated before its end date.",
        },
      ]}
    >
      <TerminalBenefitsCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/app/calculators/visa-permit-fees'
cat > 'src/app/calculators/visa-permit-fees/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { VisaPermitFeesCalculator } from "@/components/calculators/visa-permit-fees-calculator";
import { VISA_PERMIT_RATES_LAST_VERIFIED } from "@/lib/visa-permit-rates";

export const metadata: Metadata = {
  title: "Zambia Visa & Permit Fees Calculator 2026",
  description: "Look up official Zambia Department of Immigration visa and permit fees, including administrative charges.",
  alternates: { canonical: "/calculators/visa-permit-fees" },
};

export default function VisaPermitFeesPage() {
  return (
    <CalculatorShell
      title="Visa & Permit Fees Calculator"
      description="Look up the official fee for any Zambian visa or immigration permit, including the administrative charge."
      legalReference={`Zambia Department of Immigration official fee schedule. Rates verified ${VISA_PERMIT_RATES_LAST_VERIFIED}.`}
      relatedSlugs={["passport-fees", "employer-cost", "corporate-tax"]}
      formulaExplanation={
        <p>
          Each service has a statutory fee set by the Department of
          Immigration, plus a small administrative fee (roughly 1% of the
          statutory fee). The total shown is what you&apos;ll actually pay.
        </p>
      }
      faqs={[
        {
          question: "Does this cover Zambian passport fees?",
          answer:
            "No — this covers visas and permits for foreign nationals entering or working in Zambia. Passport application fees for Zambian citizens are a separate service we don't have confident figures for yet.",
        },
        {
          question: "Where do I actually apply?",
          answer:
            "Through the Zambia Department of Immigration, either in person or via their e-Visa/e-Permit online portal, depending on the service.",
        },
      ]}
    >
      <VisaPermitFeesCalculator />
    </CalculatorShell>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/bonus-tax-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculatePAYE } from "@/lib/rates";
import { formatKwacha, formatPercent } from "@/lib/format";

export function BonusTaxCalculator() {
  const [salary, setSalary] = useState("15000");
  const [bonus, setBonus] = useState("5000");

  const s = parseFloat(salary) || 0;
  const b = parseFloat(bonus) || 0;

  const result = useMemo(() => {
    const payeWithoutBonus = calculatePAYE(s).tax;
    const payeWithBonus = calculatePAYE(s + b).tax;
    const extraTax = payeWithBonus - payeWithoutBonus;
    const bonusAfterTax = b - extraTax;
    const marginalRate = b > 0 ? extraTax / b : 0;
    return { extraTax, bonusAfterTax, marginalRate };
  }, [s, b]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Normal monthly salary" value={salary} onChange={setSalary} prefix="K" />
        <NumberField label="Bonus amount" value={bonus} onChange={setBonus} prefix="K" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Bonus after tax" value={formatKwacha(result.bonusAfterTax)} emphasis />
          <ResultCard label="Extra PAYE from the bonus" value={formatKwacha(result.extraTax)} />
          <ResultCard label="Effective rate on the bonus" value={formatPercent(result.marginalRate)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Bonuses are added to your normal salary for the month they're paid and taxed through the same PAYE bands — this shows how much of the bonus that pushes into a higher band.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/corporate-tax-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid, SelectField } from "@/components/calc-ui";
import { CORPORATE_TAX_RATES } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

type Sector = keyof typeof CORPORATE_TAX_RATES;

export function CorporateTaxCalculator() {
  const [profit, setProfit] = useState("500000");
  const [sector, setSector] = useState<Sector>("standard");

  const p = parseFloat(profit) || 0;
  const rate = CORPORATE_TAX_RATES[sector].rate;

  const result = useMemo(() => {
    const tax = p * rate;
    return { tax, afterTax: p - tax };
  }, [p, rate]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Taxable business profit (annual)" value={profit} onChange={setProfit} prefix="K" />
        <SelectField
          label="Sector"
          value={sector}
          onChange={(v) => setSector(v as Sector)}
          options={Object.entries(CORPORATE_TAX_RATES).map(([key, v]) => ({
            value: key,
            label: `${v.label} (${(v.rate * 100).toFixed(0)}%)`,
          }))}
        />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Corporate income tax" value={formatKwacha(result.tax)} emphasis />
          <ResultCard label="Profit after tax" value={formatKwacha(result.afterTax)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This covers the three most common sector rates. Mining royalties, PPP project rates, and other special regimes have their own separate rules — confirm with ZRA if your business falls outside these categories.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/pension-projection-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { calculateNAPSA } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function PensionProjectionCalculator() {
  const [salary, setSalary] = useState("15000");
  const [years, setYears] = useState("20");
  const [salaryGrowth, setSalaryGrowth] = useState("5");

  const s = parseFloat(salary) || 0;
  const y = parseFloat(years) || 0;
  const growth = parseFloat(salaryGrowth) || 0;

  const result = useMemo(() => {
    let currentSalary = s;
    let totalContributions = 0;
    for (let year = 0; year < y; year++) {
      const monthlyContribution = calculateNAPSA(currentSalary) * 2; // employee + employer
      totalContributions += monthlyContribution * 12;
      currentSalary *= 1 + growth / 100;
    }
    return { totalContributions, finalSalary: currentSalary };
  }, [s, y, growth]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Current monthly salary" value={salary} onChange={setSalary} prefix="K" />
        <NumberField label="Years contributing" value={years} onChange={setYears} suffix="years" />
        <NumberField label="Expected annual salary growth" value={salaryGrowth} onChange={setSalaryGrowth} suffix="%" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Total NAPSA contributions (you + employer)" value={formatKwacha(result.totalContributions)} emphasis />
          <ResultCard label="Projected final salary" value={formatKwacha(result.finalSalary)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        This projects total contributions paid into your NAPSA pension over time — it is not your actual pension payout. NAPSA calculates your eventual benefit using its own formula based on your contribution history, which this calculator does not attempt to replicate. Contact NAPSA directly for a benefit estimate.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/terminal-benefits-calculator.tsx' << 'CAQZED_EOF'
"use client";

import { useMemo, useState } from "react";
import { NumberField, ResultCard, ResultsGrid } from "@/components/calc-ui";
import { STATUTORY_GRATUITY_RATE } from "@/lib/rates";
import { formatKwacha } from "@/lib/format";

export function TerminalBenefitsCalculator() {
  const [basicPay, setBasicPay] = useState("8000");
  const [months, setMonths] = useState("36");
  const [rate, setRate] = useState(String(STATUTORY_GRATUITY_RATE * 100));

  const basic = parseFloat(basicPay) || 0;
  const m = parseFloat(months) || 0;
  const r = parseFloat(rate) || 0;

  const result = useMemo(() => {
    const totalBasicEarned = basic * m;
    const gratuity = totalBasicEarned * (r / 100);
    return { totalBasicEarned, gratuity };
  }, [basic, m, r]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Monthly basic pay" value={basicPay} onChange={setBasicPay} prefix="K" />
        <NumberField label="Months worked on contract" value={months} onChange={setMonths} suffix="months" />
        <NumberField label="Gratuity rate" value={rate} onChange={setRate} suffix="%" />
      </div>

      <div className="mt-5">
        <ResultsGrid>
          <ResultCard label="Gratuity" value={formatKwacha(result.gratuity)} emphasis />
          <ResultCard label="Total basic pay earned" value={formatKwacha(result.totalBasicEarned)} />
        </ResultsGrid>
      </div>

      <p className="mt-4 text-[12px] text-foreground-muted">
        Gratuity applies to fixed-term contracts exceeding 12 months, calculated on basic pay only (not allowances). Sources disagree on whether the statutory 25% rate is tax-favoured or fully taxed as normal income — confirm the tax treatment with ZRA or your employer before relying on a take-home figure.
      </p>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components/calculators'
cat > 'src/components/calculators/visa-permit-fees-calculator.tsx' << 'CAQZED_EOF'
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
  { slug: "pension", name: "Pension Calculator", shortDescription: "Estimate pension contributions and payout.", category: "salary-employment", status: "live" },
  { slug: "employer-cost", name: "Employer Cost Calculator", shortDescription: "True cost of an employee to the business.", category: "salary-employment", status: "live" },
  { slug: "overtime", name: "Overtime Calculator", shortDescription: "Overtime pay based on hourly rate.", category: "salary-employment", status: "live" },
  { slug: "bonus-tax", name: "Bonus Tax Calculator", shortDescription: "Tax impact of a bonus or commission.", category: "salary-employment", status: "live" },
  { slug: "hourly-wage", name: "Hourly Wage Calculator", shortDescription: "Convert between hourly, daily and annual pay.", category: "salary-employment", status: "live" },
  { slug: "leave-pay", name: "Leave Pay Calculator", shortDescription: "Leave days payout calculation.", category: "salary-employment", status: "live" },
  { slug: "terminal-benefits", name: "Terminal Benefits Calculator", shortDescription: "Gratuity and terminal benefits estimate.", category: "salary-employment", status: "live" },

  // --- Business ---
  { slug: "vat", name: "VAT Calculator", shortDescription: "Add or remove 16% VAT from any amount.", category: "business", status: "live" },
  { slug: "profit-margin", name: "Profit Margin Calculator", shortDescription: "Margin, markup and selling price.", category: "business", status: "live" },
  { slug: "turnover-tax", name: "Turnover Tax Calculator", shortDescription: "5% turnover tax for small businesses.", category: "business", status: "live" },
  { slug: "corporate-tax", name: "Corporate Tax Calculator", shortDescription: "Company income tax estimate.", category: "business", status: "live" },
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
  { slug: "visa-permit-fees", name: "Visa & Permit Fees Calculator", shortDescription: "Official visa and immigration permit fees.", category: "government", status: "live" },

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

// ---------------------------------------------------------------------------
// Corporate Income Tax — sector-specific rates
// Source: PwC Worldwide Tax Summaries, "Zambia — Corporate — Taxes on
// corporate income" and "Significant developments", reviewed 2026.
// ---------------------------------------------------------------------------
export const CORPORATE_TAX_RATES = {
  standard: { label: "Standard (most businesses)", rate: 0.3 },
  farming: { label: "Farming / agro-processing", rate: 0.1 },
  telecom: { label: "Telecommunications", rate: 0.35 },
} as const;

// ---------------------------------------------------------------------------
// Gratuity — Employment Code Act No. 3 of 2019, Section 73
// Statutory minimum 25% of basic pay earned during a long-term (fixed-term,
// over 12 months) contract. Cross-verified against the Act text, Ministry of
// Labour FAQ, and multiple legal summaries (Paul Hastings, Mondaq).
// NOTE: tax treatment of gratuity is disputed between sources — some treat
// the statutory 25% as tax-favoured, others say it's fully taxed as normal
// income. This calculator states the gratuity amount only and does not take
// a position on its tax treatment — confirm with ZRA or your employer.
// ---------------------------------------------------------------------------
export const STATUTORY_GRATUITY_RATE = 0.25;
CAQZED_EOF

mkdir -p 'src/lib'
cat > 'src/lib/visa-permit-rates.ts' << 'CAQZED_EOF'
/**
 * VISA & PERMIT FEES
 * Source: Zambia Department of Immigration official pricing page,
 * https://www.zambiaimmigration.gov.zm/for-residents/pricing-page/
 * Fetched directly 2026-07-09. Visa fees in USD, permit fees in ZMW.
 * "Total" = statutory fee + 10% administrative fee, as published.
 */

export const VISA_PERMIT_RATES_LAST_VERIFIED = "2026-07-09";

export interface FeeItem {
  service: string;
  statutoryFee: number;
  adminFee: number;
  total: number;
  currency: "USD" | "ZMW";
}

export const VISA_FEES: FeeItem[] = [
  { service: "Single Entry Visa", statutoryFee: 50, adminFee: 0.55, total: 50.55, currency: "USD" },
  { service: "Double Entry Visa", statutoryFee: 80, adminFee: 0.88, total: 80.88, currency: "USD" },
  { service: "Multiple Entry Visa", statutoryFee: 150, adminFee: 1.65, total: 151.65, currency: "USD" },
  { service: "Day Tripper Visa", statutoryFee: 20, adminFee: 0.22, total: 20.22, currency: "USD" },
  { service: "KAZA UniVisa", statutoryFee: 50, adminFee: 0.55, total: 50.55, currency: "USD" },
];

export const PERMIT_FEES_PRIVATE: FeeItem[] = [
  { service: "Cross Border Permit — Issuance", statutoryFee: 1500, adminFee: 15, total: 1515, currency: "ZMW" },
  { service: "Cross Border Permit — Renewal", statutoryFee: 2250, adminFee: 25, total: 2275, currency: "ZMW" },
  { service: "Employment Permit — Issuance", statutoryFee: 6000, adminFee: 60, total: 6060, currency: "ZMW" },
  { service: "Employment Permit — Renewal", statutoryFee: 7000, adminFee: 70, total: 7070, currency: "ZMW" },
  { service: "Investor's Permit — Issuance", statutoryFee: 4000, adminFee: 40, total: 4040, currency: "ZMW" },
  { service: "Investor's Permit — Renewal", statutoryFee: 5000, adminFee: 50, total: 5050, currency: "ZMW" },
  { service: "Residence Permit — Issuance", statutoryFee: 5000, adminFee: 50, total: 5050, currency: "ZMW" },
  { service: "Spouse Permit — Issuance", statutoryFee: 750, adminFee: 7.5, total: 757.5, currency: "ZMW" },
  { service: "Spouse Permit — Renewal", statutoryFee: 1500, adminFee: 15, total: 1515, currency: "ZMW" },
  { service: "Study Permit — Issuance", statutoryFee: 2250, adminFee: 22.5, total: 2272.5, currency: "ZMW" },
  { service: "Study Permit — Renewal", statutoryFee: 3000, adminFee: 30, total: 3030, currency: "ZMW" },
  { service: "Temporary Employment Permit — Issuance", statutoryFee: 4500, adminFee: 45, total: 4545, currency: "ZMW" },
  { service: "Temporary Permit — Issuance", statutoryFee: 6000, adminFee: 60, total: 6060, currency: "ZMW" },
  { service: "Transit Permit — Issuance", statutoryFee: 3000, adminFee: 30, total: 3030, currency: "ZMW" },
  { service: "Visiting Permit — Issuance", statutoryFee: 1700, adminFee: 17, total: 1717, currency: "ZMW" },
  { service: "Visiting Permit — Renewal", statutoryFee: 2500, adminFee: 25, total: 2525, currency: "ZMW" },
];

export const PERMIT_FEES_NGO: FeeItem[] = [
  { service: "Employment Permit — Issuance (NGO/Gov't)", statutoryFee: 2000, adminFee: 20, total: 2020, currency: "ZMW" },
  { service: "Employment Permit — Renewal (NGO/Gov't)", statutoryFee: 3000, adminFee: 30, total: 3030, currency: "ZMW" },
  { service: "Residence Permit — Issuance (NGO/Gov't)", statutoryFee: 1875, adminFee: 18.75, total: 1893.75, currency: "ZMW" },
  { service: "Study Permit — Issuance (NGO/Gov't)", statutoryFee: 1125, adminFee: 11.25, total: 1136.25, currency: "ZMW" },
  { service: "Temporary Permit — Issuance (NGO/Gov't)", statutoryFee: 3000, adminFee: 30, total: 3030, currency: "ZMW" },
];

export const ALL_FEE_ITEMS = [
  ...VISA_FEES,
  ...PERMIT_FEES_PRIVATE,
  ...PERMIT_FEES_NGO,
];
CAQZED_EOF

echo 'Done. Run: git add -A && git commit -m "Add 5 more calculators" && git push'