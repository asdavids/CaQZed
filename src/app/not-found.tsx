import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <div className="py-24">
      <Container className="max-w-lg text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green font-display text-[22px] font-semibold">
          404
        </span>
        <h1 className="mt-6 font-display text-[26px] font-semibold tracking-tight">
          That doesn&apos;t add up.
        </h1>
        <p className="mt-2 text-[15px] text-foreground-muted">
          We couldn&apos;t find the page you&apos;re looking for. It may have
          moved, or the link might be off by a character.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand-green px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-brand-green-700 transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/calculators"
            className="rounded-full border border-border px-5 py-2.5 text-[14px] font-semibold hover:border-brand-green/40 transition-colors"
          >
            Browse all calculators
          </Link>
        </div>
      </Container>
    </div>
  );
}
