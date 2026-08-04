import { motion } from "framer-motion";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

const benefitsVid = "/videos/offerings/benefits.mp4";

export default function BenefitsGrid() {
  const benefits = [
    {
      title: "High Reliability",
      desc: "Robust solutions engineered for high availability, scalability, and long-term operational stability.",
    },
    {
      title: "Enhanced Security",
      desc: "Security architectures that protect infrastructure, data, and critical operations.",
    },
    {
      title: "Scalable Architecture",
      desc: "Flexible systems designed to grow with evolving business and technology demands.",
    },
    {
      title: "Operational Efficiency",
      desc: "Optimized workflows and infrastructure that reduce downtime and improve productivity.",
    },
    {
      title: "Cost Optimization",
      desc: "Smart infrastructure planning that lowers operational costs while improving return on investment.",
    },
    {
      title: "Professional Support",
      desc: "Expert implementation, monitoring, and ongoing support from certified professionals.",
    },
  ];

  return (
    <PageShell className="pt-24">
      <Container>
        <SurfaceCard
          {...fadeUp}
          className="grid overflow-hidden p-0 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <video
            src={benefitsVid}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="premium-media h-80 w-full object-cover sm:h-96 lg:h-full"
          />
          <div className="flex min-h-[420px] flex-col justify-end p-8 sm:p-10 lg:p-12">
            <SectionHeader
              eyebrow="Benefits"
              title="Long-term value, built into the system."
              description="A concise view of how our solutions deliver performance, security, and durability across industries."
              titleClassName="text-4xl sm:text-5xl lg:text-6xl"
            />
          </div>
        </SurfaceCard>

        <motion.div
          {...fadeUp}
          className="grid gap-5 py-20 sm:grid-cols-2 lg:grid-cols-3 lg:py-28"
        >
          {benefits.map((benefit) => (
            <SurfaceCard key={benefit.title} className="min-h-64">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {benefit.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                {benefit.desc}
              </p>
            </SurfaceCard>
          ))}
        </motion.div>
      </Container>
    </PageShell>
  );
}
