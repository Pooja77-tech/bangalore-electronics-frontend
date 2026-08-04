import {
  SectionHeader,
  SurfaceCard,
} from "../../components/ui/PremiumLayout";

export default function ServiceHero() {
  return (
    <SurfaceCard className="text-center">
      <SectionHeader
        eyebrow="Services"
        title="Our Services"
        description="Comprehensive electronics, security, and infrastructure solutions."
        align="center"
        titleClassName="text-4xl sm:text-5xl"
      />
    </SurfaceCard>
  );
}
