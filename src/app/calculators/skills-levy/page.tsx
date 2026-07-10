import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { SkillsLevyCalculator } from "@/components/calculators/skills-levy-calculator";

export const metadata: Metadata = {
  title: "Skills Development Levy Calculator Zambia",
  description: "Calculate the 0.5% Skills Development Levy on your business payroll.",
  alternates: { canonical: "/calculators/skills-levy" },
};

export default function SkillsLevyPage() {
  return (
    <CalculatorShell
      title="Skills Levy Calculator"
      description="Calculate the Skills Development Levy your business owes, based on total payroll."
      legalReference="Skills Development Levy Act — administered by ZRA, 0.5% of payroll."
      relatedSlugs={["employer-cost", "napsa", "turnover-tax"]}
      formulaExplanation={
        <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
          Skills Levy = Total monthly payroll × 0.5%
        </p>
      }
      faqs={[
        {
          question: "Who pays the Skills Development Levy?",
          answer:
            "It's an employer-only levy, paid on your total payroll — it's not deducted from any individual employee's salary.",
        },
      ]}
    >
      <SkillsLevyCalculator />
    </CalculatorShell>
  );
}
