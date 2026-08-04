import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

const analyticsVid = "/videos/offerings/Video Analytics.mp4";

export default function VideoAnalytics() {
  return (
    <OfferingDetailPage
      title="Video Analytics"
      description="Video Analytics transforms live and recorded video streams into actionable intelligence using advanced AI, enabling proactive detection, operational efficiency, and stronger situational awareness."
      video={analyticsVid}
      features={[
        "AI-driven real-time and forensic video analytics",
        "Motion, intrusion, and anomaly detection",
        "Facial recognition and object classification",
        "Crowd analytics and people counting",
        "Behavior analysis and event correlation",
        "Secure integration with PSIM and VMS platforms",
      ]}
      applications={[
        "Enterprise Campuses and Corporate Offices",
        "Airports, Metros, and Transportation Hubs",
        "Smart Cities and Critical Infrastructure",
        "Manufacturing and Industrial Facilities",
        "Data Centers and Network Operations Centers",
        "Government and High-Security Installations",
      ]}
      ctaLabel="Request a Demo"
    />
  );
}
