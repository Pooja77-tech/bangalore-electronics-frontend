import { motion } from "framer-motion";
// Placeholder video - replace with actual video path when available
import benefitsVid from "../../assets/videos/services/benefits.mp4";

export default function ActiveNetwork() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Active Networking
        </h1>
        <p className="mt-6 text-gray-300 max-w-4xl mx-auto">
          Our Active Networking solutions form the backbone of reliable, high-performance enterprise IT infrastructure. We design, deploy, and manage intelligent networking systems that enable secure, scalable, and uninterrupted connectivity across corporate, industrial, and mission-critical environments.
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
            By leveraging enterprise-class switching, routing, wireless, and network management technologies, we ensure optimized data flow, high availability, and consistent performance across LAN, WAN, and data center networks. Our solutions are engineered to support modern business demands, including cloud connectivity, real-time applications, and digital transformation initiatives.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            Designed with a focus on resilience, security, and scalability, our Active Networking services integrate seamlessly with existing IT ecosystems, providing centralized control, network visibility, and long-term operational efficiency.
          </p>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise-grade switching and routing solutions",
                desc: "Advanced networking hardware for optimal performance and reliability."
              },
              {
                title: "LAN, WAN, and data center networking",
                desc: "Comprehensive network infrastructure for all enterprise environments."
              },
              {
                title: "High-availability and redundant network design",
                desc: "Fault-tolerant systems ensuring continuous operation."
              },
              {
                title: "Wireless networking (Wi-Fi 6 / enterprise WLAN)",
                desc: "Next-generation wireless connectivity for modern workplaces."
              },
              {
                title: "Network performance optimization and traffic management",
                desc: "Intelligent traffic shaping and quality of service (QoS)."
              },
              {
                title: "Centralized network monitoring and management",
                desc: "Unified control and visibility across the entire network."
              },
              {
                title: "Integration with security and cloud platforms",
                desc: "Seamless connectivity with security and cloud ecosystems."
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

        {/* ENTERPRISE VALUE */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Enterprise Value
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Ensures reliable and high-speed connectivity",
                desc: "Guaranteed uptime and performance for critical business operations."
              },
              {
                title: "Improves network performance and uptime",
                desc: "Enhanced reliability and reduced downtime through proactive management."
              },
              {
                title: "Supports secure digital transformation",
                desc: "Enables safe migration to cloud and modern applications."
              },
              {
                title: "Enables scalable growth across locations",
                desc: "Flexible network expansion to support business growth."
              },
              {
                title: "Reduces operational complexity and downtime",
                desc: "Simplified management and minimized service interruptions."
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
                title: "Corporate and enterprise campuses",
                desc: "Comprehensive networking for large corporate environments."
              },
              {
                title: "Data centers and network operations environments",
                desc: "High-performance infrastructure for critical data operations."
              },
              {
                title: "Manufacturing and industrial facilities",
                desc: "Reliable connectivity for industrial automation and control."
              },
              {
                title: "Smart buildings and smart cities",
                desc: "Intelligent networking for IoT and smart infrastructure."
              },
              {
                title: "Education, healthcare, and government networks",
                desc: "Secure and compliant networking for public sector organizations."
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

        {/* ARCHITECTURE & DESIGN APPROACH */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Architecture & Design Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Network assessment",
                desc: "Comprehensive evaluation of current infrastructure and requirements."
              },
              {
                title: "Design & planning",
                desc: "Strategic network architecture design and implementation planning."
              },
              {
                title: "Deployment & optimization",
                desc: "Seamless deployment and ongoing performance optimization."
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

        {/* HIGH AVAILABILITY & REDUNDANCY */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            High Availability & Redundancy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Failover mechanisms",
                desc: "Automatic switching to backup systems during failures."
              },
              {
                title: "Load balancing",
                desc: "Intelligent distribution of network traffic for optimal performance."
              },
              {
                title: "Disaster recovery readiness",
                desc: "Comprehensive backup and recovery solutions for business continuity."
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

        {/* VENDOR & TECHNOLOGY SUPPORT */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Vendor & Technology Support
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Multi-vendor environments",
                desc: "Support for diverse networking equipment and vendors."
              },
              {
                title: "Industry-standard protocols",
                desc: "Compliance with standard protocols for seamless integration."
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

        {/* MANAGED NETWORKING SERVICES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Managed Networking Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 monitoring",
                desc: "Round-the-clock network monitoring and alerting."
              },
              {
                title: "Proactive maintenance",
                desc: "Preventive maintenance to ensure optimal performance."
              },
              {
                title: "SLA-based support",
                desc: "Service level agreements for guaranteed uptime and support."
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

        {/* SECURITY INTEGRATION */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Security Integration
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Firewalls",
                desc: "Integrated firewall protection for network security."
              },
              {
                title: "Zero Trust",
                desc: "Zero Trust Network Access (ZTNA) implementation."
              },
              {
                title: "Network access control (NAC)",
                desc: "Comprehensive network access control and policy enforcement."
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

        {/* CALL TO ACTION */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl text-center">
          <h2 className="text-3xl font-semibold mb-6 text-cyan-300">
            Ready to Upgrade Your Network Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact our networking experts to design and deploy enterprise-grade networking solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition">
              Design Your Network Infrastructure
            </button>
            <button className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition">
              Consult Our Networking Experts
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
