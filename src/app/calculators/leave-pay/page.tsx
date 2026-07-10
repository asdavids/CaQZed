import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { LeavePayCalculator } from "@/components/calculators/leave-pay-calculator";

export const metadata: Metadata = {
  title: "Leave Pay Calculator Zambia — Employment Code Act Fifth Schedule",
  description: "Calculate your annual leave payout using the Employment Code Act's official formula.",
  alternates: { canonical: "/calculators/leave-pay" },
};

export default function LeavePayPage() {
  return (
    <CalculatorShell
      title="Leave Pay Calculator"
      description="Calculate the value of your accrued annual leave using the Employment Code Act's Fifth Schedule formula."
      legalReference="Employment Code Act No. 3 of 2019, Sections 36-37 and the Fifth Schedule."
      relatedSlugs={["overtime", "terminal-benefits", "gross-to-net"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Leave pay = (Full monthly pay × Leave days) ÷ 26
          </p>
          <p>
            &quot;Full pay&quot; includes basic pay plus regular allowances
            (like housing or transport), but not one-off bonuses. The
            statutory minimum entitlement is 2 days of leave per month worked
            (24 days a year), available after 12 months of continuous
            service.
          </p>
        </>
      }
      faqs={[
        {
          question: "What happens to leave I don't use?",
          answer:
            "You can carry over up to 6 days to the following year. Anything beyond that must either be taken or paid out by your employer.",
        },
        {
          question: "Is leave pay taxed?",
          answer:
            "Yes — leave payouts, including at resignation or termination, are subject to PAYE like normal salary.",
        },
      ]}
    >
      <LeavePayCalculator />
    </CalculatorShell>
  );
}
