import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Solutions() {
  const solutionsData = [
    {
      title: "Corporate Solutions",
      link: "/solutions/corporate",
      desc: "Tailored solutions for corporate environments, enhancing productivity and security.",
    },
    {
      title: "Education Solutions",
      link: "/solutions/education",
      desc: "Advanced technology solutions for educational institutions to support learning and administration.",
    },
    {
      title: "Government Solutions",
      link: "/solutions/government",
      desc: "Reliable and secure solutions designed for government agencies and public services.",
    },
    {
      title: "Healthcare Solutions",
      link: "/solutions/healthcare",
      desc: "Innovative healthcare solutions to improve patient care and operational efficiency.",
    },
    {
      title: "Industrial Solutions",
      link: "/solutions/industrial",
      desc: "Robust solutions for industrial applications, ensuring safety and efficiency.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Our Solutions
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive solutions tailored for various industries, delivering modern, efficient, and future‑ready results.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {solutionsData.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg hover:border-cyan-400/50 hover:shadow-cyan-500/10 transition-all"
            >
              <div className="p-8 text-center flex flex-col h-full">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed grow">
                  {solution.desc}
                </p>

                <Link
                  to={solution.link}
                  className="mt-6 inline-block text-cyan-400 font-semibold hover:text-cyan-300 transition"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 mx-auto max-w-4xl text-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg p-12"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
            Customer Satisfaction
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Our solutions have earned an average 4‑star customer satisfaction rating for reliability, timely execution, and professional support.
          </p>
          <div className="flex justify-center items-center gap-1">
            <span className="text-yellow-400 text-2xl">★★★★</span>
            <span className="text-gray-500 text-2xl">☆</span>
            <span className="text-gray-300 ml-2">(4.0)</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
