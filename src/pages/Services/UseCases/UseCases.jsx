import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UseCases() {
  const useCases = [
    {
      title: "Corporate Offices",
      description:
        "Secure access control and surveillance for multi-floor corporate buildings with integrated IT infrastructure.",
      icon: "🏢",
      features: ["Biometric Access", "Video Surveillance", "Network Security"],
    },
    {
      title: "Educational Institutions",
      description:
        "Comprehensive security solutions for schools, colleges, and universities with student safety focus.",
      icon: "🎓",
      features: ["Access Control", "Emergency Response", "Video Analytics"],
    },
    {
      title: "Healthcare Facilities",
      description:
        "Critical infrastructure protection for hospitals and medical centers with compliance-ready systems.",
      icon: "🏥",
      features: ["Patient Safety", "Asset Tracking", "Emergency Systems"],
    },
    {
      title: "Government Buildings",
      description:
        "High-security solutions for government offices and public buildings with audit trails.",
      icon: "🏛️",
      features: ["Multi-level Security", "Audit Compliance", "24/7 Monitoring"],
    },
    {
      title: "Industrial Complexes",
      description:
        "Robust security for manufacturing plants and industrial facilities with monitoring systems.",
      icon: "🏭",
      features: ["Perimeter Security", "Asset Protection", "Environmental Monitoring"],
    },
    {
      title: "Retail & Commercial",
      description:
        "Loss prevention and customer safety solutions for shopping centers and retail spaces.",
      icon: "🛍️",
      features: ["Loss Prevention", "Customer Safety", "Inventory Security"],
    },
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
          className="mt-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-12"
        >
          <h1 className="text-5xl font-extrabold text-cyan-300 mb-6 text-center">
            Industry Use Cases
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            Discover how our security and IT solutions are deployed across
            industries to ensure safety, compliance, and operational efficiency.
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg hover:border-cyan-400/60 transition"
              >
                <div className="text-5xl mb-6">{useCase.icon}</div>

                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                  {useCase.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {useCase.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-200 flex items-center"
                      >
                        <span className="text-cyan-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
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
            Ready to Implement Your Solution?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Speak with our experts to design a customized security and IT
            solution tailored to your industry.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Get Started Today
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
