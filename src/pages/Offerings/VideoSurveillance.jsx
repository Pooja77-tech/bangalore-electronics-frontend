import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

const surveillanceVid = "/videos/offerings/video-surveillance.mp4";

export default function VideoSurveillance() {
  return (
    <OfferingDetailPage
      title="Video Surveillance Systems"
      description="Advanced video surveillance solutions that deliver real-time visibility, enhanced security, and intelligent monitoring for enterprises, institutions, and public infrastructure."
      video={surveillanceVid}
      featureTitle="Surveillance Capabilities"
      features={[
        "High-resolution IP and analog cameras",
        "AI-based video analytics and monitoring",
        "24/7 real-time surveillance",
        "Centralized control and management",
        "Indoor and outdoor coverage",
        "Secure data storage and retrieval",
      ]}
      applicationTitle="Where It Is Deployed"
      applicationText="Our video surveillance systems are deployed across corporate campuses, healthcare facilities, educational institutions, industrial sites, transportation hubs, and smart city projects, supporting safety, compliance, and operational awareness."
      ctaLabel="Request a Consultation"
    />
  );
}
