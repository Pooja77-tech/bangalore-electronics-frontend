import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Video Surveillance Deployment",
      description:
        "Design and implementation of large-scale video surveillance systems with intelligent monitoring, secure storage, and remote access for enterprise and institutional facilities.",
      stack: ["CCTV Systems", "Video Analytics", "Secure Networking"],
    },
    {
      title: "Biometric & Access Control Integration",
      description:
        "Deployment of biometric and RFID-based access control systems to enhance security, track movement, and ensure controlled access across multiple locations.",
      stack: ["Biometrics", "RFID", "Access Management"],
    },
    {
      title: "IT & Network Infrastructure Build-out",
      description:
        "End-to-end active and passive networking solutions including structured cabling, enterprise switches, routing, and performance optimization.",
      stack: ["Structured Cabling", "LAN/WAN", "Enterprise Networking"],
    },
    {
      title: "Server & Storage Infrastructure Setup",
      description:
        "Implementation of reliable server and storage solutions to support mission-critical business operations with scalability and redundancy.",
      stack: ["Servers", "Enterprise Storage", "Backup Systems"],
    },
    {
      title: "Integrated System Solutions",
      description:
        "System integration projects combining surveillance, access control, networking, and IT infrastructure into a unified and manageable platform.",
      stack: ["System Integration", "Security Systems", "Infrastructure"],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-200">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.14),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#64748b_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />

      <div className="relative z-10">

        {/* ================= HEADER ================= */}
        <section className="px-6 pt-28 pb-20 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-emerald-400"
          >
            Project Experience & Case Highlights
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-lg">
            A snapshot of the enterprise-grade technology projects delivered by
            Bangalore Electronics across security, networking, and IT
            infrastructure domains.
          </p>
        </section>

        {/* ================= PROJECT CARDS ================= */}
        <section className="px-6 pb-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="rounded-[2.25rem] border border-emerald-400/20 bg-white/5 backdrop-blur-2xl p-12 shadow-[0_30px_90px_rgba(16,185,129,0.35)] hover:shadow-[0_40px_120px_rgba(16,185,129,0.5)] transition"
              >
                <h3 className="text-xl font-semibold text-emerald-400">
                  {project.title}
                </h3>

                <p className="mt-6 text-slate-300 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full text-xs border border-emerald-400/30 bg-white/5 backdrop-blur"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
