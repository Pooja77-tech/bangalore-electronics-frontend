import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import componentsVid from "../../assets/videos/services/electronic-components.mp4";

export default function ElectronicComponents() {
  const features = [
    "Certified & genuine electronic components",
    "Global sourcing from trusted manufacturers",
    "Bulk supply & enterprise procurement",
    "Strict quality assurance & compliance",
    "Fast delivery & logistics support",
    "Dedicated technical assistance",
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
            src={componentsVid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Electronic Components
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              We provide high-quality electronic components designed to meet the
              demanding requirements of modern industries across enterprise,
              industrial, and government environments.
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
            Why Choose Our Components
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

        {/* Industry Use */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-12 text-center"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
            Industry Applications
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            IT infrastructure, industrial automation, healthcare systems,
            surveillance solutions, smart cities, and government-grade projects.
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
            Need Reliable Electronic Components?
          </h3>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
