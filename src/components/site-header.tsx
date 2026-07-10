import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo-mark.png" alt="CaQZed" width={32} height={32} className="h-8 w-8" priority />
          <span className="font-display text-[17px] font-semibold tracking-tight">
            CaQZed
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-foreground-muted">
          <Link href="/calculators" className="hover:text-foreground transition-colors">
            All Calculators
          </Link>
          <Link href="/directory" className="hover:text-foreground transition-colors">
            Agents &amp; Drivers
          </Link>
          <Link href="/#categories" className="hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link href="/news" className="hover:text-foreground transition-colors">
            News &amp; Updates
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/calculators"
            className="rounded-full bg-brand-green px-4 py-2 text-[13px] font-semibold text-white hover:bg-brand-green-700 transition-colors"
          >
            Start calculating
          </Link>
        </div>
      </Container>
    </header>
  );
}
