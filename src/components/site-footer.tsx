import Link from "next/link";
import { Container } from "./container";
import { CATEGORIES } from "@/lib/calculators/registry";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-muted">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-green text-white font-display font-semibold text-xs">
                Cz
              </span>
              <span className="font-display text-[15px] font-semibold">CaQZed</span>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-foreground-muted max-w-[220px]">
              Everything you need to calculate in Zambia. Free, accurate, and always up to date.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
              Categories
            </h3>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/calculators?category=${c.slug}`}
                    className="text-[13px] text-foreground-muted hover:text-brand-green transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
              Popular calculators
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/calculators/paye" className="text-[13px] text-foreground-muted hover:text-brand-green transition-colors">PAYE Calculator</Link></li>
              <li><Link href="/calculators/napsa" className="text-[13px] text-foreground-muted hover:text-brand-green transition-colors">NAPSA Calculator</Link></li>
              <li><Link href="/calculators/vat" className="text-[13px] text-foreground-muted hover:text-brand-green transition-colors">VAT Calculator</Link></li>
              <li><Link href="/calculators/loan" className="text-[13px] text-foreground-muted hover:text-brand-green transition-colors">Loan Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-foreground-muted">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/about" className="text-[13px] text-foreground-muted hover:text-brand-green transition-colors">About CaQZed</Link></li>
              <li><Link href="/news" className="text-[13px] text-foreground-muted hover:text-brand-green transition-colors">News &amp; Updates</Link></li>
              <li><Link href="/contact" className="text-[13px] text-foreground-muted hover:text-brand-green transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-[12px] text-foreground-muted">
            © {new Date().getFullYear()} CaQZed. Figures are estimates for guidance only — always confirm with ZRA, NAPSA, NHIMA or a licensed professional.
          </p>
          <p className="text-[12px] text-foreground-muted">
            Made in Zambia 🇿🇲
          </p>
        </div>
      </Container>
    </footer>
  );
}
