import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useCasesVid from "../../assets/videos/services/use-cases.mp4";

export default function UseCases() {
  const cases = [
    {
      title: "Corporate Enterprises",
      desc: "Secure IT infrastructure, access control, and surveillance solutions for offices, campuses, and corporate facilities.",
    },
    {
      title: "Healthcare & Hospitals",
      desc: "Reliable IT systems, surveillance, and access management to support patient safety and critical operations.",
    },
    {
      title: "Educational Institutions",
      desc: "Scalable technology solutions for schools, colleges, and universities to enhance learning and administration.",
    },
    {
      title: "Government & Public Sector",
      desc: "Mission-critical, secure, and compliant technology deployments for government agencies and public services.",
    },
    {
      title: "Industrial & Manufacturing",
      desc: "Robust infrastructure and monitoring solutions for factories, warehouses, and industrial environments.",
    },
    {
      title: "Smart Cities & Infrastructure",
      desc: "Integrated surveillance, connectivity, and control systems for modern urban environments.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link to="/services" className="text-cyan-400 hover:text-cyan-300 font-semibold">
          ← Back to Services
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
        >
          <video
            src={useCasesVid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-90 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Industry Use Cases
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Explore how our technology solutions are applied across industries to solve real-world challenges and drive operational excellence.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-200 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Looking for a Solution for Your Industry?
          </h3>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Contact Our Team
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
