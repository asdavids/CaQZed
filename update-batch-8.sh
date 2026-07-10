#!/bin/bash
set -e
echo 'Adding CaQZed Agents & Drivers Directory...'

mkdir -p 'src/app/directory'
cat > 'src/app/directory/page.tsx' << 'CAQZED_EOF'
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { DirectoryCard } from "@/components/directory-card";
import { CAR_AGENTS, DRIVERS } from "@/lib/directory";

export const metadata: Metadata = {
  title: "Car Agents & Drivers Directory Zambia",
  description: "Find trusted car import agents and drivers in Zambia.",
  alternates: { canonical: "/directory" },
};

export default function DirectoryPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <h1 className="font-display text-[28px] sm:text-[34px] font-semibold tracking-tight">
          Car Agents & Drivers
        </h1>
        <p className="mt-2 text-[15px] text-foreground-muted max-w-xl">
          A hand-picked list of car import agents and drivers. Reach out directly by phone or WhatsApp.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-[20px] font-semibold">Car Agents</h2>
          <p className="mt-1 text-[13px] text-foreground-muted">
            Clearing, importation, and vehicle sourcing agents.
          </p>
          {CAR_AGENTS.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CAR_AGENTS.map((entry) => (
                <DirectoryCard key={entry.name + entry.phone} entry={entry} />
              ))}
            </div>
          ) : (
            <p className="mt-5 text-[14px] text-foreground-muted italic">
              No agents listed yet — check back soon.
            </p>
          )}
        </section>

        <section className="mt-14">
          <h2 className="font-display text-[20px] font-semibold">Drivers</h2>
          <p className="mt-1 text-[13px] text-foreground-muted">
            Personal, chauffeur, and hire drivers.
          </p>
          {DRIVERS.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DRIVERS.map((entry) => (
                <DirectoryCard key={entry.name + entry.phone} entry={entry} />
              ))}
            </div>
          ) : (
            <p className="mt-5 text-[14px] text-foreground-muted italic">
              No drivers listed yet — check back soon.
            </p>
          )}
        </section>

        <p className="mt-14 text-[12px] text-foreground-muted border-t border-border pt-5">
          CaQZed does not vet or guarantee any listed agent or driver. Always verify credentials and agree on terms before engaging anyone&apos;s services.
        </p>
      </Container>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components'
cat > 'src/components/directory-card.tsx' << 'CAQZED_EOF'
import type { DirectoryEntry } from "@/lib/directory";

export function DirectoryCard({ entry }: { entry: DirectoryEntry }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <h3 className="font-display text-[15px] font-semibold">{entry.name}</h3>
      <p className="mt-0.5 text-[13px] text-brand-green font-medium">{entry.role}</p>
      {entry.location && (
        <p className="mt-1 text-[12px] text-foreground-muted">{entry.location}</p>
      )}
      {entry.notes && (
        <p className="mt-2.5 text-[13px] leading-relaxed text-foreground-muted">{entry.notes}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={`tel:+${entry.phone}`}
          className="rounded-full border border-border px-3.5 py-1.5 text-[13px] font-medium hover:border-brand-green/40 transition-colors"
        >
          Call
        </a>
        {entry.whatsapp && (
          <a
            href={`https://wa.me/${entry.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-green px-3.5 py-1.5 text-[13px] font-medium text-white hover:bg-brand-green-700 transition-colors"
          >
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
CAQZED_EOF

mkdir -p 'src/components'
cat > 'src/components/site-header.tsx' << 'CAQZED_EOF'
import Link from "next/link";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-white font-display font-semibold text-sm">
            Cz
          </span>
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
CAQZED_EOF

mkdir -p 'src/lib'
cat > 'src/lib/directory.ts' << 'CAQZED_EOF'
/**
 * DIRECTORY — car agents and drivers.
 *
 * This is a simple, hand-curated list. To add, remove, or edit an entry,
 * just edit the arrays below and redeploy — there's no database or admin
 * panel for this yet, it's just data in code.
 *
 * Phone numbers should be in international format (260 for Zambia) with no
 * spaces or leading zero, e.g. "260971234567" for 0971 234 567 — this format
 * is required for the WhatsApp link to work correctly.
 */

export interface DirectoryEntry {
  name: string;
  role: string;
  phone: string; // international format, no spaces, e.g. "260971234567"
  whatsapp?: string; // same format; omit if they don't use WhatsApp
  location?: string;
  notes?: string;
}

export const CAR_AGENTS: DirectoryEntry[] = [
  // Example entry — replace with real agents, or delete this one:
  // {
  //   name: "Jane Banda",
  //   role: "Import & Clearing Agent",
  //   phone: "260971234567",
  //   whatsapp: "260971234567",
  //   location: "Lusaka",
  //   notes: "Handles JEVIC inspection and ZRA clearing for used imports.",
  // },
];

export const DRIVERS: DirectoryEntry[] = [
  // Example entry — replace with real drivers, or delete this one:
  // {
  //   name: "John Phiri",
  //   role: "Personal / Chauffeur Driver",
  //   phone: "260971234567",
  //   whatsapp: "260971234567",
  //   location: "Lusaka",
  //   notes: "5 years experience, own PSV licence.",
  // },
];
CAQZED_EOF

echo 'Done. Run: git add -A && git commit -m "Add directory feature" && git push'