import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

const networkSecurityVid = "/videos/offerings/Network Security.mp4";

export default function NetworkSecurity() {
  return (
    <OfferingDetailPage
      title="Network Security"
      description="Network Security solutions protect enterprise networks from evolving cyber threats while supporting high availability, performance, and regulatory compliance across on-premises, cloud, and hybrid environments."
      video={networkSecurityVid}
      features={[
        "Next-generation firewalls and perimeter security",
        "Intrusion detection and prevention systems",
        "Secure VPN and remote access solutions",
        "Zero-trust network access",
        "Advanced malware and ransomware protection",
        "Continuous monitoring and threat analysis",
      ]}
      applications={[
        "Enterprise IT and Corporate Networks",
        "Data Centers and Cloud Infrastructure",
        "Manufacturing and Industrial Networks",
        "Financial Services and Critical Infrastructure",
        "Government, Healthcare, and Education Institutions",
      ]}
    />
  );
}
