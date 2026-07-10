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
