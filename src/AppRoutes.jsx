import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Offerings from "./pages/Offerings/Offerings"; // your Offerings component
import BiometricsAccess from "./pages/Offerings/BiometricsAccess";
import ElectronicComponents from "./pages/Offerings/EnterpriseManagementSystem";
import ITInfrastructure from "./pages/Offerings/ITInfrastructure";
import VideoSurveillance from "./pages/Offerings/VideoSurveillance";
import EnterpriseManagementSystem from "./pages/Offerings/ElectronicComponents";
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
import Partners from "./pages/Partners/Partners";
import NotFound from "./pages/NotFound/NotFound";
 
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
        <Route path="solutions" element={<Solutions />} />
        <Route path="products" element={<Products />} />
        <Route path="projects" element={<CaseStudies />} />
        <Route path="partners" element={<Partners />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
 
 