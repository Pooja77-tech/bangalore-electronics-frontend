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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex flex-col items-center text-center">

        {/* ================= HERO / TITLE ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-extrabold tracking-tight
                     bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Bangalore Electronics
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.3em] uppercase text-gray-400">
            Networking Solutions
          </span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-10 h-px w-40 bg-linear-to-r from-transparent via-cyan-400 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 text-gray-300 max-w-3xl leading-relaxed"
        >
          Enterprise-grade security, networking, and electronics delivered with compliance, longevity, and accountability.
        </motion.p>

        {/* ================= CTA BUTTONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/about"
            className="px-10 py-4 rounded-xl bg-emerald-500 text-[#020617] font-semibold shadow-lg hover:bg-emerald-400 transition inline-flex items-center gap-2"
          >
            About Us <ArrowRight size={16} />
          </Link>

          <Link
            to="/offerings"
            className="px-10 py-4 rounded-xl border border-slate-600 text-slate-200 font-semibold hover:border-emerald-400 hover:text-emerald-400 hover:bg-white/5 transition inline-flex items-center gap-2"
          >
            Offerings <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* ================= STATS ================= */}
        <section className="mt-24 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "35+", label: "Years of Excellence" },
              { value: "500+", label: "Enterprise Clients" },
              { value: "300+", label: "Projects Delivered" },
              { value: "Pan-India", label: "Service Presence" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="rounded-xl bg-[#01111f]/30 border border-emerald-400/20 p-6 shadow-[0_20px_60px_rgba(16,185,129,0.25)] hover:shadow-[0_30px_90px_rgba(16,185,129,0.4)] transition"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400">
                  {stat.value}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-slate-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= WHY ENTERPRISES TRUST US ================= */}
        <section className="mt-24 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-emerald-400 mb-8 text-center"
          >
            Why Enterprises Trust Us
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {[
              { icon: <ShieldCheck />, title: "Compliance-Driven", desc: "Audit-ready systems." },
              { icon: <Network />, title: "Vendor Neutral", desc: "Performance-focused solutions." },
              { icon: <Cpu />, title: "SLA-Backed", desc: "Guaranteed response times." },
              { icon: <ArrowRight />, title: "Lifecycle Ownership", desc: "End-to-end delivery." },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="rounded-xl border border-emerald-400/20 p-6 shadow-[0_20px_60px_rgba(16,185,129,0.25)] hover:shadow-[0_30px_90px_rgba(16,185,129,0.4)] transition"
              >
                <div className="text-emerald-400 mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= BUILD SYSTEMS CTA ================= */}
        <section className="mt-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl border border-emerald-400/20 p-12 text-center bg-[#01111f]/30
                       shadow-[0_20px_60px_rgba(16,185,129,0.25)]
                       hover:shadow-[0_30px_90px_rgba(16,185,129,0.4)]
                       transition-all duration-500"
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
            >
              Let’s Build Reliable Systems Together
            </motion.h3>

            <motion.a
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16,185,129,0.6)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-emerald-500 text-[#020617] font-semibold shadow-lg hover:bg-emerald-400 transition"
            >
              Contact Us <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
