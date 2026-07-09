"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CALCULATORS } from "@/lib/calculators/registry";

export function CalculatorSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return CALCULATORS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="flex items-center rounded-full border border-border bg-surface px-5 py-3.5 shadow-[0_1px_2px_rgba(16,35,26,0.04)]">
        <svg className="h-4 w-4 text-foreground-muted shrink-0" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 17l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search PAYE, VAT, loans, ZESCO…"
          className="w-full bg-transparent px-3 text-[15px] outline-none placeholder:text-foreground-muted"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute inset-x-0 top-full mt-2 rounded-2xl border border-border bg-surface shadow-lg overflow-hidden z-10 text-left">
          {results.map((r) => (
            <Link
              key={r.slug}
              href={r.status === "live" ? `/calculators/${r.slug}` : "/calculators"}
              className="flex items-center justify-between px-5 py-3 hover:bg-surface-muted transition-colors border-b border-border last:border-b-0"
            >
              <span className="text-[14px] font-medium">{r.name}</span>
              {r.status === "soon" && (
                <span className="text-[11px] text-brand-gold font-semibold">Soon</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
