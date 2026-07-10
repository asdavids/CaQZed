import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important information about the accuracy of CaQZed's calculators.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <h1 className="font-display text-[28px] font-semibold tracking-tight">Disclaimer</h1>
        <p className="mt-2 text-[13px] text-foreground-muted">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-[14px] leading-relaxed text-foreground-muted">
          <section>
            <p>
              CaQZed&apos;s calculators are built using publicly available
              rates and formulas from official sources — including ZRA,
              NAPSA, NHIMA, RTSA, the Bank of Zambia, and the Employment Code
              Act — verified at the time each calculator was built or last
              updated. Every calculator page shows a &quot;rates last
              verified&quot; date and, where relevant, its official
              reference.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Rates can change</h2>
            <p>
              Government rates, tax bands, and fees are revised from time to
              time — often around the national budget, but sometimes
              mid-year. CaQZed aims to keep every calculator current, but
              there may be a gap between an official change and our update.
              If a figure seems off, please check directly with the relevant
              authority.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Estimates only</h2>
            <p>
              No calculator on CaQZed accounts for every possible individual
              circumstance — exemptions, special contract terms, sector-
              specific rules, or unusual cases may all change your actual
              figure. Treat every result as a starting point for your own
              research, not a final answer.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Editable inputs</h2>
            <p>
              Some calculators (like fuel cost, treasury bills, or the extra
              fees in the vehicle import cost calculator) intentionally ask
              you to enter current figures yourself, rather than relying on a
              rate that would quickly become outdated. The accuracy of those
              results depends on the figures you provide.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Not professional advice</h2>
            <p>
              Nothing on CaQZed constitutes financial, tax, legal, or other
              professional advice. For decisions with real financial
              consequences, consult a licensed professional.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
