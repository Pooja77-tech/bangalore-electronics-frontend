import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#020617] text-white py-28 px-6 flex items-center">
      <div className="max-w-6xl mx-auto text-center">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-extrabold
                     tracking-tight bg-linear-to-r from-green-400 to-cyan-400
                     bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>

        {/* UPCOMING Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold
                           tracking-[0.3em] uppercase text-gray-400">
            Upcoming
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-10 h-px w-40 bg-linear-to-r from-transparent via-cyan-400 to-transparent"
        />

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Our upcoming initiatives reflect a focused commitment to enterprise-grade
          security, networking, and IT infrastructure solutions engineered for
          performance, scalability, and long-term value.
        </motion.p>

      </div>
    </section>
  );
}
