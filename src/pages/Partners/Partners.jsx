import React from "react";

// Array of partner logos
const partners = [
  { name: "Bharat Electronics", logo: "/partners/bharat-electronics.png" },
  { name: "Western Digital", logo: "/partners/western-digital.png" },
  { name: "3C3", logo: "/partners/3C3.png" },
  { name: "Hikvision", logo: "/partners/hikvision.png" },
  { name: "Unview", logo: "/partners/unview.png" },
  { name: "Motadata", logo: "/partners/motadata.png" },
  { name: "Belden", logo: "/partners/belden.png" },
  { name: "Lenovo", logo: "/partners/lenovo.png" },
  { name: "Hi-Focus", logo: "/partners/hifocus.png" },
  { name: "Infoblox", logo: "/partners/infoblox.png" },
];

const Partners = () => {
  return (
    <section className="min-h-screen bg-[#020617] text-slate-200 py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.14),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#64748b_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-wide text-emerald-400">
          Our Trusted Partners
        </h2>
        <p className="text-slate-300 mb-12 sm:mb-16 text-base sm:text-lg md:text-lg">
          Collaborating with industry leaders to deliver cutting-edge solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72
                         bg-white/5 backdrop-blur-2xl border border-emerald-400/20
                         rounded-3xl flex items-center justify-center
                         shadow-[0_20px_60px_rgba(16,185,129,0.25)]
                         hover:shadow-[0_30px_90px_rgba(16,185,129,0.4)]
                         hover:scale-105 transition-all duration-500 p-6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
