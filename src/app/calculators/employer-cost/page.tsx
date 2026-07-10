import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { EmployerCostCalculator } from "@/components/calculators/employer-cost-calculator";

export const metadata: Metadata = {
  title: "Employer Cost Calculator Zambia — True Cost of an Employee",
  description: "Calculate the full statutory cost of an employee to a Zambian employer, including NAPSA, NHIMA and Skills Levy.",
  alternates: { canonical: "/calculators/employer-cost" },
};

export default function EmployerCostPage() {
  return (
    <CalculatorShell
      title="Employer Cost Calculator"
      description="See the true monthly cost of an employee once statutory employer contributions are added on top of gross salary."
      legalReference="NAPSA Act, National Health Insurance Act, and the Skills Development Levy under the Income Tax Act."
      relatedSlugs={["gross-to-net", "napsa", "skills-levy"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Total cost = Gross salary + NAPSA (employer 5%) + NHIMA (employer 1%) + Skills Levy (0.5%)
          </p>
          <p>
            These are the statutory on-costs every employer pays on top of an
            employee&apos;s gross salary — separate from what the employee
            sees deducted from their own payslip.
          </p>
        </>
      }
      faqs={[
        {
          question: "Does this include the employee's own PAYE, NAPSA, and NHIMA?",
          answer:
            "No — those are deducted from the employee's gross pay, not paid on top by the employer. This calculator only shows the employer's additional statutory contributions.",
        },
        {
          question: "What other costs should I budget for?",
          answer:
            "This is the statutory minimum. Employers are also generally required to provide housing assistance, medical cover, and paid leave accrual, which add further to the real cost of an employee.",
        },
      ]}
    >
      <EmployerCostCalculator />
    </CalculatorShell>
  );
}
