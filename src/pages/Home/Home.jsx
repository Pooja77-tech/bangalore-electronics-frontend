import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Chatbot from "../../components/Chatbot";
 
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-300">
<<<<<<< HEAD
 
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-linear-to-brrom-[#020617] via-[#020617] to-[#031c1c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />
 
      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
 
=======

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#020617] to-[#031c1c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

>>>>>>> 7d8e27860ddfd454b802d52b4c3259e576a4d2cc
        {/* ================= HERO ================= */}
        <section className="px-6 pt-32 pb-28 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-slate-500/10 bg-slate-500/5 backdrop-blur-2xl p-12 shadow-[0_0_60px_rgba(34,211,238,0.18)]"
          >
            <p className="text-xs tracking-widest text-slate-400 uppercase">
              Trusted Since 1988 • Bangalore
            </p>
<<<<<<< HEAD
 
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-teal-400">
              BANGALORE ELECTRONICS
            </h1>
 
=======

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-teal-400">
              BANGALORE ELECTRONICS
            </h1>

>>>>>>> 7d8e27860ddfd454b802d52b4c3259e576a4d2cc
            <p className="mt-6 max-w-3xl text-slate-300">
              Enterprise-grade electronics, surveillance, biometrics, and IT
              infrastructure trusted by industries and organizations across India.
            </p>
<<<<<<< HEAD
 
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="px-7 py-3 rounded-xl bg-teal-500 text-[#020617] font-semibold shadow-[0_0_25px_rgba(20,184,166,0.6)] hover:bg-teal-400 transition inline-block">
                Get Consultation
              </Link>
              <Link to="/services" className="px-7 py-3 rounded-xl border border-slate-400/20 bg-slate-400/5 backdrop-blur hover:bg-slate-400/10 transition inline-block">
                View Services
              </Link>
            </div>
 
=======

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="px-7 py-3 rounded-xl bg-teal-500 text-[#020617] font-semibold shadow-[0_0_25px_rgba(20,184,166,0.6)] hover:bg-teal-400 transition">
                Get Consultation
              </Link>
              <Link to="/services" className="px-7 py-3 rounded-xl border border-slate-400/20 bg-slate-400/5 backdrop-blur hover:bg-slate-400/10 transition">
                View Services
              </Link>
            </div>

>>>>>>> 7d8e27860ddfd454b802d52b4c3259e576a4d2cc
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "ISO-Grade Quality",
                "Enterprise Security",
                "In-House Engineers",
                "24/7 Support",
              ].map((item) => (
                <div key={item} className="text-sm flex items-center gap-2 text-slate-300">
                  <span className="text-teal-400">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>
<<<<<<< HEAD
 
        {/* ================= ABOUT ================= */}
        <section className="px-6 py-28 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-teal-400">
            Engineering Excellence Since 1988
          </h2>
          <p className="mt-6 text-slate-300 max-w-4xl mx-auto leading-relaxed">
=======

        {/* ================= ABOUT ================= */}
        <section className="px-6 py-28 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-teal-400 text-center">
            Engineering Excellence Since 1988
          </h2>
          <p className="mt-6 text-slate-300 max-w-4xl mx-auto leading-relaxed text-center">
>>>>>>> 7d8e27860ddfd454b802d52b4c3259e576a4d2cc
            Bangalore Electronics is a pioneer in electronics, security systems,
            solar solutions, and system integration, delivering reliable,
            scalable, and future-ready solutions for over three decades.
          </p>
<<<<<<< HEAD
          <Link to="/about" className="mt-8 px-7 py-3 rounded-xl border border-slate-400/20 bg-slate-400/5 backdrop-blur hover:bg-slate-400/10 transition inline-block">
            Learn More About Us
          </Link>
        </section>
 
=======
          <div className="mt-8 flex justify-start">
            <Link to="/about" className="px-7 py-3 rounded-xl border border-slate-400/20 bg-slate-400/5 backdrop-blur hover:bg-slate-400/10 transition">
              Learn More About Us
            </Link>
          </div>
        </section>

>>>>>>> 7d8e27860ddfd454b802d52b4c3259e576a4d2cc
        {/* ================= STATS ================= */}
        <section className="px-6 pb-28">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["35+", "Years"],
              ["500+", "Clients"],
              ["800+", "Projects"],
              ["ISO", "Practices"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-500/10 bg-slate-500/5 backdrop-blur-xl p-6 text-center shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <h3 className="text-3xl font-bold text-teal-400">{value}</h3>
                <p className="mt-2 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </section>
<<<<<<< HEAD
 
        {/* ================= SERVICES ================= */}
        <section className="px-6 pb-32 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-teal-400 text-center mb-12">
            Our Core Services
          </h2>
 
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Biometrics Access", "Secure, scalable, enterprise-ready solutions.", "/services/biometrics-access"],
              ["Video Surveillance", "Secure, scalable, enterprise-ready solutions.", "/services/video-surveillance"],
              ["IT Infrastructure", "Secure, scalable, enterprise-ready solutions.", "/services/it-infrastructure"],
            ].map(([title, desc, link]) => (
              link ? (
                <Link
                  key={title}
                  to={link}
                  className="rounded-3xl border border-slate-500/10 bg-slate-500/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:border-teal-400/40 transition block"
                >
                  <h3 className="text-xl font-semibold text-teal-400">{title}</h3>
                  <p className="mt-4 text-slate-300 text-sm">{desc}</p>
                </Link>
              ) : (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-500/10 bg-slate-500/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:border-teal-400/40 transition"
                >
                  <h3 className="text-xl font-semibold text-teal-400">{title}</h3>
                  <p className="mt-4 text-slate-300 text-sm">{desc}</p>
                </div>
              )
            ))}
          </div>
        </section>
 


      </div>

      {/* ================= CHATBOT ================= */}
      <Chatbot />
=======

        {/* ================= SERVICES ================= */}
        <section className="px-6 pb-32 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-teal-400 text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Biometrics Access", "Secure, scalable, enterprise-ready solutions."],
              ["Video Surveillance", "Secure, scalable, enterprise-ready solutions."],
              ["IT Infrastructure", "Secure, scalable, enterprise-ready solutions."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-500/10 bg-slate-500/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:border-teal-400/40 transition"
              >
                <h3 className="text-xl font-semibold text-teal-400">{title}</h3>
                <p className="mt-4 text-slate-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
>>>>>>> 7d8e27860ddfd454b802d52b4c3259e576a4d2cc
    </div>
  );
}
 
 