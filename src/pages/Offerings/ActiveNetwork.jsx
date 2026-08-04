import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

const activeNetworkVid = "/videos/offerings/active-network.mp4";

export default function ActiveNetwork() {
  return (
    <OfferingDetailPage
      title="Active and Passive Networking"
      description="Enterprise-grade active and passive networking solutions designed to deliver secure, scalable, and high-performance connectivity across corporate, industrial, and mission-critical environments."
      video={activeNetworkVid}
      featureTitle="Core Capabilities"
      features={[
        "Enterprise-grade switching and routing",
        "LAN, WAN, and data center networking",
        "High-availability and redundant architectures",
        "Enterprise Wi-Fi and wireless networking",
        "Traffic optimization and QoS management",
        "Centralized monitoring and network visibility",
        "Security and cloud platform integration",
      ]}
      applicationTitle="Industry Applications"
      applications={[
        "Corporate and Enterprise Campuses",
        "Data Centers and NOC Environments",
        "Manufacturing and Industrial Facilities",
        "Smart Buildings and Smart Cities",
        "Education, Healthcare, and Government Networks",
      ]}
    />
  );
}
