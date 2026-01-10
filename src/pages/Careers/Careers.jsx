import { motion } from "framer-motion";

export default function Careers() {
  return (
    <section className="min-h-screen bg-[#020617] text-slate-200 py-20 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.14),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#64748b_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Careers
          </h1>
          <p className="mt-6 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At Bangalore Electronics Company, we believe our people are the foundation of our success. We foster a professional, inclusive, and growth-oriented work environment where individuals are empowered to innovate, collaborate, and perform at their best. Our culture is built on integrity, excellence, and mutual respect, enabling every team member to contribute meaningfully to impactful outcomes.
            <br /><br />
            We value creativity and continuous improvement, encourage teamwork across disciplines, and celebrate diverse perspectives that strengthen our solutions. With a strong focus on quality, accountability, and long-term vision, we are committed to supporting both personal development and organizational excellence—because when our people grow, our partnerships and solutions grow with them.
          </p>
        </motion.div>

        {/* ================= APPLICATION FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-2xl
                     border border-emerald-400/20 rounded-3xl p-10
                     shadow-[0_30px_80px_rgba(16,185,129,0.25)]
                     hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)]
                     transition-all"
        >
          <h2 className="text-xl font-semibold text-emerald-400 mb-8">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg bg-white/10 border border-emerald-400/20
                         px-4 py-3 text-sm text-white placeholder-slate-400
                         focus:outline-none focus:border-emerald-400 transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-white/10 border border-emerald-400/20
                         px-4 py-3 text-sm text-white placeholder-slate-400
                         focus:outline-none focus:border-emerald-400 transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg bg-white/10 border border-emerald-400/20
                         px-4 py-3 text-sm text-white placeholder-slate-400
                         focus:outline-none focus:border-emerald-400 transition"
            />

            <input
              type="text"
              placeholder="Years of Experience"
              className="w-full rounded-lg bg-white/10 border border-emerald-400/20
                         px-4 py-3 text-sm text-white placeholder-slate-400
                         focus:outline-none focus:border-emerald-400 transition"
            />

            <input
              type="text"
              placeholder="Skills (eg. Nettworking, Security etc)"
              className="w-full rounded-lg bg-white/10 border border-emerald-400/20
                         px-4 py-3 text-sm text-white placeholder-slate-400
                         focus:outline-none focus:border-emerald-400 transition"
            />

            <textarea
              rows="4"
              placeholder="Professional Summary"
              className="w-full rounded-lg bg-white/10 border border-emerald-400/20
                         px-4 py-3 text-sm text-white placeholder-slate-400
                         focus:outline-none focus:border-emerald-400 transition resize-none"
            />

            {/* File Upload */}
            <div className="flex items-center gap-4 bg-white/10 border border-emerald-400/20 rounded-lg px-4 py-3">
              <label className="cursor-pointer text-sm bg-emerald-400 text-black px-4 py-1.5 rounded-md font-semibold">
                Choose File
                <input type="file" className="hidden" />
              </label>
              <span className="text-xs text-slate-400">No file chosen</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-linear-to-r from-emerald-400 to-cyan-400
                         text-black font-semibold py-3 rounded-lg
                         hover:from-emerald-500 hover:to-cyan-500 transition"
            >
              Submit Application
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
