export default function ProductsOverview() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Our Products
        </h1>
        <p className="mt-5 text-gray-300">
          Reliable technology products designed for secure, scalable, and
          high-performance infrastructure.
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* CCTV */}
        <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            CCTV Systems
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            High-definition CCTV solutions for indoor and outdoor surveillance,
            offering reliable security, continuous monitoring, and long-term
            performance.
          </p>
        </div>

        {/* JUNIPER SWITCHES */}
        <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Juniper Switches
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Enterprise-grade Juniper network switches built for high-speed data
            transfer, scalability, and secure network infrastructure.
          </p>
        </div>

        {/* DISTRIBUTION SWITCHES */}
        <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Distribution Switches
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Robust distribution-layer switches ensuring efficient traffic
            management, redundancy, and seamless connectivity.
          </p>
        </div>

        {/* CAT6 CABLE */}
        <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            CAT6 Cables
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            High-quality CAT6 networking cables supporting high-speed data,
            reduced interference, and stable network performance.
          </p>
        </div>

      </div>
    </div>
  );
}
