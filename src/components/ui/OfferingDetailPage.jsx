import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Container,
  PageShell,
  PillLink,
  SectionHeader,
  SurfaceCard,
  fadeUp,
  itemReveal,
} from "./PremiumLayout";

export default function OfferingDetailPage({
  title,
  eyebrow = "Offering",
  description,
  video,
  features = [],
  featureTitle = "Key Capabilities",
  applications = [],
  applicationTitle = "Where It Is Used",
  applicationText,
  ctaLabel,
  ctaTo = "/contact",
}) {
  return (
    <PageShell>
      <Container>
        <Link
          to="/offerings"
          className="premium-link inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Offerings
        </Link>

        <SurfaceCard
          {...fadeUp}
          className="mt-10 grid gap-0 overflow-hidden p-0 lg:grid-cols-[1.12fr_0.88fr]"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="premium-media h-80 w-full object-cover sm:h-96 lg:h-full"
            />
          ) : null}

          <div className="flex min-h-[420px] flex-col justify-end p-8 sm:p-10 lg:p-12">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="max-w-none"
              titleClassName="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
            />
          </div>
        </SurfaceCard>

        {features.length ? (
          <motion.section
            {...fadeUp}
            className="grid gap-10 py-20 lg:grid-cols-[0.72fr_1.28fr] lg:py-28"
          >
            <div>
              <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
                {featureTitle}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <SurfaceCard
                  key={feature}
                  variants={itemReveal}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.22 }}
                  className="min-h-36"
                >
                  <p className="text-lg font-semibold leading-7 text-[var(--color-text)]">
                    {feature}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </motion.section>
        ) : null}

        {(applications.length || applicationText) ? (
          <SurfaceCard
            {...fadeUp}
            className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12"
          >
            <div>
              <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
                Applications
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
                {applicationTitle}
              </h2>
            </div>

            <div>
              {applicationText ? (
                <p className="text-base leading-8 text-[var(--color-muted)]">
                  {applicationText}
                </p>
              ) : null}
              {applications.length ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {applications.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-[var(--color-border)] px-4 py-4 text-sm font-semibold text-[var(--color-text)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </SurfaceCard>
        ) : null}

        {ctaLabel ? (
          <motion.div {...fadeUp} className="pt-16 text-center">
            <PillLink to={ctaTo}>{ctaLabel}</PillLink>
          </motion.div>
        ) : null}
      </Container>
    </PageShell>
  );
}
