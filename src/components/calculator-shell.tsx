import Link from "next/link";
import { Container } from "./container";
import { getCalculator, CALCULATORS } from "@/lib/calculators/registry";
import { RATES_LAST_VERIFIED } from "@/lib/rates";

interface FAQ {
  question: string;
  answer: string;
}

export function CalculatorShell({
  title,
  description,
  legalReference,
  children,
  formulaExplanation,
  faqs,
  relatedSlugs = [],
}: {
  title: string;
  description: string;
  legalReference?: string;
  children: React.ReactNode;
  formulaExplanation: React.ReactNode;
  faqs: FAQ[];
  relatedSlugs?: string[];
}) {
  const related = relatedSlugs
    .map((slug) => CALCULATORS.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <nav className="text-[13px] text-foreground-muted mb-6">
          <Link href="/" className="hover:text-brand-green">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/calculators" className="hover:text-brand-green">Calculators</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="max-w-2xl">
          <h1 className="font-display text-[28px] sm:text-[34px] font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground-muted">
            {description}
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            {/* The interactive calculator */}
            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
              {children}
            </div>

            {/* Formula explanation */}
            <section className="mt-10">
              <h2 className="font-display text-[19px] font-semibold">How this is calculated</h2>
              <div className="mt-3 text-[14px] leading-relaxed text-foreground-muted space-y-3">
                {formulaExplanation}
              </div>
            </section>

            {/* FAQs */}
            {faqs.length > 0 && (
              <section className="mt-10">
                <h2 className="font-display text-[19px] font-semibold">Frequently asked questions</h2>
                <div className="mt-4 space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-border pb-4">
                      <h3 className="text-[14px] font-semibold">{faq.question}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-foreground-muted">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-brand-green-50 p-5">
              <h3 className="text-[13px] font-semibold">Official reference</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-foreground-muted">
                {legalReference ?? "Zambia Revenue Authority (ZRA)"}
              </p>
              <p className="mt-3 text-[12px] text-foreground-muted">
                Rates last verified: {RATES_LAST_VERIFIED}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface-muted p-5">
              <p className="text-[12px] leading-relaxed text-foreground-muted">
                ⚠️ This tool provides estimates for guidance only and is not a
                substitute for advice from ZRA, NAPSA, NHIMA, your employer, or a
                licensed accountant. Always confirm figures before making
                financial decisions.
              </p>
            </div>

            {related.length > 0 && (
              <div>
                <h3 className="text-[13px] font-semibold mb-3">Related calculators</h3>
                <div className="space-y-2">
                  {related.map((calc) =>
                    calc ? (
                      <Link
                        key={calc.slug}
                        href={calc.status === "live" ? `/calculators/${calc.slug}` : "/calculators"}
                        className="block rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[13px] font-medium hover:border-brand-green/40 transition-colors"
                      >
                        {calc.name}
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </div>
  );
}
