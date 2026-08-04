import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

const biometricsVid = "/videos/offerings/biometrics.mp4";

export default function BiometricsAccess() {
  return (
    <OfferingDetailPage
      title="Biometrics & Access Control"
      description="Biometric and access control solutions provide advanced identity verification and secure access management for enterprises, institutions, and government organizations."
      video={biometricsVid}
      features={[
        "Fingerprint, face, and iris recognition systems",
        "RFID, smart card, and multi-factor authentication",
        "Enterprise and government-grade security",
        "Centralized access management",
        "Audit logs and compliance readiness",
        "Scalable architecture for campuses and large facilities",
      ]}
      applicationText="Our biometric and access control systems are deployed across corporate offices, data centers, hospitals, educational institutions, manufacturing facilities, airports, and government buildings."
    />
  );
}
