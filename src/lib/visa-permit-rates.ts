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
