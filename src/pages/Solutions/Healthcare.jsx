import {
  Container,
  PageShell,
  SectionHeader,
} from "../../components/ui/PremiumLayout";

export default function Healthcare() {
  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="Healthcare Solutions"
          description="Reliable systems for healthcare facilities where uptime and safety matter."
        />
      </Container>
    </PageShell>
  );
}
