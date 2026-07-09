import { Container } from "@/components/container";

export default function NewsPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <h1 className="font-display text-[28px] font-semibold tracking-tight">News &amp; Updates</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted">
          Tax changes, budget announcements and platform updates will appear here.
          This section is being built out — check back soon.
        </p>
      </Container>
    </div>
  );
}
