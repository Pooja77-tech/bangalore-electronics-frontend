import { motion } from "framer-motion";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

export default function UseCases() {
  const useCases = [
    {
      title: "High-Occupancy Environments",
      description:
        "Operational environments with continuous human movement that require controlled access, real-time visibility, and consistent oversight.",
      features: ["Controlled Entry & Exit", "Continuous Monitoring", "Incident Traceability"],
    },
    {
      title: "Asset-Intensive Operations",
      description:
        "Facilities where physical and digital assets must be protected, monitored, and accounted for without disrupting daily workflows.",
      features: ["Asset Visibility", "Access Accountability", "Loss Prevention"],
    },
    {
      title: "Distributed Locations",
      description:
        "Multi-site operations requiring centralized supervision, consistent standards, and unified operational control across locations.",
      features: ["Centralized Oversight", "Multi-Location Control", "Unified Reporting"],
    },
    {
      title: "Mission-Critical Facilities",
      description:
        "Environments where uptime, reliability, and immediate response are essential to prevent operational or financial disruption.",
      features: ["High Availability", "Redundancy Readiness", "Real-Time Alerts"],
    },
    {
      title: "Public-Facing Spaces",
      description:
        "Open-access environments that must balance accessibility with safety, visibility, and controlled movement.",
      features: ["Crowd Awareness", "Safety Assurance", "Operational Visibility"],
    },
    {
      title: "Restricted-Access Zones",
      description:
        "Sensitive areas requiring layered access control, role-based permissions, and detailed activity tracking.",
      features: ["Role-Based Access", "Activity Logging", "Policy Enforcement"],
    },
  ];

  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="Use Cases"
          title="Deployment patterns for controlled environments."
          description="Operational environments where reliability, control, and long-term performance are critical to everyday functioning."
          align="center"
        />

        <motion.div
          {...fadeUp}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {useCases.map((useCase) => (
            <SurfaceCard key={useCase.title} className="min-h-[420px]">
              <h3 className="text-2xl font-semibold text-[var(--color-text)]">
                {useCase.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                {useCase.description}
              </p>
              <div className="mt-8 space-y-2">
                {useCase.features.map((feature) => (
                  <p
                    key={feature}
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)]"
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </motion.div>

        <p className="mx-auto mt-20 max-w-4xl text-center text-base leading-8 text-[var(--color-muted)]">
          These use cases represent practical deployment experience across
          diverse operational environments, emphasizing reliability,
          accountability, and long-term system performance.
        </p>
      </Container>
    </PageShell>
  );
}
