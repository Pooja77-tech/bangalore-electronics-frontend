import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

const componentsVid = "/videos/offerings/Enterprise .mp4";

export default function ElectronicComponents() {
  return (
    <OfferingDetailPage
      title="Electronic Components"
      description="High-quality electronic components designed to meet the demanding requirements of modern industries across enterprise, industrial, and government environments."
      video={componentsVid}
      featureTitle="Why Choose Our Components"
      features={[
        "Certified and genuine electronic components",
        "Global sourcing from trusted manufacturers",
        "Bulk supply and enterprise procurement",
        "Strict quality assurance and compliance",
        "Fast delivery and logistics support",
        "Dedicated technical assistance",
      ]}
      applicationTitle="Industry Applications"
      applicationText="Our components support IT infrastructure, industrial automation, healthcare systems, surveillance solutions, smart cities, and government-grade projects."
    />
  );
}
