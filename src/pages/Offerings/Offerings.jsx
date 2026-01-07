import { motion } from "framer-motion";
import { Link } from "react-router-dom";
 
// ✅ Correct video imports from public folder
import biometricsVid from "/videos/offerings/biometrics.mp4";
import componentsVid from "/videos/offerings/electronic-components.mp4";
import itInfraVid from "/videos/offerings/it-infrastructure.mp4";
import surveillanceVid from "/videos/offerings/video-surveillance.mp4";
import networkSecurityVid from "/videos/offerings/Network Security.mp4";
import enterpriseVid from "/videos/offerings/Enterprise .mp4";
import activeNetworkVid from "/videos/offerings/active-network.mp4";
import psimVid from "/videos/offerings/PSIM & Video Management System.mp4";
import videoAnalyticsVid from "/videos/offerings/Video Analytics.mp4";
import benefitsVid from "/videos/offerings/benefits.mp4";
import useCasesVid from "/videos/offerings/use-cases.mp4";
 
export default function Offerings() {
  const offeringsData = [
    {
      title: "Biometrics & Access Control",
      link: "/offerings/biometrics-access",
      video: biometricsVid,
      desc: "Advanced biometric authentication and secure access control systems.",
    },
    {
      title: "Enterprise Management System",
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
      title: "Network Security",
      link: "/offerings/network-security",
      video: networkSecurityVid,
      desc: "Comprehensive network security solutions to protect enterprise environments.",
    },
    {
      title: "Electronic Components",
      link: "/offerings/enterprise-management-system",
      video: enterpriseVid,
      desc: "Centralized enterprise operations, monitoring, and reporting platform.",
    },
    {
      title: "Active Networking And Passive Networking",
      link: "/offerings/active-network",
      video: activeNetworkVid,
      desc: "High-performance active networking for scalable IT ecosystems.",
    },
    {
      title: "PSIM & Video Management System",
      link: "/offerings/psim-video-management-system",
      video: psimVid,
      desc: "Unified command-and-control platform for security operations.",
    },
    {
      title: "Video Analytics",
      link: "/offerings/video-analytics",
      video: videoAnalyticsVid,
      desc: "AI-powered analytics for intelligent video-based insights.",
    },
    {
      title: "Key Benefits Overview",
      link: "/offerings/benefits",
      video: benefitsVid,
      desc: "Understand the long-term value and ROI of our solutions.",
    },
    {
      title: "Industry Use Cases",
      link: "/offerings/use-cases",
      video: useCasesVid,
      desc: "Real-world implementations across multiple industry verticals.",
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
            Explore our wide range of professional solutions delivering secure,
            scalable, and future-ready technology.
          </p>
        </motion.div>
 
        {/* Offerings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offeringsData.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all"
            >
              <video
                src={offering.video}
                className="w-full h-48 object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
 
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
 
 