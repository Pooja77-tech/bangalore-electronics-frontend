import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

const psimVid = "/videos/offerings/PSIM & Video Management System.mp4";

export default function PSIMVideoManagementSystem() {
  return (
    <OfferingDetailPage
      title="PSIM & Video Management System"
      description="Physical Security Information Management and Video Management Systems provide a unified platform for enterprise-level security operations, real-time visibility, and faster response."
      video={psimVid}
      features={[
        "Centralized security monitoring and command control",
        "Real-time alerts and automated incident workflows",
        "Advanced video analytics and AI-driven insights",
        "Integration with CCTV, access control, and alarms",
        "Scalable, secure, and compliance-ready architecture",
        "Multi-site and enterprise-wide visibility",
      ]}
      applications={[
        "Corporate Campuses and Data Centers",
        "Airports, Metros, and Transportation Hubs",
        "Smart Cities and Critical Infrastructure",
        "Manufacturing and Industrial Facilities",
        "Government and High-Security Installations",
      ]}
    />
  );
}
