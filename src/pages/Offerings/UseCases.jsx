import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UseCases() {
  const useCases = [
    {
      title: "Corporate Offices",
      description: "Secure access control and surveillance for multi-floor corporate buildings with integrated IT infrastructure.",
      icon: "🏢",
      features: ["Biometric Access", "Video Surveillance", "Network Security"],
    },
    {
      title: "Educational Institutions",
      description: "Comprehensive security solutions for schools, colleges, and universities with student safety focus.",
      icon: "🎓",
      features: ["Access Control", "Emergency Response", "Video Analytics"],
    },
    {
      title: "Healthcare Facilities",
      description: "Critical infrastructure protection for hospitals and medical centers with HIPAA compliance.",
      icon: "🏥",
      features: ["Patient Safety", "Asset Tracking", "Emergency Systems"],
    },
    {
      title: "Government Buildings",
      description: "High-security solutions for government offices and public buildings with audit trails.",
      icon: "🏛️",
      features: ["Multi-level Security", "Audit Compliance", "24/7 Monitoring"],
    },
    {
      title: "Industrial Complexes",
      description: "Robust security for manufacturing plants and industrial facilities with environmental monitoring.",
      icon: "🏭",
      features: ["Perimeter Security", "Asset Protection", "Environmental Monitoring"],
    },
    {
      title: "Retail & Commercial",
      description: "Loss prevention and customer safety solutions for shopping centers and retail spaces.",
      icon: "🛍️",
      features: ["Loss Prevention", "Customer Safety", "Inventory Security"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#020617] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Industry Use Cases
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Discover how our comprehensive security and IT solutions are implemented
            across various industries to ensure safety, compliance, and efficiency.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition-all"
            >
              <div className="text-6xl mb-6">{useCase.icon}</div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                {useCase.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-300 flex items-center">
                      <span className="text-cyan-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold text-cyan-300 mb-6">
            Ready to Implement Your Solution?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your specific requirements and get a
            customized security and IT solution for your industry.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-cyan-500 text-[#020617] font-semibold rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:bg-cyan-400 transition"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
