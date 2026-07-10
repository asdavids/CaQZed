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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CaQZed",
    alternateName: "Calculate Anything in Zambia",
    url: "https://caqzed.com",
    description:
      "Free, accurate calculators for Zambian salaries, tax, loans, ZESCO bills, vehicles and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://caqzed.com/calculators?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('caqzed-theme');
                  var wantDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (wantDark) document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
