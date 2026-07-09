import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://caqzed.com"),
  title: {
    default: "CaQZed — Calculate Anything in Zambia",
    template: "%s | CaQZed",
  },
  description:
    "Free, accurate calculators for Zambian salaries, tax, loans, ZESCO bills, mobile money and more. Everything you need to calculate in Zambia, in one place.",
  keywords: [
    "Zambia calculator",
    "PAYE calculator Zambia",
    "NAPSA calculator",
    "VAT calculator Zambia",
    "ZRA tax calculator",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZM",
    siteName: "CaQZed",
    title: "CaQZed — Calculate Anything in Zambia",
    description: "Every calculation. One platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
