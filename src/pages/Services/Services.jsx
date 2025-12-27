import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Video Imports (FILES THAT REALLY EXIST)
import biometricsVid from "../../assets/videos/services/biometrics.mp4";
import componentsVid from "../../assets/videos/services/electronic-components.mp4";
import itInfraVid from "../../assets/videos/services/it-infrastructure.mp4";
import surveillanceVid from "../../assets/videos/services/video-surveillance.mp4";
import benefitsVid from "../../assets/videos/services/benefits.mp4";
import useCasesVid from "../../assets/videos/services/use-cases.mp4";
// Placeholder video for Enterprise Management System - replace with actual video when available
import enterpriseVid from "../../assets/videos/services/benefits.mp4";
 
export default function Services() {
  const servicesData = [
    {
      title: "Biometrics & Access Control",
      link: "/services/biometrics-access",
      video: biometricsVid,
      desc: "Advanced biometric authentication and secure access control systems.",
    },
    {
      title: "Electronic Components",
      link: "/services/electronic-components",
      video: componentsVid,
      desc: "High-quality electronic components sourced from trusted brands.",
    },
    {
      title: "IT Infrastructure Solutions",
      link: "/services/it-infrastructure",
      video: itInfraVid,
      desc: "End-to-end IT infrastructure design, deployment, and maintenance.",
    },
    {
      title: "Video Surveillance Systems",
      link: "/services/video-surveillance",
      video: surveillanceVid,
      desc: "Robust CCTV and video monitoring systems tailored for all industries.",
    },
    {
      title: "Enterprise Management System",
      link: "/services/enterprise-management-system",
      video: enterpriseVid,
      desc: "Comprehensive solution for business operations, tracking, and growth with advanced modules.",
    },
    {
      title: "PSIM & Video Management System",
      link: "/services/psim-video-management-system",
      video: benefitsVid,
      desc: "Unified platform for enterprise-level security operations with centralized monitoring and control.",
    },
    {
      title: "Video Analytics",
      link: "/services/video-analytics",
      video: benefitsVid,
      desc: "AI-driven video analytics for intelligent situational awareness and security operations.",
    },
    {
      title: "Network Security",
      link: "/services/network-security",
      video: benefitsVid,
      desc: "Comprehensive network security solutions to protect against cyber threats and ensure compliance.",
    },
    {
      title: "Active Network",
      link: "/services/active-network",
      video: benefitsVid,
      desc: "Intelligent networking systems for reliable, high-performance enterprise IT infrastructure.",
    },
    {
      title: "Key Benefits Overview",
      link: "/services/benefits",
      video: benefitsVid,
      desc: "Discover how our solutions provide long-term value and reliability.",
    },
    {
      title: "Industry Use Cases",
      link: "/services/use-cases",
      video: useCasesVid,
      desc: "Real-world examples of our solutions implemented across sectors.",
    },
  ];
 
  return (
    <section className="min-h-screen bg-[#020617] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Explore our wide range of professional solutions that deliver
            modern, efficient, and future-ready results.
          </p>
        </motion.div>
 
        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all"
            >
              {/* Auto-playing video */}
              <video
                src={service.video}
                className="w-full h-48 object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onError={(e) => console.error('Video failed to load:', e)}
              />
 
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mt-2">{service.desc}</p>
 
                <Link
                  to={service.link}
                  className="inline-block mt-4 text-cyan-400 font-semibold hover:text-cyan-300"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
           </div>
    </section>
  );

}
