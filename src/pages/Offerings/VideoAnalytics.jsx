import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const analyticsVid = "/videos/offerings/Video Analytics.mp4";

export default function VideoAnalytics() {
  const features = [
    "AI-driven real-time & forensic video analytics",
    "Motion, intrusion & anomaly detection",
    "Facial recognition & object classification",
    "Crowd analytics & people counting",
    "Behavior analysis & event correlation",
    "Secure integration with PSIM & VMS platforms",
  ];

  const applications = [
    "Enterprise Campuses & Corporate Offices",
    "Airports, Metros & Transportation Hubs",
    "Smart Cities & Critical Infrastructure",
    "Manufacturing & Industrial Facilities",
    "Data Centers & Network Operations Centers",
    "Government & High-Security Installations",
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
            src={analyticsVid}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Video Analytics
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Our Video Analytics solutions transform live and recorded video
              streams into actionable intelligence using advanced AI, enabling
              proactive threat detection, operational efficiency, and enhanced
              situational awareness across enterprise environments.
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
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Video Analytics solutions are deployed across:
          </p>

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
            Unlock Intelligent Video Insights
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
