import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 
export default function Solutions() {
  const navigate = useNavigate();
 
  return (
    <section className="min-h-screen bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Solutions
          </h1>
        </motion.div>
 
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Our Solutions</h2>
          <p className="text-gray-300 leading-relaxed">
            Our Solutions are designed to address real-world challenges faced by businesses, industries, and residential projects by delivering reliable, scalable, and cost-effective technology implementations. At Bangalore Electronics, we provide end-to-end solutions across electronic components, security systems, networking infrastructure, server and storage, and system integration—starting from requirement analysis and solution design to installation, testing, and long-term support. Each solution is customized based on site conditions, industry standards, and client objectives to ensure performance, security, and future scalability. Our solutions are trusted by clients for their quality, consistency, and practical results, earning an average 4-star customer satisfaction rating for reliability, timely execution, and professional support.
          </p>
        </motion.div>
 
        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-20 text-center"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Customer Satisfaction</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Our solutions have earned an average 4-star customer satisfaction rating for reliability, timely execution, and professional support.
          </p>
          <div className="flex justify-center items-center space-x-1">
            <span className="text-yellow-400 text-2xl">★★★★</span>
            <span className="text-gray-500 text-2xl">☆</span>
            <span className="text-gray-300 ml-2">(4.0)</span>
          </div>
        </motion.div>
 
      </div>
    </section>
  );
}
 