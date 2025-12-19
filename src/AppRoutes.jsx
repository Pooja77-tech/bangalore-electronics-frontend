import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Solutions from './pages/Solutions/Solutions';
import Products from './pages/Products/Products';
import CaseStudies from './pages/Projects/CaseStudies';
import SupportMaintenance from './pages/Support/SupportMaintenance';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/products" element={<Products />} />
      <Route path="/projects" element={<CaseStudies />} />
      <Route path="/support" element={<SupportMaintenance />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}