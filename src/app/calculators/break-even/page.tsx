import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { BreakEvenCalculator } from "@/components/calculators/break-even-calculator";

export const metadata: Metadata = {
  title: "Break-even Calculator — Units to Cover Your Costs",
  description: "Calculate how many units you need to sell to cover your fixed costs.",
  alternates: { canonical: "/calculators/break-even" },
};

export default function BreakEvenPage() {
  return (
    <CalculatorShell
      title="Break-even Calculator"
      description="Find out how many units you need to sell to cover your fixed costs, and start turning a profit."
      relatedSlugs={["profit-margin", "vat", "turnover-tax"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Break-even units = Fixed costs ÷ (Price − Variable cost)
          </p>
          <p>
            Price minus variable cost is your &quot;contribution margin&quot;
            — how much each sale contributes toward covering your fixed
            costs before you start making a profit.
          </p>
        </>
      }
      faqs={[]}
    >
      <BreakEvenCalculator />
    </CalculatorShell>
  );
}
