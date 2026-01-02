import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PSIMVideoManagementSystem() {
  const capabilities = [
    "Centralized security monitoring and control",
    "Real-time alerts and incident management",
    "Advanced video analytics & AI-driven insights",
    "Integration with CCTV, access control & alarms",
    "Secure, scalable & compliant architecture",
    "Multi-site & enterprise-grade deployment",
  ];

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

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
        >
          <video
            src="/videos/services/psim-vms.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              PSIM & Video Management System
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              A unified, intelligent platform that centralizes enterprise
              security operations—delivering real-time visibility, faster
              incident response, and operational control across critical
              environments.
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              Our PSIM & VMS solution integrates video surveillance, access
              control, alarms, and sensors into a single operational interface,
              enabling security teams to detect, assess, and respond to incidents
              with speed and accuracy.
            </p>
            <p className="text-gray-300 leading-relaxed mt-6">
              Designed for scalability and compliance, the platform supports
              multi-site deployments, seamless third-party integrations, and
              enterprise-grade reliability for mission-critical operations.
            </p>
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Key Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div
                key={item}
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
            Enhance Your Security Operations
          </h3>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Talk to Our Security Experts
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
