import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { SavingsGoalCalculator } from "@/components/calculators/savings-goal-calculator";

export const metadata: Metadata = {
  title: "Savings Goal Calculator — How Much to Save Each Month",
  description: "Calculate how much you need to save each month to hit a savings target.",
  alternates: { canonical: "/calculators/savings-goal" },
};

export default function SavingsGoalPage() {
  return (
    <CalculatorShell
      slug="savings-goal"
      title="Savings Goal Calculator"
      description="Work out how much to save each month to reach your target, with or without interest."
      relatedSlugs={["fixed-deposit", "compound-interest", "budget-planner"]}
      formulaExplanation={
        <>
          <p>
            Without interest, this simply spreads the remaining amount evenly
            across your months. With an interest rate entered, it accounts
            for growth on both your current savings and each future
            contribution, using the future value of an annuity formula.
          </p>
        </>
      }
      faqs={[
        {
          question: "What if I leave the interest rate at 0%?",
          answer:
            "That's fine — it just means the calculator assumes your savings sit in a non-interest-bearing account, which gives a simpler, slightly higher monthly savings figure.",
        },
      ]}
    >
      <SavingsGoalCalculator />
    </CalculatorShell>
  );
}
