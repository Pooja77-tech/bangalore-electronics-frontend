import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const stepTime = Math.max(8, Math.abs(Math.floor(duration / end)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <SurfaceCard className="text-center">
      <h3 className="about-counter-value text-4xl font-semibold">
        {count}+
      </h3>
      <p className="mt-3 text-sm text-[var(--color-muted)]">{label}</p>
    </SurfaceCard>
  );
};

const pillars = [
  {
    title: "Founder",
    body: (
      <>
        <span className="font-semibold text-[var(--color-text)]">
          Late C. Kiran Lal
        </span>{" "}
        founded Bangalore Electronics with a belief in integrity, quality,
        accountability, and long-term customer relationships. Those values
        continue to guide the organization.
      </>
    ),
  },
  {
    title: "Mission",
    body: "To deliver high-quality, customized technology solutions through reliability, precision, standards-led execution, and service excellence.",
  },
  {
    title: "Vision",
    body: "To be recognized as a leading value-added technology solution provider in India, known for professional execution and durable client value.",
  },
];

const values = [
  "Integrity, honesty, and transparency",
  "Professionalism and accountability",
  "Continuous improvement and innovation",
  "Mutual respect and teamwork",
];

export default function About() {
  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="About us"
          title="About Bangalore Electronics"
          description="Bangalore Electronics is a trusted name in electronic components, security systems, solar solutions, and system integration, delivering international-standard solutions built for long-term reliability."
          align="center"
        />

        <SurfaceCard
          {...fadeUp}
          className="mt-16 grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.65fr_1.35fr] lg:p-12"
        >
          <h2 className="text-3xl font-semibold text-[var(--color-text)]">
            Who We Are
          </h2>
          <p className="text-base leading-8 text-[var(--color-muted)]">
            Bangalore Electronics has been a pioneer in electronics, solar, and
            security for more than three decades. The company has evolved into a
            capable system integration and solution provider supported by a
            skilled in-house technical team. Our focus is on reliable, scalable,
            and customized solutions that meet global quality standards.
          </p>
        </SurfaceCard>

        <motion.div
          {...fadeUp}
          className="grid gap-4 py-20 md:grid-cols-3"
        >
          {pillars.map((item) => (
            <SurfaceCard key={item.title} className="min-h-72">
              <p className="about-pillar-title text-sm font-semibold uppercase">
                {item.title}
              </p>
              <p className="mt-10 text-base leading-8 text-[var(--color-muted)]">
                {item.body}
              </p>
            </SurfaceCard>
          ))}
        </motion.div>

        <SurfaceCard
          {...fadeUp}
          className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.65fr_1.35fr] lg:p-12"
        >
          <h2 className="text-3xl font-semibold text-[var(--color-text)]">
            Core Values
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[18px] border border-[var(--color-border)] px-4 py-4 text-sm text-[var(--color-muted)]"
              >
                {value}
              </div>
            ))}
          </div>
        </SurfaceCard>

        <motion.div
          {...fadeUp}
          className="grid gap-4 pt-20 md:grid-cols-4"
        >
          <Counter end={35} label="Years Experience" />
          <Counter end={50} label="Expert Technicians" />
          <Counter end={200} label="Satisfied Clients" />
          <Counter end={300} label="Completed Projects" />
        </motion.div>
      </Container>
    </PageShell>
  );
}
