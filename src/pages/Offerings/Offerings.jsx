import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Video Imports
import biometricsVid from "../../assets/videos/services/biometrics.mp4";
import componentsVid from "../../assets/videos/services/electronic-components.mp4";
import itInfraVid from "../../assets/videos/services/it-infrastructure.mp4";
import surveillanceVid from "../../assets/videos/services/video-surveillance.mp4";
import benefitsVid from "../../assets/videos/services/benefits.mp4";
import useCasesVid from "../../assets/videos/services/use-cases.mp4";
import activeNetworkVid from "../../assets/videos/services/active-network.mp4";
import psimVid from "../../assets/videos/services/PSIM & Video Management System.mp4";
import videoAnalyticsVid from "../../assets/videos/services/Video Analytics.mp4";
import networkSecurityVid from "../../assets/videos/services/benefits.mp4";
import enterpriseVid from "../../assets/videos/services/benefits.mp4";

export default function Offerings() {
  const offeringsData = [
    {
      title: "Biometrics & Access Control",
      link: "/offerings/biometrics-access",
      video: biometricsVid,
      desc: "Advanced biometric authentication and secure access control systems.",
    },
    {
      title: "Electronic Components",
      link: "/offerings/electronic-components",
      video: componentsVid,
      desc: "High-quality electronic components sourced from trusted brands.",
    },
    {
      title: "IT Infrastructure Solutions",
      link: "/offerings/it-infrastructure",
      video: itInfraVid,
      desc: "End-to-end IT infrastructure design, deployment, and maintenance.",
    },
    {
      title: "Video Surveillance Systems",
      link: "/offerings/video-surveillance",
      video: surveillanceVid,
      desc: "Robust CCTV and video monitoring systems tailored for all industries.",
    },
    {
      title: "Enterprise Management System",
      link: "/offerings/enterprise-management-system",
      video: enterpriseVid,
      desc: "Comprehensive solution for business operations, tracking, and growth with advanced modules.",
    },
    {
      title: "PSIM & Video Management System",
      link: "/offerings/psim-video-management-system",
      video: psimVid,
      desc: "Unified platform for enterprise-level security operations with centralized monitoring and control.",
    },
    {
      title: "Video Analytics",
      link: "/offerings/video-analytics",
      video: videoAnalyticsVid,
      desc: "AI-driven video analytics for intelligent situational awareness and security operations.",
    },
    {
      title: "Network Security",
      link: "/offerings/network-security",
      video: networkSecurityVid,
      desc: "Comprehensive network security solutions to protect against cyber threats and ensure compliance.",
    },
    {
      title: "Active Network",
      link: "/offerings/active-network",
      video: activeNetworkVid,
      desc: "Intelligent networking systems for reliable, high-performance enterprise IT infrastructure.",
    },
    {
      title: "Key Benefits Overview",
      link: "/offerings/benefits",
      video: benefitsVid,
      desc: "Discover how our solutions provide long-term value and reliability.",
    },
    {
      title: "Industry Use Cases",
      link: "/offerings/use-cases",
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
            Our Offerings
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Explore our wide range of professional solutions that deliver
            modern, efficient, and future-ready results.
          </p>
        </motion.div>

        {/* Offerings Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offeringsData.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all"
            >
              {/* Auto-playing video */}
              <video
                src={offering.video}
                className="w-full h-48 object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {offering.title}
                </h3>
                <p className="text-gray-400 mt-2">{offering.desc}</p>

                <Link
                  to={offering.link}
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
