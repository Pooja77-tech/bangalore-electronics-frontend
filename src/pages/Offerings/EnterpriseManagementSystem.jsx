import { motion } from "framer-motion";
// Placeholder video - replace with actual video path when available
import benefitsVid from "../../assets/videos/services/benefits.mp4";

export default function EnterpriseManagementSystem() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Enterprise Management System (EMS)
        </h1>
        <p className="mt-6 text-gray-300 max-w-4xl mx-auto">
          A comprehensive solution to help your business run, track, and grow efficiently with advanced modules for operations, finance, HR, and modern enterprise features.
        </p>
      </div>

      {/* TOP VIDEO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-80 overflow-hidden rounded-b-3xl"
      >
        <video
          src="https://cdn-prod-ccv.adobe.com/AMBwM6q9epj/rend/AMBwM6q9epj_720.mp4?hdnts=st%3D1766798583%7Eexp%3D1766884983%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FAMBwM6q9epj%2Frend%2F*%21%2Fi%2FAMBwM6q9epj%2Frend%2F*%21%2FAMBwM6q9epj%2Frend%2F*%21%2FAMBwM6q9epj%2Fimage%2F*%21%2FAMBwM6q9epj%2Fcaptions%2F*%7Ehmac%3D6b9c4aa3d6655cf7cdfbb23407506f30e74d394155e7225a394ae02e1ab11672"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </motion.div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto space-y-20">

        {/* CORE MODULES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            🔹 CORE MODULES (Must-Have)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1️⃣ Dashboard (Command Center)",
                desc: "KPIs at a glance (Sales, Revenue, Orders, Stock), Charts & trends (daily / monthly / yearly), Alerts (low stock, pending approvals)."
              },
              {
                title: "2️⃣ User & Role Management",
                desc: "Admin, Manager, Staff roles, Role-based access control (RBAC), Activity logs (who did what)."
              },
              {
                title: "3️⃣ Inventory Management",
                desc: "Product master (SKU, category, supplier), Stock in / stock out, Low-stock alerts, Barcode / QR support."
              },
              {
                title: "4️⃣ Sales & Order Management",
                desc: "Quotations → Orders → Invoices, Order status tracking, Tax & GST handling, Payment status (paid / pending)."
              },
              {
                title: "5️⃣ Purchase & Vendor Management",
                desc: "Vendor profiles, Purchase orders, Supplier price comparison, Purchase history."
              },
              {
                title: "6️⃣ Customer Management (CRM)",
                desc: "Customer profiles, Contact history, Follow-ups & reminders, Notes & attachments."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINANCE & HR MODULES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            🔹 FINANCE & HR MODULES
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "7️⃣ Accounting & Finance",
                desc: "Income & expense tracking, Profit & loss reports, GST / tax reports, Export to Excel / PDF."
              },
              {
                title: "8️⃣ Employee Management (HRMS)",
                desc: "Employee profiles, Attendance & leave management, Payroll basics, Performance tracking."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OPERATIONS & CONTROL */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            🔹 OPERATIONS & CONTROL
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "9️⃣ Workflow & Approvals",
                desc: "Multi-level approvals (POs, invoices), Status-based workflows, Escalation rules."
              },
              {
                title: "🔟 Reports & Analytics",
                desc: "Custom report builder, Downloadable reports, Graphs & dashboards, Scheduled reports (email)."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MODERN ENTERPRISE FEATURES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            🔹 MODERN ENTERPRISE FEATURES (High Value)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "🔐 11️⃣ Security & Compliance",
                desc: "Two-factor authentication, Data encryption, Audit logs, Backup & recovery."
              },
              {
                title: "☁️ 12️⃣ Cloud & Integrations",
                desc: "Cloud storage, Email & SMS notifications, WhatsApp integration, API support (ERP, CRM, payment gateways)."
              },
              {
                title: "📱 13️⃣ Mobile & UX",
                desc: "Mobile-responsive UI, Optional mobile app, Dark mode, Quick actions & shortcuts."
              },
              {
                title: "🤖 14️⃣ Smart / AI Features (Advanced)",
                desc: "Sales forecasting, Inventory demand prediction, Auto reorder suggestions, Chatbot for internal queries."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OPTIONAL BUT IMPRESSIVE */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            🔹 OPTIONAL BUT IMPRESSIVE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "15️⃣ Document Management",
                desc: "Upload invoices, contracts, Version control, Search & tagging."
              },
              {
                title: "16️⃣ Multi-Branch / Multi-Company Support",
                desc: "Branch-wise stock & sales, Centralized admin control."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
