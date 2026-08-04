import { motion } from "framer-motion";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

const products = [
  {
    title: "CCTV Systems",
    description:
      "High-definition indoor and outdoor surveillance systems for reliable security, continuous monitoring, and long-term performance.",
  },
  {
    title: "Juniper Switches",
    description:
      "Enterprise-grade network switches for high-speed data transfer, scalability, and secure network infrastructure.",
  },
  {
    title: "Distribution Switches",
    description:
      "Distribution-layer switching for traffic management, redundancy, and seamless connectivity.",
  },
  {
    title: "CAT6 Cables",
    description:
      "High-quality networking cables supporting stable high-speed data and reduced interference.",
  },
];

export default function ProductsOverview() {
  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="Products"
          title="Reliable products for secure infrastructure."
          description="A focused product set for scalable, high-performance technology environments."
          align="center"
        />

        <motion.div
          {...fadeUp}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <SurfaceCard key={product.title} className="min-h-72">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {product.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                {product.description}
              </p>
            </SurfaceCard>
          ))}
        </motion.div>
      </Container>
    </PageShell>
  );
}
