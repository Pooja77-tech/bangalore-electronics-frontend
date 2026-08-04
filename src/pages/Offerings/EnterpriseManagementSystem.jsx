import OfferingDetailPage from "../../components/ui/OfferingDetailPage";

const emsVid = "/videos/offerings/electronic-components.mp4";

export default function EnterpriseManagementSystem() {
  return (
    <OfferingDetailPage
      title="Enterprise Management System"
      description="A unified platform for operations, finance, inventory, HR, and business intelligence, helping organizations operate efficiently, securely, and at scale."
      video={emsVid}
      features={[
        "Centralized enterprise dashboard and analytics",
        "Inventory, sales, and purchase management",
        "Finance, accounting, and GST-ready reports",
        "Employee and role-based access control",
        "Workflow approvals and audit logs",
        "Scalable, cloud-ready architecture",
      ]}
      applicationTitle="Where EMS Is Used"
      applicationText="EMS solutions support manufacturing companies, distributors, enterprises, government organizations, educational institutions, logistics providers, and service-based businesses."
    />
  );
}
