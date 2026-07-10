import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using CaQZed's calculators and website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <h1 className="font-display text-[28px] font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-2 text-[13px] text-foreground-muted">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-[14px] leading-relaxed text-foreground-muted">
          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Using CaQZed</h2>
            <p>
              CaQZed is a free platform of calculators for use in Zambia. By
              using this site, you agree to these terms. If you don&apos;t
              agree, please don&apos;t use the site.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Estimates, not advice</h2>
            <p>
              Every calculator on CaQZed produces an estimate based on
              publicly available rates and formulas at the time it was built.
              Results are for guidance only and are not financial, legal, or
              tax advice. Always confirm important figures with ZRA, NAPSA,
              NHIMA, RTSA, your employer, a licensed accountant, or another
              relevant authority before making decisions based on them.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">No liability</h2>
            <p>
              CaQZed is provided &quot;as is&quot;, without warranty of any
              kind. We work to keep every rate accurate and up to date, but
              we can&apos;t guarantee the results are error-free or that
              government rates haven&apos;t changed since a calculator was
              last verified. CaQZed is not liable for any loss or decision
              made based on figures from this site.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">The Agents &amp; Drivers directory</h2>
            <p>
              CaQZed does not vet, verify, or guarantee any agent or driver
              listed in the directory. Any arrangement you make with a listed
              person is between you and them — confirm credentials and agree
              on terms yourself before engaging their services.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Fair use</h2>
            <p>
              Please don&apos;t attempt to disrupt the site, scrape it at a
              scale that harms performance for other users, or use it for
              unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Changes</h2>
            <p>
              We may update these terms as CaQZed grows. Continued use of the
              site after a change means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Questions</h2>
            <p>
              Reach out via our{" "}
              <a href="/contact" className="text-brand-green hover:underline">
                Contact page
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
