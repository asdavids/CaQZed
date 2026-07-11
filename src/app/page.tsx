import Link from "next/link";
import { Container } from "@/components/container";
import { CalculatorCard } from "@/components/calculator-card";
import { CalculatorSearch } from "@/components/calculator-search";
import { CATEGORIES, getLiveCalculators, getCalculatorsByCategory } from "@/lib/calculators/registry";

export default function Home() {
  const live = getLiveCalculators().filter((c) => c.slug !== "import-duty");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-green-50 to-background">
        <Container className="relative py-20 sm:py-28 text-center">
          <span className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold-50 px-3 py-1 text-[12px] font-semibold text-brand-gold">
            Built for Zambia 🇿🇲
          </span>
          <h1 className="mt-6 font-display text-[36px] sm:text-[52px] font-semibold tracking-tight leading-[1.08]">
            Every calculation.
            <br />
            <span className="text-brand-green">One platform.</span>
          </h1>
          <p className="mt-5 text-[16px] sm:text-[18px] text-foreground-muted max-w-xl mx-auto">
            Free, accurate calculators for salaries, tax, loans, business and
            everyday life in Zambia — built on official ZRA, NAPSA and NHIMA
            rates.
          </p>

          <div className="mt-9">
            <CalculatorSearch />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "PAYE", slug: "paye" },
              { label: "NAPSA", slug: "napsa" },
              { label: "VAT", slug: "vat" },
              { label: "Gross to Net", slug: "gross-to-net" },
            ].map((tag) => (
              <Link
                key={tag.slug}
                href={`/calculators/${tag.slug}`}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] font-medium hover:border-brand-green/40 transition-colors"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Import Duty Feature Banner */}
      <section className="border-b border-border bg-[#00853F]">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-white uppercase tracking-wide">
                Most popular
              </span>
              <h2 className="mt-3 font-display text-[22px] sm:text-[28px] font-semibold text-white leading-snug">
                Vehicle Import Duty Calculator
              </h2>
              <p className="mt-2 text-[14px] sm:text-[15px] text-white/75 leading-relaxed">
                Calculate ZRA duty for cars, pickups, trucks, buses and motorcycles.
                Switch to Total Landed Cost mode to get the full picture — purchase price,
                duty, JEVIC, clearing agent, port charges and RTSA fees in one total.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/calculators/import-duty"
                  className="rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-brand-green hover:bg-brand-green-50 transition-colors"
                >
                  Calculate import duty →
                </Link>
                <Link
                  href="/blog/importing-a-car-zambia-complete-guide"
                  className="rounded-full border border-white/30 px-5 py-2.5 text-[14px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Read the import guide
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex flex-col gap-2 shrink-0">
              {[
                { label: "Passenger cars", note: "sedan, hatch, SUV, wagon" },
                { label: "Goods vehicles", note: "pickup, van, truck" },
                { label: "Buses", note: "by seating capacity" },
                { label: "Motorcycles", note: "by engine size" },
                { label: "Hybrid / Electric", note: "ad valorem method" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-brand-gold shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[13px] text-white font-medium">{item.label}</span>
                  <span className="text-[12px] text-white/55">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Popular calculators */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-[24px] sm:text-[28px] font-semibold tracking-tight">
              Popular calculators
            </h2>
            <Link href="/calculators" className="text-[14px] font-medium text-brand-green hover:text-brand-green-700">
              View all →
            </Link>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {live.map((calc) => (
              <CalculatorCard key={calc.slug} calc={calc} />
            ))}
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 sm:py-20 bg-surface-muted border-y border-border">
        <Container>
          <h2 className="font-display text-[24px] sm:text-[28px] font-semibold tracking-tight">
            Browse by category
          </h2>
          <p className="mt-2 text-[15px] text-foreground-muted max-w-lg">
            From payroll to poultry — CaQZed is organised into 14 categories
            covering every part of life and business in Zambia.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const count = getCalculatorsByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/calculators#${cat.slug}`}
                  className="rounded-2xl border border-border bg-surface p-5 hover:border-brand-green/40 transition-colors"
                >
                  <h3 className="font-display text-[15px] font-semibold">{cat.name}</h3>
                  <p className="mt-1 text-[13px] text-foreground-muted">{cat.description}</p>
                  <p className="mt-3 text-[12px] font-medium text-brand-green">
                    {count} calculator{count !== 1 ? "s" : ""}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Trust / accuracy */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-display text-[17px] font-semibold">Official rates</h3>
              <p className="mt-2 text-[14px] text-foreground-muted leading-relaxed">
                Every calculator is built on official ZRA, NAPSA and NHIMA
                figures, with sources shown on every calculator page.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[17px] font-semibold">Always free</h3>
              <p className="mt-2 text-[14px] text-foreground-muted leading-relaxed">
                No sign-up, no paywall. CaQZed is built to be Zambia&apos;s
                default place to calculate anything, for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[17px] font-semibold">Built to grow</h3>
              <p className="mt-2 text-[14px] text-foreground-muted leading-relaxed">
                New calculators ship regularly across tax, business,
                agriculture, construction and everyday life.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-surface-muted border-t border-border">
        <Container>
          <h2 className="font-display text-[24px] sm:text-[28px] font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl">
            <div>
              <h3 className="text-[14px] font-semibold">Is CaQZed free to use?</h3>
              <p className="mt-1.5 text-[14px] text-foreground-muted leading-relaxed">
                Yes, every calculator on CaQZed is completely free, with no sign-up required.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold">How accurate are the results?</h3>
              <p className="mt-1.5 text-[14px] text-foreground-muted leading-relaxed">
                Calculators use official published rates where available. Results are estimates — always confirm with the relevant authority before making financial decisions.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold">How often are rates updated?</h3>
              <p className="mt-1.5 text-[14px] text-foreground-muted leading-relaxed">
                Every calculator shows a &quot;last verified&quot; date. Rates are reviewed whenever ZRA, NAPSA, NHIMA or other bodies announce changes.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold">Can I suggest a new calculator?</h3>
              <p className="mt-1.5 text-[14px] text-foreground-muted leading-relaxed">
                Yes — reach out via the contact page. CaQZed is growing toward 250+ calculators based on what Zambians actually need.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
