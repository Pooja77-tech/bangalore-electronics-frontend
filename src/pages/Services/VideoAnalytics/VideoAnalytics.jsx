import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function VideoAnalytics() {
  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          to="/services"
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          ← Back to Services
        </Link>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
        >
          <video
            src="/videos/services/video-analytics.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Video Analytics
            </h1>
            <p className="text-gray-300 max-w-4xl leading-relaxed">
              Intelligent video analytics solutions that transform real-time and
              recorded video into actionable insights—enhancing situational
              awareness, security operations, and enterprise decision-making
              across mission-critical environments.
            </p>
          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              The platform integrates seamlessly with enterprise IP networks,
              Video Management Systems (VMS), and Physical Security Information
              Management (PSIM) solutions—ensuring high availability, data
              integrity, and consistent performance across distributed sites.
            </p>
            <p className="text-gray-300 leading-relaxed mt-6">
              Designed for large-scale, mission-critical deployments, the system
              supports centralized and federated architectures, multi-site
              scalability, secure data handling, and comprehensive audit and
              compliance reporting.
            </p>
          </div>
        </motion.div>

        {/* EXECUTIVE VALUE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Executive Value Proposition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Enhances enterprise risk management and physical security governance",
              "Enables proactive detection and automated incident response",
              "Optimizes utilization of existing surveillance investments",
              "Improves operational efficiency through intelligent automation",
              "Supports regulatory compliance, audits, and data governance",
              "Scales reliably across geographically distributed environments",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <p className="text-gray-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* KEY CAPABILITIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Key Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "AI-driven real-time and forensic video analytics",
              "Motion, intrusion, anomaly, and behavior detection",
              "Facial recognition, object classification, and pattern analysis",
              "Crowd analytics, people counting, and traffic optimization",
              "Secure integration with PSIM, VMS, and access control systems",
              "Optimized bandwidth usage with encrypted data transmission",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* INDUSTRY APPLICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Industry Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Enterprise campuses and corporate headquarters",
              "Data centers and Network Operations Centers (NOC)",
              "Airports, metro rail, ports, and transport hubs",
              "Smart cities and critical infrastructure",
              "Manufacturing, logistics, and industrial facilities",
              "Government, defense, and high-security installations",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
