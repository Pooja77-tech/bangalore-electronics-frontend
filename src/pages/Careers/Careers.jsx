import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    
    <>
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
              Careers
            </h1>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              At Bangalore Electronics Company, we're delighted that you're considering joining our team. We firmly believe that our employees are the foundation of our success. Our mission is to provide a welcoming and supportive work environment where everyone can grow, Succeed, and contribute to making a meaningful impact. Your success is our success. We are committed to building long-lasting partnerships and ensuring that your software not only meets your immediate needs but also supports your long-term growth.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-20"
          >
            <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Our Core Values</h2>
            <ul className="text-gray-300 leading-relaxed space-y-2">
              <li><strong>Innovation:</strong> We're committed to pushing the boundaries of what's possible and embracing creativity.</li>
              <li><strong>Diversity and Inclusion:</strong> We celebrate the unique talents and perspectives of our team members.</li>
              <li><strong>Collaboration:</strong> We believe that the best solutions are found through teamwork.</li>
              <li><strong>Excellence:</strong> We strive for excellence in every aspect of our work.</li>
              <li><strong>Passion for Progress:</strong> If you're passionate about making a positive impact and eager to contribute to a brighter future, you're in the right place.</li>
            </ul>
          </motion.div>

          {/* Apply Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="inline-block bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold py-3 px-8 rounded-full hover:from-green-500 hover:to-cyan-500 transition duration-300"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
