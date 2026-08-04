import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

export default function ITInfrastructure() {
  return (
    <OfferingDetailPage
      title="IT Infrastructure Solutions"
      description="We design, deploy, and manage secure, scalable, and high-performance IT infrastructure for enterprises, institutions, and government organizations."
      video="/videos/offerings/it-infrastructure.mp4"
      featureTitle="Infrastructure Capabilities"
      features={[
        "Enterprise-grade network architecture",
        "Server, storage, and data center solutions",
        "Cloud and hybrid infrastructure deployment",
        "Network security and firewall integration",
        "Scalable and future-ready designs",
        "24/7 monitoring and technical support",
      ]}
    />
  );
}
