import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div className="relative min-h-screen z-0 w-full bg-linear-to-br from-[#020617] via-[#0a1a2f] to-[#113b4c] text-white overflow-hidden">

      <Navbar />

      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-125 h-125 bg-green-400/30 blur-[180px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-137.5 h-137.5 bg-blue-500/20 blur-[190px] rounded-full animate-pulse"></div>

      {/* Floating Lights */}
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-400/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/4 right-20 w-40 h-40 bg-green-300/10 blur-[120px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative z-20 flex flex-col items-center px-6 pt-10 pb-32 text-center">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-3xl p-12 max-w-4xl mx-auto animate-fade-in">

          <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-linear-to-r from-green-300 via-cyan-300 to-blue-400 drop-shadow-[0_0_25px_rgba(0,255,200,0.4)] leading-tight">
            Bangalore Electronics
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-200/90 leading-relaxed max-w-2xl mx-auto">
            Professional electronic components, advanced IT solutions, and secure digital infrastructure — built for the future.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <button className="px-10 py-4 text-lg font-semibold rounded-full bg-linear-to-br from-green-400 to-blue-500 shadow-xl hover:scale-105 transition-all duration-200">
              Explore Services
            </button>

            <button className="px-10 py-4 text-lg rounded-full bg-white/10 border border-white/30 backdrop-blur-xl shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-20 max-w-7xl mx-auto px-8 pb-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-linear-to-r from-blue-300 to-green-300">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Electronic Components",
              desc: "Premium-grade components sourced globally with guaranteed reliability.",
            },
            {
              title: "Security Solutions",
              desc: "Modern surveillance networks, CCTV systems, and biometric access control.",
            },
            {
              title: "IT Infrastructure",
              desc: "Enterprise-level cloud systems, networking architecture, and server deployment.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-xl transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-green-200 to-blue-300">
                {feature.title}
              </h3>

              <p className="text-gray-200/90">{feature.desc}</p>

              <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-green-200">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40 z-0 pointer-events-none"></div>
    </div>
  );
}
