import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { DebtPayoffCalculator } from "@/components/calculators/debt-payoff-calculator";

export const metadata: Metadata = {
  title: "Debt Payoff Calculator — Time and Interest to Clear a Debt",
  description: "Calculate how long it will take to pay off a debt, and how much interest you'll pay.",
  alternates: { canonical: "/calculators/debt-payoff" },
};

export default function DebtPayoffPage() {
  return (
    <CalculatorShell
      slug="debt-payoff"
      title="Debt Payoff Calculator"
      description="See how many months it will take to clear a debt at a fixed monthly payment, and the total interest you'll pay."
      relatedSlugs={["loan", "budget-planner", "loan-affordability"]}
      formulaExplanation={
        <p>
          Each month, interest is added to your remaining balance, then your
          payment is subtracted. This repeats until the balance reaches
          zero — the same way real loan and credit balances are worked out.
        </p>
      }
      faqs={[
        {
          question: "What if my payment barely covers the interest?",
          answer:
            "If your monthly payment is close to or below the interest charged each month, your balance will shrink very slowly or not at all — the calculator will flag this so you know to increase your payment.",
        },
      ]}
    >
      <DebtPayoffCalculator />
    </CalculatorShell>
  );
}
