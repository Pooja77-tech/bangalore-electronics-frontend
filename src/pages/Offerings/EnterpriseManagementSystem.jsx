import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const emsVid = "/videos/services/benefits.mp4";

export default function EnterpriseManagementSystem() {
  const features = [
    "Centralized enterprise dashboard & analytics",
    "Inventory, sales & purchase management",
    "Finance, accounting & GST-ready reports",
    "Employee & role-based access control",
    "Workflow approvals & audit logs",
    "Scalable, cloud-ready architecture",
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
            src={emsVid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Enterprise Management System (EMS)
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Our Enterprise Management System (EMS) is a unified platform
              designed to manage operations, finance, inventory, HR, and
              business intelligence—helping organizations operate efficiently,
              securely, and at scale.
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
            Where EMS Is Used
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            EMS solutions are widely used across manufacturing companies,
            distributors, enterprises, government organizations, educational
            institutions, logistics providers, and service-based businesses to
            streamline operations and enable data-driven decision-making.
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
            Transform Your Business with EMS
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
