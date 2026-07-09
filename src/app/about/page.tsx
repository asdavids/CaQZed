import { Container } from "@/components/container";

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <h1 className="font-display text-[28px] font-semibold tracking-tight">About CaQZed</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted">
          CaQZed — Calculate Anything in Zambia — is a free platform of calculators
          for salary, tax, business, loans and everyday life in Zambia. Built on
          official ZRA, NAPSA and NHIMA rates, and growing every week.
        </p>
      </Container>
    </div>
  );
}
