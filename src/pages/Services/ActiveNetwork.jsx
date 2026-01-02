import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ActiveNetwork() {
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
            src="/videos/services/active-network.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Active Networking
            </h1>
            <p className="text-gray-300 max-w-4xl leading-relaxed">
              Enterprise-grade active networking solutions designed to deliver
              secure, scalable, and high-performance connectivity across
              corporate, industrial, and mission-critical environments.
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
              By leveraging enterprise-class switching, routing, wireless, and
              centralized network management technologies, we ensure optimized
              data flow, high availability, and consistent performance across
              LAN, WAN, and data center environments.
            </p>
            <p className="text-gray-300 leading-relaxed mt-6">
              Designed with resilience, security, and scalability in mind, our
              Active Networking solutions integrate seamlessly with existing IT
              ecosystems while supporting cloud connectivity and digital
              transformation initiatives.
            </p>
          </div>
        </motion.div>

        {/* CORE CAPABILITIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Enterprise-grade switching and routing",
              "LAN, WAN, and data center networking",
              "High-availability and redundant architectures",
              "Enterprise Wi-Fi & wireless networking",
              "Traffic optimization and QoS management",
              "Centralized monitoring and network visibility",
              "Security and cloud platform integration",
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

        {/* ENTERPRISE VALUE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Enterprise Value
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Reliable and high-speed connectivity",
              "Improved network uptime and performance",
              "Secure support for digital transformation",
              "Scalable growth across locations",
              "Reduced operational complexity and downtime",
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
              "Corporate and enterprise campuses",
              "Data centers and NOC environments",
              "Manufacturing and industrial facilities",
              "Smart buildings and smart cities",
              "Education, healthcare, and government networks",
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Ready to Upgrade Your Network Infrastructure?
          </h3>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Consult Our Networking Experts
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
