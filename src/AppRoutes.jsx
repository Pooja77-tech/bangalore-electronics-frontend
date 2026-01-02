import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Solutions from "./pages/Solutions/Solutions";
import Products from "./pages/Products/Products";
import CaseStudies from "./pages/Projects/CaseStudies";
import SupportMaintenance from "./pages/Support/SupportMaintenance";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import BiometricsAccess from "./pages/Services/BiometricsAccess/BiometricsAccess";
import ElectronicComponents from "./pages/Services/ElectronicComponents/ElectronicComponents";
import ITInfrastructure from "./pages/Services/ITInfrastructure/ITInfrastructure";
import VideoSurveillance from "./pages/Services/VideoSurveillance/VideoSurveillance";
import BenefitsGrid from "./pages/Services/BenefitsGrid/BenefitsGrid";
import UseCases from "./pages/Services/UseCases/UseCases";
import EnterpriseManagementSystem from "./pages/Services/EnterpriseManagementSystem/EnterpriseManagementSystem";
import PSIMVideoManagementSystem from "./pages/Services/PSIMVideoManagementSystem/PSIMVideoManagementSystem";
import VideoAnalytics from "./pages/Services/VideoAnalytics/VideoAnalytics";
import NetworkSecurity from "./pages/Services/NetworkSecurity/NetworkSecurity";
import ActiveNetwork from "./pages/Services/ActiveNetwork";
import Corporate from "./pages/Solutions/Corporate";
import Education from "./pages/Solutions/Education";
import Government from "./pages/Solutions/Government";
import Healthcare from "./pages/Solutions/Healthcare";
import Industrial from "./pages/Solutions/Industrial";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Main Layout Wrapper */}
      <Route element={<MainLayout />}>

        {/* All pages rendered through <Outlet /> */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="products" element={<Products />} />
        <Route path="projects" element={<CaseStudies />} />
        <Route path="support" element={<SupportMaintenance />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/services/biometrics-access" element={<BiometricsAccess />} />
        <Route path="/services/electronic-components" element={<ElectronicComponents />} />
        <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
        <Route path="/services/video-surveillance" element={<VideoSurveillance />} />
        <Route path="/services/benefits" element={<BenefitsGrid />} />
        <Route path="/services/use-cases" element={<UseCases />} />
        <Route path="/services/enterprise-management-system" element={<EnterpriseManagementSystem />} />
        <Route path="/services/psim-video-management-system" element={<PSIMVideoManagementSystem />} />
        <Route path="/services/video-analytics" element={<VideoAnalytics />} />
        <Route path="/services/network-security" element={<NetworkSecurity />} />
        <Route path="/services/active-network" element={<ActiveNetwork />} />
        <Route path="/solutions/corporate" element={<Corporate />} />
        <Route path="/solutions/education" element={<Education />} />
        <Route path="/solutions/government" element={<Government />} />
        <Route path="/solutions/healthcare" element={<Healthcare />} />
        <Route path="/solutions/industrial" element={<Industrial />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
