import { motion } from "framer-motion";
 
export default function Solutions() {
  const solutions = [
    {
      title: "Corporate Solutions",
      desc: "Enterprise-grade security, networking, and system integration solutions designed to enhance operational efficiency, data protection, and infrastructure reliability across corporate environments.",
    },
    {
      title: "Education Solutions",
      desc: "Technology solutions tailored for educational institutions, enabling secure campuses, smart classrooms, surveillance, access control, and scalable network infrastructure.",
    },
    {
      title: "Government Solutions",
      desc: "Mission-critical and compliance-ready solutions for government and public-sector organizations, ensuring resilience, security, scalability, and long-term operational continuity.",
    },
  ];
 
  return (
    <div
      className="relative min-h-screen overflow-hidden text-slate-200
      bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_60%)]" />
 
      <div className="relative z-10">
 
        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] bg-white/10 backdrop-blur-2xl
            border border-white/15 shadow-[0_50px_140px_rgba(16,185,129,0.25)] p-16 text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-400 font-semibold">
              Our Expertise
            </p>
 
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-emerald-400">
              Industry-Focused Solutions
            </h1>
 
            <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Bangalore Electronics delivers sector-specific technology solutions
              engineered for performance, compliance, scalability, and long-term
              reliability across enterprise and public-sector environments.
            </p>
          </motion.div>
        </section>
 
        {/* ================= SOLUTIONS SHOWCASE ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="grid lg:grid-cols-3 gap-10">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="group rounded-[2.75rem] bg-white/10 backdrop-blur-2xl
                border border-white/15 p-12
                hover:shadow-[0_40px_120px_rgba(16,185,129,0.25)]
                transition-all duration-500"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6">
                  {item.title}
                </h3>
 
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  {item.desc}
                </p>
 
                <div className="mt-10 h-0.5 w-16 bg-emerald-400 rounded-full group-hover:w-28 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>
 
        {/* ================= CUSTOMER SATISFACTION ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[3rem] bg-white/10 backdrop-blur-2xl
            border border-white/15 p-16 text-center"
          >
            <p className="text-sm md:text-base uppercase tracking-[0.35em] text-emerald-400 font-semibold">
              Customer Satisfaction
            </p>
 
            <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our solutions consistently achieve a strong customer satisfaction
              rating for reliability, timely execution, and professional support.
            </p>
 
            <div className="mt-10 flex justify-center items-center gap-2 text-4xl text-yellow-400">
              <span>★★★★</span>
              <span className="text-slate-500">☆</span>
            </div>
 
            <p className="mt-3 text-sm text-slate-400">(4.0 Average Rating)</p>
          </motion.div>
        </section>
 
      </div>
    </div>
  );
}