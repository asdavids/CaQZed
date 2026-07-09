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
