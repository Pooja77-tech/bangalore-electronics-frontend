import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const surveillanceVid = "/videos/offerings/video-surveillance.mp4";

export default function VideoSurveillance() {
  const features = [
    "High‑resolution IP & analog cameras",
    "AI‑based video analytics & monitoring",
    "24/7 real‑time surveillance",
    "Centralized control & management",
    "Indoor & outdoor coverage",
    "Secure data storage & retrieval",
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
            src={surveillanceVid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Video Surveillance Systems
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Our advanced video surveillance solutions deliver real‑time visibility, enhanced security, and intelligent monitoring for enterprises, institutions, and public infrastructure. Designed for reliability, scalability, and compliance.
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
            Surveillance Capabilities
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
            Where It's Deployed
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our video surveillance systems are deployed across corporate campuses, healthcare facilities, educational institutions, industrial sites, transportation hubs, and smart city projects — ensuring safety, compliance, and operational awareness.
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
            Enhance Your Security Infrastructure
          </h3>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Request a Consultation
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
