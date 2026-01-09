import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Cpu, Network } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-200 bg-[#020617]">
      
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.14),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#64748b_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />

      <div className="relative z-10">
        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.75rem] bg-white/5 backdrop-blur-2xl border border-emerald-400/20 shadow-[0_30px_90px_rgba(16,185,129,0.35)] p-14 hover:shadow-[0_40px_120px_rgba(16,185,129,0.5)] transition"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-400 font-semibold">
              Trusted Since 1988
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-slate-100">
              Bangalore Electronics
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-3xl">
              We deliver enterprise-grade security, networking, and electronics solutions engineered to meet rigorous compliance standards, ensure long-term operational reliability, and uphold the highest levels of accountability.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-xl bg-emerald-500 text-[#020617] font-semibold shadow-lg hover:bg-emerald-400 transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= STATS ================= */}
        <section className="max-w-7xl mx-auto px-4 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["35+", "Years of Excellence"],
              ["500+", "Enterprise Clients"],
              ["300+", "Projects Delivered"],
              ["Pan-India", "Service Presence"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                {...fadeUp}
                className="rounded-xl bg-white/5 border border-emerald-400/20 p-5 text-center overflow-hidden shadow-[0_30px_90px_rgba(16,185,129,0.25)] hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)] transition"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400">
                  {value}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 wrap-break-word">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="max-w-7xl mx-auto px-4 pb-16 sm:pb-24">
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white/5 border border-emerald-400/20 p-5 sm:p-8 md:p-12 shadow-[0_30px_90px_rgba(16,185,129,0.25)] hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)] transition"
          >
            <p className="text-xs uppercase tracking-widest text-emerald-400">
              Engineering Excellence
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed wrap-break-word">
              Bangalore Electronics partners with enterprises, institutions,
              and government bodies to deliver scalable, compliant, and
              future-ready technology systems.
            </p>
          </motion.div>
        </section>

        {/* ================= WHY TRUST ================= */}
        <section className="max-w-7xl mx-auto px-4 pb-16 sm:pb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6">
            Why Enterprises Trust Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: ShieldCheck, title: "Compliance-Driven", desc: "Audit-ready systems." },
              { icon: Cpu, title: "Vendor Neutral", desc: "Performance-focused solutions." },
              { icon: Network, title: "SLA-Backed", desc: "Guaranteed response times." },
              { icon: ArrowRight, title: "Lifecycle Ownership", desc: "End-to-end delivery." },
            ].map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="rounded-xl bg-white/5 border border-emerald-400/20 p-5 overflow-hidden shadow-[0_30px_90px_rgba(16,185,129,0.25)] hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)] transition"
              >
                <item.icon className="text-emerald-400" size={18} />
                <h4 className="mt-3 text-sm font-semibold text-white wrap-break-word">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed wrap-break-word">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              {...fadeUp}
              className="rounded-2xl bg-emerald-500 p-px"
            >
              <div className="rounded-2xl bg-[#020617] p-6 sm:p-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Let’s Build Reliable Systems Together
                </h2>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3
                    rounded-lg bg-emerald-500 text-[#020617]
                    text-sm font-semibold hover:bg-emerald-400
                    transition whitespace-nowrap"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
