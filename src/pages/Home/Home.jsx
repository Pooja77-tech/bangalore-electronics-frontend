import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Cpu,
  Fingerprint,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import {
  Container,
  PageShell,
  PillLink,
  SectionHeader,
  SurfaceCard,
  TextLink,
  fadeUp,
  itemReveal,
} from "../../components/ui/PremiumLayout";

const stats = [
  { value: "35+", label: "Years of Excellence" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "300+", label: "Projects Delivered" },
  { value: "Pan-India", label: "Service Presence" },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Compliance-driven",
    desc: "Audit-ready systems for security, access, and infrastructure.",
    color: "var(--slack-green)",
    className: "sm:col-span-2",
  },
  {
    icon: Network,
    title: "Vendor-neutral",
    desc: "Architecture led by fit, performance, and lifecycle value.",
    color: "var(--slack-blue)",
  },
  {
    icon: Cpu,
    title: "SLA-backed",
    desc: "Responsive support across deployment, maintenance, and scale.",
    color: "var(--slack-yellow)",
  },
  {
    icon: ArrowRight,
    title: "Lifecycle ownership",
    desc: "From specification and procurement to rollout and support.",
    color: "var(--slack-red)",
  },
];

export default function Home() {
  return (
    <PageShell className="home-page pt-8 sm:pt-10 lg:pt-12">
      <Container>
        <section className="home-hero grid items-center gap-12 py-10 sm:py-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-14">
          <div className="home-hero-copy relative z-20 max-w-2xl">
            <SectionHeader
              eyebrow="Enterprise technology partner"
              title="Bangalore Electronics"
              titleClassName="home-hero-title"
              description="Enterprise-Grade Solutions"
            />

            <motion.div
              {...fadeUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <PillLink to="/offerings">Explore offerings</PillLink>
              <PillLink to="/about" variant="ghost">
                About us
              </PillLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="home-visual-stage relative z-10 mx-auto w-full max-w-[680px] lg:ml-auto"
          >
            <div className="hero-orbit hero-orbit-purple" />
            <div className="hero-orbit hero-orbit-gold" />
            <div className="hero-orbit hero-orbit-cyan" />

            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.012,
                y: -3,
                transition: { duration: 0.24, delay: 0, ease: "easeOut" },
              }}
              transition={{ duration: 0.78, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="hero-image-panel relative overflow-hidden rounded-[30px] p-2.5 sm:p-3"
            >
              <div className="relative overflow-hidden rounded-[23px]">
                <img
                  src="/images/home/cctv-camera.jpg"
                  alt="CCTV surveillance camera monitoring an urban facility"
                  className="premium-media aspect-[4/3] w-full object-cover object-center sm:aspect-[3/2]"
                />
                <div className="hero-image-scrim" />
              </div>
            </motion.div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.46,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="spatial-float-card depth-high min-h-[88px] rounded-[22px] p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[var(--slack-blue)] text-white">
                    <Fingerprint size={21} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-text)]">
                      Access secured
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                      Identity controls
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.58,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="spatial-float-card depth-mid min-h-[88px] rounded-[22px] p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-[var(--slack-green)] text-white">
                    <Server size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">
                      Network layer
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      Resilient infrastructure
                    </p>
                  </div>
                </div>
                <img
                  src="/images/home/network-server.jpg"
                  alt="Connected network infrastructure"
                  className="premium-media mt-3 hidden aspect-[16/9] w-full rounded-[16px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="spatial-float-card depth-low min-h-[88px] rounded-[22px] p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[var(--slack-purple)] text-white">
                    <Camera size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-text)]">
                      Video surveillance
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-muted)]">
                      Live visibility across critical sites
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <motion.section
          {...fadeUp}
          className="grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20"
        >
          {stats.map((stat) => (
            <SurfaceCard key={stat.label} className="min-h-44">
              <p className="text-4xl font-semibold text-[var(--color-text)]">
                {stat.value}
              </p>
              <p className="mt-8 text-sm leading-6 text-[var(--color-muted)]">
                {stat.label}
              </p>
            </SurfaceCard>
          ))}
        </motion.section>

        <section className="grid gap-10 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
          <SectionHeader
            eyebrow="Why enterprises trust us"
            title="Quiet systems. Strong outcomes."
            description="The visual language is restrained, but the work is precise: secure designs, accountable delivery, and systems that keep operating after launch."
            titleClassName="text-4xl sm:text-5xl lg:text-6xl"
          />

          <motion.div
            {...fadeUp}
            className="grid gap-4 sm:grid-cols-2"
          >
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <SurfaceCard
                  key={item.title}
                  variants={itemReveal}
                  className={item.className}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-[16px] text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {item.desc}
                  </p>
                </SurfaceCard>
              );
            })}
          </motion.div>
        </section>

        <SurfaceCard
          {...fadeUp}
          className="mt-16 grid items-end gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
              Start a project
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-5xl">
              Build reliable security and infrastructure systems with a team
              that owns the full lifecycle.
            </h2>
          </div>
          <TextLink to="/contact">Contact us</TextLink>
        </SurfaceCard>
      </Container>
    </PageShell>
  );
}
