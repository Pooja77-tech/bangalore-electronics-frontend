import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Offerings from "./pages/Offerings/Offerings"; // your Offerings component
import BiometricsAccess from "./pages/Offerings/BiometricsAccess";
import ElectronicComponents from "./pages/Offerings/ElectronicComponents";
import ITInfrastructure from "./pages/Offerings/ITInfrastructure";
import VideoSurveillance from "./pages/Offerings/VideoSurveillance";
import EnterpriseManagementSystem from "./pages/Offerings/EnterpriseManagementSystem";
import PSIMVideoManagementSystem from "./pages/Offerings/PSIMVideoManagementSystem";
import VideoAnalytics from "./pages/Offerings/VideoAnalytics";
import NetworkSecurity from "./pages/Offerings/NetworkSecurity";
import ActiveNetwork from "./pages/Offerings/ActiveNetwork";
import BenefitsGrid from "./pages/Offerings/BenefitsGrid";
import UseCases from "./pages/Offerings/UseCases";
import Solutions from "./pages/Solutions/Solutions";
import Products from "./pages/Products/Products";
import CaseStudies from "./pages/Projects/CaseStudies";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
<<<<<<< HEAD
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
=======
>>>>>>> 3fa0275c0fc581e933b0bd8910c3962d485a807b

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="offerings" element={<Offerings />} />
        <Route path="offerings/biometrics-access" element={<BiometricsAccess />} />
        <Route path="offerings/electronic-components" element={<ElectronicComponents />} />
        <Route path="offerings/it-infrastructure" element={<ITInfrastructure />} />
        <Route path="offerings/video-surveillance" element={<VideoSurveillance />} />
        <Route path="offerings/enterprise-management-system" element={<EnterpriseManagementSystem />} />
        <Route path="offerings/psim-video-management-system" element={<PSIMVideoManagementSystem />} />
        <Route path="offerings/video-analytics" element={<VideoAnalytics />} />
        <Route path="offerings/network-security" element={<NetworkSecurity />} />
        <Route path="offerings/active-network" element={<ActiveNetwork />} />
        <Route path="offerings/benefits" element={<BenefitsGrid />} />
        <Route path="offerings/use-cases" element={<UseCases />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
