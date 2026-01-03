import { motion } from "framer-motion";
// Placeholder video - replace with actual video path when available
import benefitsVid from "../../assets/videos/services/benefits.mp4";

export default function VideoAnalytics() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Video Analytics
        </h1>
        <p className="mt-6 text-gray-300 max-w-4xl mx-auto">
          Our Video Analytics solutions are engineered to deliver intelligent, secure, and scalable situational awareness for enterprise and critical-infrastructure environments. Leveraging advanced artificial intelligence and a resilient networking foundation, the platform converts real-time and recorded video streams into actionable operational intelligence.
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
            The solution integrates seamlessly within existing enterprise IP networks, Video Management Systems (VMS), and Physical Security Information Management (PSIM) platforms, ensuring high availability, data integrity, and consistent performance across distributed locations. Automated analytics and intelligent event correlation significantly reduce manual intervention while improving accuracy, response time, and operational control.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            Designed to meet the demands of large-scale, mission-critical deployments, the platform supports centralized and federated architectures, multi-site scalability, and policy-driven security controls. Comprehensive audit trails, compliance reporting, and secure data handling enable organizations to meet regulatory and governance requirements with confidence.
          </p>
        </section>

        {/* EXECUTIVE VALUE PROPOSITION */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Executive Value Proposition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Enhances enterprise risk management and physical security governance",
                desc: "Comprehensive risk assessment and security management framework."
              },
              {
                title: "Enables proactive detection, prevention, and response to security incidents",
                desc: "Advanced threat detection and automated response capabilities."
              },
              {
                title: "Optimizes utilization of existing network and surveillance investments",
                desc: "Maximizes ROI on current infrastructure investments."
              },
              {
                title: "Improves operational efficiency through intelligent automation",
                desc: "Streamlines operations with AI-driven automation."
              },
              {
                title: "Supports regulatory compliance, audit readiness, and data governance",
                desc: "Ensures compliance with industry standards and regulations."
              },
              {
                title: "Scales reliably across geographically distributed environments",
                desc: "Enterprise-grade scalability for global deployments."
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

        {/* KEY CAPABILITIES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Key Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-driven real-time and forensic video analytics",
                desc: "Advanced AI algorithms for live and recorded video analysis."
              },
              {
                title: "Intelligent motion, intrusion, anomaly, and behavior detection",
                desc: "Sophisticated detection of unusual activities and behaviors."
              },
              {
                title: "Facial recognition, object classification, and pattern analysis",
                desc: "Advanced recognition and classification technologies."
              },
              {
                title: "Crowd analytics, people counting, and traffic flow optimization",
                desc: "Intelligent crowd management and flow analysis."
              },
              {
                title: "Secure integration with PSIM, VMS, access control, and enterprise systems",
                desc: "Seamless integration with existing security platforms."
              },
              {
                title: "Optimized bandwidth utilization and encrypted data transmission",
                desc: "Efficient data handling with security and performance optimization."
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

        {/* INDUSTRY APPLICATIONS */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Industry Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise campuses and corporate headquarters",
                desc: "Comprehensive security for large corporate environments."
              },
              {
                title: "Data centers and Network Operations Centers (NOC)",
                desc: "Critical infrastructure protection for data facilities."
              },
              {
                title: "Airports, metro rail, ports, and transportation hubs",
                desc: "Security solutions for transportation infrastructure."
              },
              {
                title: "Smart cities and critical infrastructure environments",
                desc: "Urban security and infrastructure monitoring."
              },
              {
                title: "Manufacturing, logistics, and industrial facilities",
                desc: "Industrial security and operational monitoring."
              },
              {
                title: "Government, defense, and high-security installations",
                desc: "Advanced security for government and defense applications."
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
