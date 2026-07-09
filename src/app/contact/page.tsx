import { Container } from "@/components/container";

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <h1 className="font-display text-[28px] font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted">
          Spotted an error in a calculation, or want to suggest a new calculator?
          Reach out at hello@caqzed.com.
        </p>
      </Container>
    </div>
  );
}
