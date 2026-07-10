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
