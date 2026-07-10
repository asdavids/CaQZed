import type { Metadata } from "next";
import { CalculatorShell } from "@/components/calculator-shell";
import { VisaPermitFeesCalculator } from "@/components/calculators/visa-permit-fees-calculator";
import { VISA_PERMIT_RATES_LAST_VERIFIED } from "@/lib/visa-permit-rates";

export const metadata: Metadata = {
  title: "Zambia Visa & Permit Fees Calculator 2026",
  description: "Look up official Zambia Department of Immigration visa and permit fees, including administrative charges.",
  alternates: { canonical: "/calculators/visa-permit-fees" },
};

export default function VisaPermitFeesPage() {
  return (
    <CalculatorShell
      title="Visa & Permit Fees Calculator"
      description="Look up the official fee for any Zambian visa or immigration permit, including the administrative charge."
      legalReference={`Zambia Department of Immigration official fee schedule. Rates verified ${VISA_PERMIT_RATES_LAST_VERIFIED}.`}
      relatedSlugs={["passport-fees", "employer-cost", "corporate-tax"]}
      formulaExplanation={
        <p>
          Each service has a statutory fee set by the Department of
          Immigration, plus a small administrative fee (roughly 1% of the
          statutory fee). The total shown is what you&apos;ll actually pay.
        </p>
      }
      faqs={[
        {
          question: "Does this cover Zambian passport fees?",
          answer:
            "No — this covers visas and permits for foreign nationals entering or working in Zambia. Passport application fees for Zambian citizens are a separate service we don't have confident figures for yet.",
        },
        {
          question: "Where do I actually apply?",
          answer:
            "Through the Zambia Department of Immigration, either in person or via their e-Visa/e-Permit online portal, depending on the service.",
        },
      ]}
    >
      <VisaPermitFeesCalculator />
    </CalculatorShell>
  );
}
