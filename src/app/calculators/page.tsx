import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CalculatorCard } from "@/components/calculator-card";
import { CATEGORIES, getCalculatorsByCategory } from "@/lib/calculators/registry";

export const metadata: Metadata = {
  title: "All Calculators",
  description: "Every calculator on CaQZed, organised by category — salary, tax, loans, business, utilities and more.",
  alternates: { canonical: "/calculators" },
};

export default function CalculatorsPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <h1 className="font-display text-[28px] sm:text-[34px] font-semibold tracking-tight">
          All calculators
        </h1>
        <p className="mt-2 text-[15px] text-foreground-muted max-w-xl">
          Browse every calculator on CaQZed. New calculators are added every
          week — anything marked &quot;coming soon&quot; is on the roadmap.
        </p>

        <div className="mt-10 space-y-14">
          {CATEGORIES.map((category) => {
            const calcs = getCalculatorsByCategory(category.slug);
            if (calcs.length === 0) return null;
            return (
              <section key={category.slug} id={category.slug}>
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-[20px] font-semibold">
                    {category.name}
                  </h2>
                  <span className="text-[13px] text-foreground-muted">
                    {calcs.length} calculator{calcs.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-foreground-muted">
                  {category.description}
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {calcs.map((calc) => (
                    <CalculatorCard key={calc.slug} calc={calc} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
