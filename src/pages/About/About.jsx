import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center bg-white/5 backdrop-blur-2xl border border-emerald-400/20 rounded-2xl p-6 shadow-[0_20px_60px_rgba(16,185,129,0.25)] hover:shadow-[0_30px_90px_rgba(16,185,129,0.4)] transition">
      <h3 className="text-4xl font-bold text-emerald-400">{count}+</h3>
      <p className="text-slate-300 mt-2">{label}</p>
    </div>
  );
};

export default function About() {
  return (
    <section className="min-h-screen bg-[#020617] text-slate-200 py-20 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.14),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#64748b_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Established in 1988, Bangalore Electronics is a trusted name in electronic components, security systems, solar solutions, and system integration—delivering international-standard solutions built for the future.
          </p>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-2xl border border-emerald-400/20 rounded-3xl p-10 mb-20 shadow-[0_30px_90px_rgba(16,185,129,0.25)] hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)] transition"
        >
          <h2 className="text-3xl font-semibold text-emerald-400 mb-6">Who We Are</h2>
          <p className="text-slate-300 leading-relaxed">
            Bangalore Electronics has been a pioneer in the electronics, solar, and security industry for over three decades. We have evolved into a capable system integration and solution provider supported by a highly skilled in-house technical team. Our focus is on delivering reliable, scalable, and customized solutions that meet global quality standards.
          </p>
        </motion.div>

        {/* Founder / Mission / Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {["Founder", "Mission", "Vision"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-2xl border border-emerald-400/20 rounded-2xl p-8 shadow-[0_20px_60px_rgba(16,185,129,0.25)] hover:shadow-[0_30px_90px_rgba(16,185,129,0.4)] transition"
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">{item}</h3>
              {item === "Founder" && (
                <p className="text-slate-300">
                  Late C. Kiran Lal was the founder and visionary leader of Bangalore Electronics.
                  He believed strongly in integrity, quality, and long-term customer relationships.
                  His leadership established a culture of accountability and technical excellence.
                  These values continue to guide the organization’s growth and decisions.
                </p>
              )}
              {item === "Mission" && (
                <p className="text-slate-300">
                  To deliver high-quality, customized technology solutions for diverse industries.
                  To consistently exceed customer expectations through reliability and precision.
                  To ensure compliance with industry standards and best practices.
                  To build long-term value through trust, performance, and service excellence.
                </p>
              )}
              {item === "Vision" && (
                <p className="text-slate-300">
                  To become a leading value-added technology solution provider in India.
                  To be recognized for reliability, innovation, and professional execution.
                  To continuously enhance services through skilled people and modern systems.
                  To contribute to sustainable growth for clients, partners, and stakeholders.
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-2xl border border-emerald-400/20 rounded-3xl p-10 mb-20 shadow-[0_30px_90px_rgba(16,185,129,0.25)] hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)] transition"
        >
          <h2 className="text-3xl font-semibold text-emerald-400 mb-6">Our Core Values</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
            <li>• Integrity, honesty, and transparency</li>
            <li>• Professionalism and accountability</li>
            <li>• Continuous improvement and innovation</li>
            <li>• Mutual respect and teamwork</li>
          </ul>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8"
        >
          <Counter end={35} label="Years Experience" />
          <Counter end={50} label="Expert Technicians" />
          <Counter end={200} label="Satisfied Clients" />
          <Counter end={300} label="Completed Projects" />
        </motion.div>
      </div>
    </section>
  );
}
