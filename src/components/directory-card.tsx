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
