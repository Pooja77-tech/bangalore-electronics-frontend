import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EnterpriseManagementSystem() {
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
            src="/videos/services/enterprise-management.mp4"
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
              A comprehensive enterprise platform designed to manage operations,
              finance, HR, and business workflows—helping organizations run,
              track, and scale efficiently with complete operational control.
            </p>
          </div>
        </motion.div>

        {/* Core Modules */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Core Modules
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Dashboard & Business KPIs",
              "User & Role Management (RBAC)",
              "Inventory & Stock Management",
              "Sales, Orders & Invoicing",
              "Purchase & Vendor Management",
              "Customer Relationship Management (CRM)",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Finance & HR */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Finance & HR Modules
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              "Accounting, Taxation & Financial Reports",
              "Employee Management, Payroll & Attendance",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Operations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Operations & Control
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              "Workflow Automation & Multi-level Approvals",
              "Reports, Analytics & Business Intelligence",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modern Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Modern Enterprise Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Security, Audit Logs & Compliance",
              "Cloud, API & Third-Party Integrations",
              "Mobile-Ready UI & Enhanced UX",
              "AI Insights & Smart Automation",
            ].map((item) => (
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
            Streamline Your Enterprise Operations
          </h3>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Talk to Our Experts
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
