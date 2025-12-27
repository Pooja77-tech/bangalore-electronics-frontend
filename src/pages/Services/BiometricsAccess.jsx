import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import biometricsVid from "../../assets/videos/services/biometrics.mp4";

export default function BiometricsAccess() {
  const features = [
    "Fingerprint, face & iris recognition systems",
    "RFID, smart card & multi-factor authentication",
    "Enterprise & government-grade security",
    "Centralized access management",
    "Audit logs & compliance-ready",
    "Scalable for campuses & large facilities",
  ];

  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back Link */}
        <Link
          to="/services"
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          ← Back to Services
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
        >
          <video
            src={biometricsVid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-95 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Biometrics & Access Control
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Our biometric and access control solutions provide advanced identity verification and secure access management for enterprises, institutions, and government organizations. Designed to enhance security, efficiency, and compliance.
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
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
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our biometric and access control systems are widely deployed across corporate offices, data centers, hospitals, educational institutions, manufacturing facilities, airports, and government buildings—ensuring secure and controlled access at every level.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Secure Your Facility with Biometrics
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
