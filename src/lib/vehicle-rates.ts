/**
 * VEHICLE RATES — import duty and road tax.
 *
 * Sources:
 * - Import duty: ZRA "Used Motor Vehicle Specific Duty Rates" schedule,
 *   effective 2025 (zra.org.zm). Specific duty is a flat Kwacha amount per
 *   engine-capacity/body-type/age band — NOT a percentage of vehicle value —
 *   for the used vehicles (over 2 years old) that make up the large majority
 *   of imports. Carbon emission surtax is added on top, based on engine size.
 * - Road tax: RTSA fee-unit schedule under Statutory Instrument No. 25 of
 *   2024 (effective 20 May 2024), fee unit value K0.40. Based on gross
 *   vehicle weight (GVW), not engine size.
 *
 * NOTE: Newer vehicles (under 2 years old) and hybrid/electric vehicles are
 * assessed differently (ad valorem, i.e. a percentage of CIF value) — this
 * calculator covers the standard used-vehicle specific duty schedule, which
 * applies to the majority of vehicles imported into Zambia.
 */

export const VEHICLE_RATES_LAST_VERIFIED = "2026-07-09";

export type BodyType = "sedan" | "hatchback" | "stationWagon" | "suv";
export type AgeBand = "over5" | "years2to5";

interface DutyBand {
  label: string;
  maxCc: number; // Infinity for "over"
  rates: Record<BodyType, Record<AgeBand, number>>;
}

export const IMPORT_DUTY_SCHEDULE: DutyBand[] = [
  {
    label: "1000cc and under",
    maxCc: 1000,
    rates: {
      sedan: { over5: 25_138.6, years2to5: 39_461.45 },
      hatchback: { over5: 25_138.6, years2to5: 34_020.5 },
      stationWagon: { over5: 25_138.6, years2to5: 39_461.45 },
      suv: { over5: 31_869.84, years2to5: 48_866.53 },
    },
  },
  {
    label: "1001cc – 1500cc",
    maxCc: 1500,
    rates: {
      sedan: { over5: 29_491.36, years2to5: 50_343.35 },
      hatchback: { over5: 29_491.36, years2to5: 44_902.4 },
      stationWagon: { over5: 29_491.36, years2to5: 50_340.6 },
      suv: { over5: 36_508.57, years2to5: 56_597.74 },
    },
  },
  {
    label: "1501cc – 2500cc",
    maxCc: 2500,
    rates: {
      sedan: { over5: 33_844.12, years2to5: 61_225.25 },
      hatchback: { over5: 33_844.12, years2to5: 55_784.3 },
      stationWagon: { over5: 36_020.71, years2to5: 61_225.25 },
      suv: { over5: 49_078.78, years2to5: 77_548.1 },
    },
  },
  {
    label: "2501cc – 3000cc",
    maxCc: 3000,
    rates: {
      sedan: { over5: 41_461.45, years2to5: 66_666.2 },
      hatchback: { over5: 41_461.45, years2to5: 65_666.2 },
      stationWagon: { over5: 41_461.45, years2to5: 66_666.2 },
      suv: { over5: 59_525.4, years2to5: 88_430.0 },
    },
  },
  {
    label: "Over 3000cc",
    maxCc: Infinity,
    rates: {
      sedan: { over5: 46_902.4, years2to5: 82_989.05 },
      hatchback: { over5: 46_902.4, years2to5: 72_107.15 },
      stationWagon: { over5: 46_902.4, years2to5: 82_989.05 },
      suv: { over5: 68_666.2, years2to5: 104_752.85 },
    },
  },
];

export const CARBON_SURTAX_BANDS = [
  { maxCc: 1500, surtax: 123.2 },
  { maxCc: 2000, surtax: 246.4 },
  { maxCc: 3000, surtax: 352.0 },
  { maxCc: Infinity, surtax: 484.0 },
];

export function getDutyBand(engineCc: number): DutyBand {
  return (
    IMPORT_DUTY_SCHEDULE.find((b) => engineCc <= b.maxCc) ??
    IMPORT_DUTY_SCHEDULE[IMPORT_DUTY_SCHEDULE.length - 1]
  );
}

export function getCarbonSurtax(engineCc: number): number {
  const band = CARBON_SURTAX_BANDS.find((b) => engineCc <= b.maxCc);
  return band ? band.surtax : CARBON_SURTAX_BANDS[CARBON_SURTAX_BANDS.length - 1].surtax;
}

export function calculateImportDuty(
  engineCc: number,
  bodyType: BodyType,
  ageBand: AgeBand
): { specificDuty: number; carbonSurtax: number; total: number; bandLabel: string } {
  const band = getDutyBand(engineCc);
  const specificDuty = band.rates[bodyType][ageBand];
  const carbonSurtax = getCarbonSurtax(engineCc);
  return { specificDuty, carbonSurtax, total: specificDuty + carbonSurtax, bandLabel: band.label };
}

// ---------------------------------------------------------------------------
// Road tax — RTSA fee-unit schedule, SI No. 25 of 2024, fee unit = K0.40
// ---------------------------------------------------------------------------
export const ROAD_TAX_FEE_UNIT_VALUE = 0.4;

export const ROAD_TAX_BANDS = [
  { label: "Motorcycle", maxKg: 0, isMotorcycle: true, feeUnits: 183.7 },
  { label: "Up to 800 kg", maxKg: 800, feeUnits: 1_100 },
  { label: "801 – 1,000 kg", maxKg: 1_000, feeUnits: 1_283.37 },
  { label: "1,001 – 1,200 kg", maxKg: 1_200, feeUnits: 1_466.63 },
  { label: "1,201 – 1,400 kg", maxKg: 1_400, feeUnits: 1_650 },
  { label: "1,401 – 1,600 kg", maxKg: 1_600, feeUnits: 1_833.37 },
  { label: "1,601 – 2,000 kg", maxKg: 2_000, feeUnits: 2_016.63 },
  { label: "2,001 – 4,000 kg", maxKg: 4_000, feeUnits: 2_292.63 },
  { label: "4,001 – 6,000 kg", maxKg: 6_000, feeUnits: 2_566.63 },
  { label: "6,001 – 9,000 kg", maxKg: 9_000, feeUnits: 2_933.37 },
  { label: "9,001 – 12,000 kg", maxKg: 12_000, feeUnits: 3_300 },
  { label: "12,001 – 15,000 kg", maxKg: 15_000, feeUnits: 3_666.63 },
  { label: "15,001 – 17,000 kg", maxKg: 17_000, feeUnits: 4_583.37 },
  { label: "17,001 – 20,000 kg", maxKg: 20_000, feeUnits: 5_958.37 },
  { label: "Above 20,000 kg", maxKg: Infinity, feeUnits: 13_750 },
];

export function calculateRoadTax(gvwKg: number, isMotorcycle: boolean) {
  const band = isMotorcycle
    ? ROAD_TAX_BANDS[0]
    : ROAD_TAX_BANDS.slice(1).find((b) => gvwKg <= b.maxKg) ??
      ROAD_TAX_BANDS[ROAD_TAX_BANDS.length - 1];
  const annual = band.feeUnits * ROAD_TAX_FEE_UNIT_VALUE;
  return { annual, quarterly: annual / 4, bandLabel: band.label };
}
