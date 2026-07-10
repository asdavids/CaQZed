import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CaQZed handles your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <h1 className="font-display text-[28px] font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-[13px] text-foreground-muted">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-[14px] leading-relaxed text-foreground-muted">
          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">What CaQZed collects</h2>
            <p>
              CaQZed&apos;s calculators run entirely in your browser. The
              numbers you type into a calculator — your salary, loan amount,
              or any other figure — are processed on your device and are not
              sent to or stored on our servers. We don&apos;t currently offer
              user accounts or saved calculations, so there is no personal
              financial data of yours sitting on CaQZed&apos;s infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Standard web analytics</h2>
            <p>
              Like most websites, CaQZed may use basic, aggregated analytics
              (such as page views and general location data at a country or
              city level) to understand how the site is used and to improve
              it. This data is not tied to your name or any calculator inputs.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Contact and directory information</h2>
            <p>
              If you contact us, we&apos;ll use your details only to respond
              to you. If you&apos;re listed in our Agents &amp; Drivers
              directory, that&apos;s information you or someone on your
              behalf has agreed to make public on the page — contact us if
              you&apos;d like it removed.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Third-party links</h2>
            <p>
              CaQZed links to external sites (ZRA, NAPSA, RTSA, and others) for
              official reference. We aren&apos;t responsible for the privacy
              practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Changes to this policy</h2>
            <p>
              As CaQZed adds features like accounts or saved calculations,
              this policy will be updated to reflect exactly what data is
              collected and how it&apos;s used.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold text-foreground mb-2">Questions</h2>
            <p>
              Reach out via our{" "}
              <a href="/contact" className="text-brand-green hover:underline">
                Contact page
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
