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
