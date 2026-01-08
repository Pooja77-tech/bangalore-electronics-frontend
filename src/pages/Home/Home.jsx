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
    <div className="relative min-h-screen overflow-x-hidden text-slate-200">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#020617]" />
 
      <div className="relative z-10">
        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-4 pt-20 sm:pt-28 pb-16 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-xl p-5 sm:p-8 md:p-12"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Trusted Since 1988
            </p>
 
            <h1 className="mt-4 text-2xl sm:text-3xl md:text-6xl font-extrabold
              leading-tight wrap-break-word text-white">
              Bangalore<span className="text-emerald-400"> Electronics</span>
            </h1>
 
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed wrap-break-word">
              Enterprise-grade security, networking, and electronics delivered
              with compliance, longevity, and accountability.
            </p>
 
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500
                  px-5 py-3 text-sm font-semibold text-[#020617]
                  hover:bg-emerald-400 transition whitespace-nowrap"
              >
                About Us <ArrowRight size={16} />
              </Link>
 
              <Link
                to="/offerings"
                className="inline-flex items-center gap-2 rounded-lg border
                  border-white/20 px-5 py-3 text-sm text-white
                  hover:bg-white/10 transition whitespace-nowrap"
              >
                Offerings <ArrowRight size={16} />
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
                className="rounded-xl bg-white/5 border border-white/10
                  p-5 text-center overflow-hidden"
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
            className="rounded-2xl bg-white/5 border border-white/10
              p-5 sm:p-8 md:p-12"
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
                className="rounded-xl bg-white/5 border border-white/10
                  p-5 overflow-hidden"
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
 
 