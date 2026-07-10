import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { VatCalculator } from "@/components/calculators/vat-calculator";

export const metadata: Metadata = {
  title: "VAT Calculator Zambia 2026 — Add or Remove 16% VAT",
  description:
    "Add or remove Zambia's standard 16% VAT from any amount instantly.",
  alternates: { canonical: "/calculators/vat" },
};

export default function VatPage() {
  return (
    <CalculatorShell
      slug="vat"
      title="VAT Calculator"
      description="Add or remove Zambia's standard 16% VAT from any price."
      legalReference="Value Added Tax Act, Chapter 331 of the Laws of Zambia — administered by ZRA."
      relatedSlugs={["paye", "turnover-tax", "profit-margin"]}
      formulaExplanation={
        <>
          <p>Zambia&apos;s standard VAT rate is 16%.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To add VAT: Net amount × 16% = VAT, then Net + VAT = Gross</li>
            <li>To remove VAT: Gross ÷ 1.16 = Net, then Gross − Net = VAT</li>
          </ul>
        </>
      }
      faqs={[
        {
          question: "Does VAT apply to everything?",
          answer:
            "No. Some goods and services are zero-rated or exempt, such as most exports. Standard-rated goods and services are taxed at 16%.",
        },
        {
          question: "Who charges VAT?",
          answer:
            "Only businesses registered for VAT with ZRA can legally charge it. Registration is generally required once turnover exceeds the ZRA threshold.",
        },
      ]}
    >
      <VatCalculator />
    </CalculatorShell>
  );
}
