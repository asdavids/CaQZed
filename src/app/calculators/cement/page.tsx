import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { CementCalculator } from "@/components/calculators/cement-calculator";

export const metadata: Metadata = {
  title: "Cement Calculator — Bags Needed for a Concrete Slab",
  description: "Calculate how many bags of cement you need for a slab, based on dimensions and mix ratio.",
  alternates: { canonical: "/calculators/cement" },
};

export default function CementPage() {
  return (
    <CalculatorShell
      slug="cement"
      title="Cement Calculator"
      description="Work out how many 50kg bags of cement you need for a concrete slab or foundation."
      legalReference="Standard construction industry estimating ratios (cement:sand:stone by volume)."
      relatedSlugs={["paint", "fertilizer", "budget-planner"]}
      formulaExplanation={
        <>
          <p>
            First we calculate the volume of concrete you need (length ×
            width × thickness), then multiply by the bags-per-cubic-metre
            figure for your chosen mix ratio.
          </p>
        </>
      }
      faqs={[
        {
          question: "Which mix ratio should I use?",
          answer:
            "1:2:4 is the general-purpose mix for slabs and foundations. Use 1:1.5:3 for structural elements like columns and beams that need higher strength, and 1:3:6 for mass concrete like footings where strength matters less. When in doubt, ask your site engineer.",
        },
        {
          question: "Should I add extra for wastage?",
          answer:
            "Yes — it's common practice to add 5-10% extra to account for spillage, uneven ground, and mixing losses. This calculator gives the theoretical minimum.",
        },
      ]}
    >
      <CementCalculator />
    </CalculatorShell>
  );
}
