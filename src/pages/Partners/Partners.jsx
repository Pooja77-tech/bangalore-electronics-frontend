export default function Partners() {
  const partners = [
    { name: "Bharat Electronics Limited", img: "/partners/bharat-electronic.png" },
    { name: "Western Digital", img: "/partners/western-digital.png" },
    { name: "3C3", img: "/partners/3C3.png" },
    { name: "Hikvision", img: "/partners/hikvision.png" },
    { name: "Uniview", img: "/partners/uniview.png" },
    { name: "Motadata", img: "/partners/motadata.png" },
    { name: "Infoblox", img: "/partners/infoblox.png" },
    { name: "Belden", img: "/partners/belden.png" },
    { name: "Lenovo", img: "/partners/lenovo.png" },
    { name: "Hifocus", img: "/partners/hifocus.png" },
  ];

  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white overflow-hidden">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Our Partners
        </h1>
        <p className="mt-4 text-slate-400">
          Trusted technology partners powering our solutions
        </p>
      </div>

      {/* PARTNERS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative group rounded-2xl p-px
                       bg-linear-to-br from-white/20 via-white/5 to-white/10
                       hover:from-cyan-400/40 hover:to-teal-400/40
                       transition-all duration-500"
          >
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10
                            rounded-2xl p-6 flex items-center justify-center
                            shadow-xl hover:shadow-cyan-500/30
                            transition-all duration-500 hover:-translate-y-2">
              
              {/* Logo */}
              <img
                src={partner.img}
                alt={partner.name}
                className="relative z-10 max-h-16 object-contain
                           transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING BLURS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
    </div>
  );
}
