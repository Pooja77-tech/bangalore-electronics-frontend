import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const psimVid = "/videos/offerings/PSIM & Video Management System.mp4";

export default function PSIMVideoManagementSystem() {
  const features = [
    "Centralized security monitoring and command control",
    "Real-time alerts & automated incident workflows",
    "Advanced video analytics & AI-driven insights",
    "Integration with CCTV, access control & alarms",
    "Scalable, secure & compliance-ready architecture",
    "Multi-site & enterprise-wide visibility",
  ];

  const applications = [
    "Corporate campuses & data centers",
    "Airports, metros & transportation hubs",
    "Smart cities & critical infrastructure",
    "Manufacturing & industrial facilities",
    "Government & high-security installations",
  ];

  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back Link */}
        <Link
          to="/offerings"
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          ← Back to Offerings
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
        >
          <video
            src={psimVid}
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
              Our Physical Security Information Management (PSIM) and Video
              Management System (VMS) provides a unified, intelligent platform
              to manage enterprise-level security operations with real-time
              visibility, faster response, and improved situational awareness.
            </p>
          </div>
        </motion.div>

        {/* Features */}
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
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <p className="text-gray-200">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-12 text-center"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
            Where It’s Used
          </h2>

          <ul className="mt-8 space-y-3 text-gray-300">
            {applications.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Centralize & Elevate Your Security Operations
          </h3>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Request a Demo
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
