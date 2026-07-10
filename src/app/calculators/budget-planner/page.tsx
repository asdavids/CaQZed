import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { BudgetPlannerCalculator } from "@/components/calculators/budget-planner-calculator";

export const metadata: Metadata = {
  title: "Budget Planner — Monthly Income and Expense Tracker",
  description: "Plan your monthly budget against your income and see what's left to save.",
  alternates: { canonical: "/calculators/budget-planner" },
};

export default function BudgetPlannerPage() {
  return (
    <CalculatorShell
      slug="budget-planner"
      title="Budget Planner"
      description="See how your monthly income stacks up against your expenses, and what's left to save."
      relatedSlugs={["savings-goal", "debt-payoff", "gross-to-net"]}
      formulaExplanation={
        <p>
          This adds up your expense categories and subtracts the total from
          your income — a simple starting point for a monthly budget. A
          common rule of thumb is the 50/30/20 split: 50% needs, 30% wants,
          20% savings, though your own priorities may differ.
        </p>
      }
      faqs={[]}
    >
      <BudgetPlannerCalculator />
    </CalculatorShell>
  );
}
