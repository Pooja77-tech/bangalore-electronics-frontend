import { motion } from "framer-motion";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

const partners = [
  { name: "Western Digital", logo: "/partners/western-digital.png" },
  { name: "3C3", logo: "/partners/3C3.png" },
  { name: "Hikvision", logo: "/partners/hikvision.png" },
  { name: "Unview", logo: "/partners/unview.png" },
  { name: "Motadata", logo: "/partners/motadata.png" },
  { name: "Belden", logo: "/partners/belden.png" },
  { name: "Lenovo", logo: "/partners/lenovo.png" },
  { name: "HP", logo: "/partners/hp.png", imageClassName: "object-cover" },
  { name: "Hewlett Packard Enterprise", logo: "/partners/hpe.svg" },
  { name: "Hi-Focus", logo: "/partners/hifocus.png" },
  { name: "Juniper Networks", logo: "/partners/juniper-networks.svg" },
];

const Partners = () => {
  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="Partners"
          title="Trusted technology alliances."
          description="We collaborate with established technology providers to deliver secure, scalable, and supportable infrastructure for enterprise environments."
          align="center"
        />

        <motion.div
          {...fadeUp}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {partners.map((partner) => (
            <SurfaceCard
              key={partner.name}
              className="flex aspect-square items-center justify-center p-6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`h-full w-full opacity-90 transition duration-300 hover:opacity-100 ${
                  partner.imageClassName ?? "object-contain"
                }`}
              />
            </SurfaceCard>
          ))}
        </motion.div>
      </Container>
    </PageShell>
  );
};

export default Partners;
