import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Cpu, Network } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-200">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#020617] to-[#020617]" />
      <div className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-emerald-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_45%)]" />

      <div className="relative z-10">
        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl p-14 shadow-[0_40px_140px_rgba(16,185,129,0.35)]"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

            <p className="text-xs uppercase tracking-[0.4em] text-emerald-400 font-semibold">
              Trusted Since 1988
            </p>

            <h1 className="mt-6 text-4xl md:text-7xl font-black tracking-tight text-white">
              Bangalore<span className="text-emerald-400">Electronics</span>
              <br /> 
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-3xl">
              Enterprise‑grade security, networking, and electronics — delivered
              with compliance, longevity, and accountability.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-10 py-4 text-[#020617] font-semibold shadow-xl hover:bg-emerald-400 transition"
              >
                About Us <ArrowRight size={18} />
              </Link>
              <Link
                to="/offerings"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-10 py-4 text-white hover:bg-white/10 transition"
              >
                Explore Offerings <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= STATS ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["35+", "Years of Excellence"],
              ["300+", "Enterprise Clients"],
              ["800+", "Projects Delivered"],
              ["Pan‑India", "Service Presence"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                {...fadeUp}
                className="rounded-2xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 text-center hover:-translate-y-1 transition"
              >
                <h3 className="text-4xl font-extrabold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {value}
                </h3>
                <p className="mt-2 text-slate-300">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <motion.div
            {...fadeUp}
            className="rounded-[2.75rem] bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 p-14"
          >
            <p className="text-sm uppercase tracking-widest text-emerald-400">
              Engineering Excellence Since 1988
            </p>
            <p className="mt-6 text-lg text-slate-300 max-w-4xl leading-relaxed">
              Bangalore Electronics partners with enterprises, institutions, and
              government bodies to deliver compliant, scalable, and future‑ready
              technology systems.
            </p>
          </motion.div>
        </section>

        {/* ================= WHY TRUST ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-12">
            Why Enterprises Trust Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Compliance‑Driven",
                desc: "Audit‑ready systems aligned with regulations and governance.",
              },
              {
                icon: Cpu,
                title: "Vendor Neutral",
                desc: "Technology chosen on performance — not partnerships.",
              },
              {
                icon: Network,
                title: "SLA‑Backed",
                desc: "Defined response times with long‑term AMC support.",
              },
              {
                icon: ArrowRight,
                title: "Lifecycle Ownership",
                desc: "From deployment to upgrades and retirement.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-8 hover:bg-white/10 transition"
              >
                <item.icon className="text-emerald-400" />
                <h4 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SOLUTIONS ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <motion.div
            {...fadeUp}
            className="rounded-[2.75rem] bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 p-14"
          >
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
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-8 transition hover:border-emerald-400"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition" />
                  <p className="relative text-lg font-medium text-white">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              {...fadeUp}
              className="rounded-[3rem] bg-linear-to-r from-emerald-500 to-cyan-500 p-px"
            >
              <div className="rounded-[3rem] bg-[#020617] p-14">
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Let’s Build Reliable Systems Together
                </h2>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-12 py-4 rounded-xl bg-emerald-500 text-[#020617] font-semibold hover:bg-emerald-400 transition"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
