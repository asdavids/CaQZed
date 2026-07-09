# CaQZed — Calculate Anything in Zambia

Free calculators for salary, tax, business, loans and everyday life in Zambia.
Built with Next.js, React and Tailwind CSS.

## Live calculators in this version
- PAYE Calculator
- NAPSA Calculator
- NHIMA Calculator
- Gross to Net Salary Calculator
- VAT Calculator
- Loan Repayment Calculator
- Age Calculator
- Percentage Calculator

More calculators are added over time — see `src/lib/calculators/registry.ts`
for the full roadmap of 250+ planned calculators (each one already has a
name, category and description; building one is just adding a `page.tsx` +
a small calculation component following the existing pattern).

## Getting started locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Updating official rates

All tax/statutory rates (PAYE bands, NAPSA, NHIMA, VAT) live in one file:
`src/lib/rates.ts`. Update the numbers there when ZRA/NAPSA/NHIMA change
rates — every calculator that uses them updates automatically.

## Deployment

This app deploys to Vercel with zero configuration — import the GitHub repo
at vercel.com/new and click Deploy.
