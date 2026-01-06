import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-hidden text-slate-200
      bg-linear-to-br from-[#111827] via-[#1E293B] to-[#0F172A]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_60%)]" />

      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.75rem] bg-white/10 backdrop-blur-2xl
            border border-white/15 shadow-[0_40px_120px_rgba(16,185,129,0.25)] p-14"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-400 font-semibold">
              Trusted Since 1988
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-slate-100">
              Bangalore Electronics
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-3xl">
              Dependable, standards-compliant technology systems across
              security, networking, and electronics.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-xl bg-emerald-500
                text-[#020617] font-semibold shadow-lg
                hover:bg-emerald-400 transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= STATS ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["35+", "Years of Excellence"],
              ["500+", "Enterprise Clients"],
              ["800+", "Projects Delivered"],
              ["Pan India", "Service Presence"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-white/10 backdrop-blur-xl
                border border-white/15 p-8 text-center"
              >
                <h3 className="text-3xl font-bold text-emerald-400">{value}</h3>
                <p className="mt-2 text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMPANY OVERVIEW ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-2xl
            border border-white/15 p-14">
            <p className="text-sm uppercase tracking-widest text-emerald-400">
              Engineering Excellence Since 1988
            </p>

            <p className="mt-6 text-lg text-slate-300 max-w-4xl leading-relaxed">
              Bangalore Electronics supports enterprises, institutions,
              and government bodies with dependable, standards-compliant
              technology systems across security, networking, and electronics.
            </p>
          </div>
        </section>

        {/* ================= WHY ENTERPRISES TRUST US ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          {/* ✅ ONLY CHANGE IS HERE */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 mb-12">
            Why Enterprises Trust Us
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-lg font-semibold text-slate-100">
                Compliance-Driven Delivery
              </h4>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Designed around audits, regulations, and governance requirements.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-100">
                Vendor-Neutral Solutions
              </h4>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Performance-based technology selection, not partnerships.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-100">
                SLA-Backed Support
              </h4>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Defined response times with long-term AMC commitments.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-100">
                Lifecycle Ownership
              </h4>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                From deployment to upgrades and system retirement.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CORE TECHNOLOGY SOLUTIONS ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-2xl
            border border-white/15 p-14">
            <p className="text-sm uppercase tracking-widest text-emerald-400">
              Core Technology Solutions
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {[
                { name: "Biometric & Access Control", link: "/offerings/biometrics-access" },
                { name: "Video Surveillance Systems", link: "/offerings/video-surveillance" },
                { name: "IT & Network Infrastructure", link: "/offerings/it-infrastructure" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="p-8 rounded-2xl bg-black/30
                  border border-white/10 hover:bg-black/50 transition"
                >
                  <p className="text-slate-200 font-medium">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="w-full bg-emerald-500 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/30 rounded-4xl p-12
              backdrop-blur-3xl border border-white/10 shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let’s Build Reliable Systems Together
              </h2>

              <p className="mt-4 text-lg text-gray-200">
                Speak with our engineering team today.
              </p>

              <Link
                to="/contact"
                className="inline-block mt-6 px-10 py-3 rounded-xl
                bg-emerald-500 text-white font-semibold
                hover:bg-emerald-400 transition shadow-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
