import Link from "next/link";
import type { CalculatorMeta } from "@/lib/calculators/registry";

export function CalculatorCard({ calc }: { calc: CalculatorMeta }) {
  const isLive = calc.status === "live";
  const body = (
    <div
      className={`group relative h-full rounded-2xl border border-border bg-surface p-5 transition-all ${
        isLive
          ? "hover:border-brand-green/40 hover:shadow-[0_8px_24px_-12px_rgba(0,133,63,0.25)]"
          : "opacity-60"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-[15px] font-semibold leading-snug">
          {calc.name}
        </h3>
        {!isLive && (
          <span className="shrink-0 rounded-full bg-brand-gold-50 px-2 py-0.5 text-[10px] font-semibold text-brand-gold whitespace-nowrap">
            Coming soon
          </span>
        )}
      </div>
      <p className="mt-1.5 text-[13px] leading-relaxed text-foreground-muted">
        {calc.shortDescription}
      </p>
      {isLive && (
        <span className="mt-4 inline-flex items-center text-[13px] font-medium text-brand-green">
          Calculate
          <svg
            className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </div>
  );

  if (!isLive) {
    return <div aria-disabled="true">{body}</div>;
  }

  return (
    <Link href={`/calculators/${calc.slug}`} className="block h-full">
      {body}
    </Link>
  );
}
