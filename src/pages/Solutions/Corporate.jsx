import {
  Container,
  PageShell,
  SectionHeader,
} from "../../components/ui/PremiumLayout";

export default function Corporate() {
  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="Corporate Solutions"
          description="Secure, scalable technology solutions for corporate environments."
        />
      </Container>
    </PageShell>
  );
}
