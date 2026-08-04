import { motion } from "framer-motion";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

export default function Projects() {
  return (
    <PageShell>
      <Container>
        <div className="grid min-h-[60vh] items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <SectionHeader
            eyebrow="Projects"
            title="Upcoming work, built for operational value."
            description="Our upcoming initiatives reflect a focused commitment to enterprise-grade security, networking, and IT infrastructure solutions engineered for performance, scalability, and long-term value."
          />

          <SurfaceCard
            {...fadeUp}
            className="flex min-h-80 flex-col justify-end overflow-hidden p-8 sm:p-10"
          >
            <img
              src="/images/projects/project.png"
              alt=""
              className="mx-auto mb-8 h-56 w-full max-w-md object-contain sm:h-64 lg:max-w-lg"
            />
            <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
              Status
            </p>
            <p className="project-status-title mt-6 text-5xl font-semibold">
              Upcoming
            </p>
            <p className="mt-8 text-sm leading-7 text-[var(--color-muted)]">
              Case studies will be added as selected deployments are prepared
              for public review.
            </p>
          </SurfaceCard>
        </div>
      </Container>
    </PageShell>
  );
}
