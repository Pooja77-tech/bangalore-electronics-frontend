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
    <div className="text-center">
      <h3 className="text-4xl font-bold text-cyan-400">{count}+</h3>
      <p className="text-gray-300 mt-2">{label}</p>
    </div>
  );
};
 
export default function About() {
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
            About Bangalore Electronics
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Established in 1988, Bangalore Electronics is a trusted name in electronic components, security systems, solar solutions, and system integration—delivering international-standard solutions built for the future.
          </p>
        </motion.div>
 
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
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
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-4">{item}</h3>
              {item === "Founder" && (
                <p className="text-gray-300">Late C. Kiran Lal — a visionary leader whose values of integrity, quality, and customer commitment continue to guide Bangalore Electronics.</p>
              )}
              {item === "Mission" && (
                <p className="text-gray-300">To deliver high-quality bespoke solutions that exceed customer expectations and create long-term value.</p>
              )}
              {item === "Vision" && (
                <p className="text-gray-300">To become a value-added solution provider in India by continuously improving services and investing in our people.</p>
              )}
            </motion.div>
          ))}
        </div>
 
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Our Core Values</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
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
          <Counter end={150} label="Completed Projects" />
        </motion.div>
      </div>
    </section>
  );
}
 
 