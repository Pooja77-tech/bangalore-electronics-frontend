import {
  Container,
  PageShell,
  PillLink,
  SectionHeader,
} from "../../components/ui/PremiumLayout";

export default function NotFound() {
  return (
    <PageShell>
      <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <SectionHeader
          eyebrow="404"
          title="Page not found."
          description="The page you are looking for does not exist or may have moved."
          align="center"
          titleClassName="text-5xl sm:text-6xl lg:text-7xl"
        />
        <div className="mt-10">
          <PillLink to="/">Return home</PillLink>
        </div>
      </Container>
    </PageShell>
  );
}
