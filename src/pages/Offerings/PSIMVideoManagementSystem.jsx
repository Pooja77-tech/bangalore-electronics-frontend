import { motion } from "framer-motion";
// Placeholder video - replace with actual video path when available
import benefitsVid from "../../assets/videos/services/benefits.mp4";

export default function PSIMVideoManagementSystem() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          PSIM & Video Management System
        </h1>
        <p className="mt-6 text-gray-300 max-w-4xl mx-auto">
          Our Physical Security Information Management (PSIM) and Video Management System (VMS) solutions provide a unified, intelligent platform for managing enterprise-level security operations. Designed for high-security environments, the system centralizes video surveillance, access control, alarms, and sensors into a single operational view, enabling faster decision-making and improved situational awareness.
        </p>
      </div>

      {/* TOP VIDEO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-80 overflow-hidden rounded-b-3xl"
      >
        <video
          src={benefitsVid} // Placeholder - replace with actual video when available
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </motion.div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto space-y-20">

        {/* DESCRIPTION */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            The solution delivers real-time monitoring, incident detection, and automated response workflows, helping organizations reduce risk, improve response times, and maintain operational continuity. Advanced video analytics and AI-driven insights enhance security effectiveness while minimizing manual intervention.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            Built for scalability and compliance, the PSIM & VMS platform seamlessly integrates with existing security infrastructure, supports multi-site operations, and provides comprehensive audit logs and reporting to meet regulatory and enterprise standards.
          </p>
        </section>

        {/* KEY CAPABILITIES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Key Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Centralized security monitoring and control",
                desc: "Unified platform for managing all security operations from a single interface."
              },
              {
                title: "Real-time alerts and incident management",
                desc: "Instant notifications and automated workflows for rapid incident response."
              },
              {
                title: "Advanced video analytics and AI insights",
                desc: "Intelligent video processing and AI-driven security enhancements."
              },
              {
                title: "Integration with CCTV, access control, and alarms",
                desc: "Seamless connectivity with existing security infrastructure."
              },
              {
                title: "Secure, scalable, and compliant architecture",
                desc: "Enterprise-grade security with regulatory compliance support."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Use Cases
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Corporate campuses and data centers",
                desc: "Comprehensive security management for large corporate environments and critical data facilities."
              },
              {
                title: "Airports, metros, and transportation hubs",
                desc: "High-security monitoring for transportation infrastructure and public spaces."
              },
              {
                title: "Smart cities and critical infrastructure",
                desc: "City-wide security systems and protection of essential infrastructure."
              },
              {
                title: "Manufacturing and industrial facilities",
                desc: "Industrial security solutions for manufacturing plants and warehouses."
              },
              {
                title: "Government and high-security installations",
                desc: "Advanced security platforms for government buildings and secure facilities."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
