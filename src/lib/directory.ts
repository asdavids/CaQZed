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

export const CAR_AGENTS: DirectoryEntry[] = [{
    name: "David Mumbuna",
    role: "Import & Clearing Agent",
    phone: "260961185620",
    whatsapp: "27784437165",
    location: "Lusaka",
    notes: "Handles JEVIC inspection and ZRA clearing.",
  },
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
