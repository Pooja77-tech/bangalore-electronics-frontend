import { motion } from "framer-motion";
import benefitsVid from "../../assets/videos/services/benefits.mp4";

export default function BenefitsGrid() {
  const benefits = [
    {
      title: "High Reliability",
      desc: "Robust solutions engineered for high availability, scalability, and long-term operational stability.",
    },
    {
      title: "Enhanced Security",
      desc: "Advanced security architectures that protect infrastructure, data, and critical operations.",
    },
    {
      title: "Scalable Architecture",
      desc: "Flexible systems designed to grow seamlessly with evolving business and technology demands.",
    },
    {
      title: "Operational Efficiency",
      desc: "Optimized workflows and infrastructure that reduce downtime and improve productivity.",
    },
    {
      title: "Cost Optimization",
      desc: "Smart infrastructure planning that lowers operational costs while maximizing ROI.",
    },
    {
      title: "Professional Support",
      desc: "Expert implementation, monitoring, and ongoing support from certified professionals.",
    },
  ];

  return (
    <section className="w-full bg-[#020617] text-white">
      {/* Hero with Video */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <video
          src={benefitsVid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Key Benefits
            </h1>
            <p className="mt-6 text-gray-300 text-lg">
              Discover how our solutions deliver long-term value, security,
              and enterprise-grade performance across industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition-all"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
