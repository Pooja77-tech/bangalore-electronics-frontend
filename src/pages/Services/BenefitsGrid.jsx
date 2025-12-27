export default function BenefitsGrid() {
  return (
    <div className="px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* SECTION HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Key Benefits Overview
        </h2>
        <p className="mt-4 text-gray-300">
          Discover how our solutions deliver long-term value, reliability,
          and performance across industries and applications.
        </p>
      </div>

      {/* GLASS BENEFITS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          {
            title: "High Reliability",
            desc: "Engineered with premium components and tested standards to ensure consistent and dependable performance."
          },
          {
            title: "Scalable Solutions",
            desc: "Flexible architectures designed to grow with your business needs and technology demands."
          },
          {
            title: "Enhanced Security",
            desc: "Built-in safeguards and protection layers to minimize risk and ensure operational continuity."
          },
          {
            title: "Cost Efficiency",
            desc: "Optimized solutions that reduce maintenance costs while maximizing long-term value."
          },
          {
            title: "Industry Compliance",
            desc: "Aligned with international quality and safety standards for professional-grade deployment."
          },
          {
            title: "Expert Support",
            desc: "Backed by experienced professionals for guidance, maintenance, and system optimization."
          }
        ].map((benefit, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {benefit.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
