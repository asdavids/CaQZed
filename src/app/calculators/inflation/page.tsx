import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { InflationCalculator } from "@/components/calculators/inflation-calculator";

export const metadata: Metadata = {
  title: "Inflation Calculator Zambia — What Your Money Will Be Worth",
  description: "See how inflation erodes the purchasing power of your money over time.",
  alternates: { canonical: "/calculators/inflation" },
};

export default function InflationPage() {
  return (
    <CalculatorShell
      slug="inflation"
      title="Inflation Calculator"
      description="See how much you'd need in the future to match today's buying power, at a given inflation rate."
      relatedSlugs={["treasury-bills", "savings-goal", "roi"]}
      formulaExplanation={
        <>
          <p className="font-mono text-[13px] bg-surface-muted rounded-lg px-3 py-2">
            Future amount needed = Today&apos;s amount × (1 + inflation rate)^years
          </p>
          <p>
            This compounds inflation year over year, the same way prices
            actually rise — a small rate can erode a lot of value over a
            longer period.
          </p>
        </>
      }
      faqs={[
        {
          question: "Where do I find the current inflation rate?",
          answer:
            "The Zambia Statistics Agency (ZamStats) publishes the Consumer Price Index and annual inflation rate monthly.",
        },
        {
          question: "Why should I care about this if I'm not investing?",
          answer:
            "Even cash sitting in a low-interest account loses real value every year that inflation outpaces the interest rate — this shows you how much.",
        },
      ]}
    >
      <InflationCalculator />
    </CalculatorShell>
  );
}
