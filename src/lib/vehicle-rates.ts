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

// ---------------------------------------------------------------------------
// Goods vehicles — rated by Gross Vehicle Weight (GVW), not engine size.
// Source: ZRA Used Motor Vehicle Specific Duty Schedule, effective 2025
// (zra.org.zm/download/used-motor-vehicle-specific-duty-rates-2025).
// ---------------------------------------------------------------------------
export type GoodsVehicleType = "singleCab" | "doubleCab" | "panelVan" | "truck";

interface GvwBand {
  label: string;
  maxTonnes: number;
  over5: number;
  years2to5: number;
}

export const GOODS_VEHICLE_SCHEDULE: Record<GoodsVehicleType, GvwBand[]> = {
  singleCab: [
    { label: "1t – 1.5t GVW", maxTonnes: 1.5, over5: 25_138.6, years2to5: 55_784.3 },
    { label: "1.5t – 3t GVW", maxTonnes: 3, over5: 41_461.45, years2to5: 66_666.2 },
    { label: "3t – 5t GVW", maxTonnes: 5, over5: 46_902.4, years2to5: 77_548.1 },
  ],
  doubleCab: [
    { label: "Up to 3t GVW", maxTonnes: 3, over5: 63_225.25, years2to5: 77_548.1 },
    { label: "3t – 5t GVW", maxTonnes: 5, over5: 69_210.29, years2to5: 85_165.43 },
  ],
  panelVan: [
    { label: "Up to 1t GVW", maxTonnes: 1, over5: 22_309.32, years2to5: 34_510.2 },
    { label: "1t – 1.5t GVW", maxTonnes: 1.5, over5: 25_138.6, years2to5: 39_461.45 },
    { label: "1.5t – 3t GVW", maxTonnes: 3, over5: 41_461.45, years2to5: 44_902.4 },
    { label: "3t – 5t GVW", maxTonnes: 5, over5: 46_902.4, years2to5: 55_784.3 },
  ],
  truck: [
    { label: "Up to 2t GVW", maxTonnes: 2, over5: 25_954.74, years2to5: 50_343.35 },
    { label: "2t – 5t GVW", maxTonnes: 5, over5: 30_579.55, years2to5: 55_784.3 },
    { label: "5t – 10t GVW", maxTonnes: 10, over5: 36_020.5, years2to5: 66_666.2 },
    { label: "10t – 20t GVW", maxTonnes: 20, over5: 44_726.02, years2to5: 77_548.1 },
    { label: "Over 20t GVW", maxTonnes: Infinity, over5: 52_343.35, years2to5: 88_430.0 },
  ],
};

export function calculateGoodsVehicleDuty(
  vehicleType: GoodsVehicleType,
  gvwTonnes: number,
  ageBand: AgeBand
) {
  const bands = GOODS_VEHICLE_SCHEDULE[vehicleType];
  const band = bands.find((b) => gvwTonnes <= b.maxTonnes) ?? bands[bands.length - 1];
  const specificDuty = band[ageBand];
  return { specificDuty, bandLabel: band.label };
}

// ---------------------------------------------------------------------------
// Buses & coaches — rated by seating capacity.
// ---------------------------------------------------------------------------
interface SeatBand {
  label: string;
  maxSeats: number;
  over5: number;
  years2to5: number;
}

export const BUS_SCHEDULE: SeatBand[] = [
  { label: "Up to 14 seats", maxSeats: 14, over5: 36_020.5, years2to5: 66_666.2 },
  { label: "15 – 32 seats", maxSeats: 32, over5: 38_196.88, years2to5: 99_511.3 },
  { label: "33 – 44 seats", maxSeats: 44, over5: 52_343.35, years2to5: 219_012.8 },
  { label: "Over 44 seats", maxSeats: Infinity, over5: 112_193.8, years2to5: 273_422.1 },
];

export function calculateBusDuty(seats: number, ageBand: AgeBand) {
  const band = BUS_SCHEDULE.find((b) => seats <= b.maxSeats) ?? BUS_SCHEDULE[BUS_SCHEDULE.length - 1];
  return { specificDuty: band[ageBand], bandLabel: band.label };
}

// ---------------------------------------------------------------------------
// Motorcycles — rated by engine capacity, separate bands from passenger cars.
// ---------------------------------------------------------------------------
interface MotoBand {
  label: string;
  maxCc: number;
  over5: number;
  years2to5: number;
}

export const MOTORCYCLE_SCHEDULE: MotoBand[] = [
  { label: "50cc and under", maxCc: 50, over5: 4_049.8, years2to5: 4_275.21 },
  { label: "51cc – 250cc", maxCc: 250, over5: 4_274.8, years2to5: 5_000.21 },
  { label: "251cc – 500cc", maxCc: 500, over5: 4_499.8, years2to5: 5_725.21 },
  { label: "501cc – 800cc", maxCc: 800, over5: 4_724.8, years2to5: 6_450.21 },
  { label: "Over 800cc", maxCc: Infinity, over5: 6_074.8, years2to5: 12_975.21 },
];

export function calculateMotorcycleDuty(engineCc: number, ageBand: AgeBand) {
  const band =
    MOTORCYCLE_SCHEDULE.find((b) => engineCc <= b.maxCc) ??
    MOTORCYCLE_SCHEDULE[MOTORCYCLE_SCHEDULE.length - 1];
  return { specificDuty: band[ageBand], bandLabel: band.label };
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
// Ad valorem duty — used instead of the specific duty schedule for vehicles
// under 2 years old, and for hybrid/electric vehicles of any age, since the
// flat specific-duty schedule above does not apply to them.
// Source: ZRA Motor Vehicle Tax Calculator methodology — 25% customs duty on
// CIF value, 30% excise duty on the resulting excisable value, 16% VAT on
// the resulting vatable value (each duty cascades onto the value including
// the previous one). Cross-verified against a ZRA worked example.
// ---------------------------------------------------------------------------
export const AD_VALOREM_CUSTOMS_RATE = 0.25;
export const AD_VALOREM_EXCISE_RATE = 0.3;
export const AD_VALOREM_VAT_RATE = 0.16;

export function calculateAdValoremDuty(cifValueZmw: number, engineCc: number) {
  const customsDuty = cifValueZmw * AD_VALOREM_CUSTOMS_RATE;
  const excisableValue = cifValueZmw + customsDuty;
  const exciseDuty = excisableValue * AD_VALOREM_EXCISE_RATE;
  const vatableValue = excisableValue + exciseDuty;
  const vat = vatableValue * AD_VALOREM_VAT_RATE;
  const carbonSurtax = getCarbonSurtax(engineCc);
  const total = customsDuty + exciseDuty + vat + carbonSurtax;
  return { customsDuty, exciseDuty, vat, carbonSurtax, total };
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
