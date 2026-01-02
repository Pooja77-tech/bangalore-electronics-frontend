import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-200">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#64748b_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />

      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <section className="px-6 pt-28 pb-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.75rem] border border-emerald-400/20 bg-white/5 backdrop-blur-2xl p-14 shadow-[0_40px_120px_rgba(16,185,129,0.35)]"
          >
            <p className="text-xs tracking-[0.35em] text-emerald-400 uppercase font-semibold">
              Established 1988 • Trusted Technology Partner
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-emerald-400 leading-tight">
              Bangalore Electronics
            </h1>

            <p className="mt-8 max-w-3xl text-slate-300 text-lg leading-relaxed">
              Enterprise-grade electronics, biometric access control, video
              surveillance, networking, and IT infrastructure solutions built
              for reliability, compliance, and longevity.
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-xl bg-emerald-500 text-[#020617] font-semibold shadow-[0_18px_50px_rgba(16,185,129,0.55)] hover:bg-emerald-400 transition"
              >
                Request Consultation
              </Link>
              <Link
                to="/services"
                className="px-10 py-4 rounded-xl border border-emerald-400/30 bg-white/5 backdrop-blur hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-slate-300">
              {[
                "ISO & Quality-Driven Processes",
                "Government & Enterprise Projects",
                "Certified Engineering Teams",
                "AMC & 24/7 Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ================= TRUST METRICS ================= */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["35+", "Years of Excellence"],
              ["500+", "Enterprise Clients"],
              ["800+", "Projects Delivered"],
              ["Pan India", "Service Presence"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-emerald-400/20 bg-white/5 backdrop-blur-2xl p-8 text-center shadow-[0_25px_70px_rgba(16,185,129,0.3)]"
              >
                <h3 className="text-3xl font-extrabold text-emerald-400">
                  {value}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMPLIANCE ================= */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto rounded-[2.25rem] border border-emerald-400/20 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_30px_80px_rgba(16,185,129,0.3)]">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-400 text-center font-semibold">
              Compliance & Standards
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-slate-300">
              <span>ISO-Aligned Processes</span>
              <span>Security-First Architecture</span>
              <span>Government Vendor Experience</span>
              <span>Quality & Safety Compliance</span>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="px-6 pb-24 max-w-6xl mx-auto text-center">
          <div className="rounded-[2.5rem] border border-emerald-400/20 bg-white/5 backdrop-blur-2xl p-14 shadow-[0_35px_90px_rgba(16,185,129,0.35)]">
            <h2 className="text-3xl font-bold text-emerald-400">
              Engineering Excellence Since 1988
            </h2>
            <p className="mt-8 text-slate-300 leading-relaxed text-lg">
              Bangalore Electronics supports enterprises, institutions, and
              government bodies with dependable, standards-compliant technology
              systems across security, networking, and electronics.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-block px-10 py-4 rounded-xl border border-emerald-400/30 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              Company Overview
            </Link>
          </div>
        </section>

        {/* ================= WHY TRUST US ================= */}
        <section className="px-6 pb-28 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-400 text-center mb-14">
            Why Enterprises Trust Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Compliance-Driven Delivery", "Designed around audits, regulations, and governance requirements."],
              ["Vendor-Neutral Solutions", "Technology choices based on performance, not partnerships."],
              ["SLA-Backed Support", "Defined response times with long-term AMC commitments."],
              ["Lifecycle Ownership", "From deployment to upgrades and system retirement."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-4xl border border-emerald-400/20 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_25px_70px_rgba(16,185,129,0.3)]"
              >
                <h3 className="text-lg font-semibold text-emerald-400">
                  {title}
                </h3>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="px-6 pb-28 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-400 text-center mb-14">
            Core Technology Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              [
                "Biometric & Access Control",
                "Secure identity and access systems for enterprises and institutions.",
                "/services/biometrics-access",
              ],
              [
                "Video Surveillance Systems",
                "Intelligent CCTV and monitoring for critical infrastructure.",
                "/services/video-surveillance",
              ],
              [
                "IT & Network Infrastructure",
                "Enterprise networking, structured cabling, and system integration.",
                "/services/it-infrastructure",
              ],
            ].map(([title, desc, link]) => (
              <Link
                key={title}
                to={link}
                className="group rounded-[2.25rem] border border-emerald-400/20 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_30px_90px_rgba(16,185,129,0.35)] hover:shadow-[0_40px_120px_rgba(16,185,129,0.5)] transition"
              >
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition">
                  {title}
                </h3>
                <p className="mt-5 text-slate-300 text-sm leading-relaxed">
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= ENGAGEMENT PROCESS ================= */}
        <section className="px-6 pb-28 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-400 text-center mb-14">
            Engagement & Delivery Model
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              "Assessment",
              "Design & Approval",
              "Deployment",
              "Validation",
              "AMC & Support",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-4xl border border-emerald-400/20 bg-white/5 backdrop-blur-2xl p-7 shadow-[0_25px_60px_rgba(16,185,129,0.25)]"
              >
                <div className="text-emerald-400 font-extrabold text-xl">
                  0{index + 1}
                </div>
                <p className="mt-2 text-sm text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
