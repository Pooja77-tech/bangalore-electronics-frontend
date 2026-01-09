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
    <section className="bg-gray-800 py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-wide"
          style={{ color: "#00D1A5" }}
        >
          Our Trusted Partners
        </h2>
        <p className="text-gray-300 mb-12 sm:mb-16 text-base sm:text-lg md:text-lg">
          Collaborating with industry leaders to deliver cutting-edge solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 flex items-center justify-center
                         bg-linear-to-tr from-gray-700 via-gray-800 to-gray-700
                         rounded-3xl shadow-inner shadow-black/20
                         hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,209,165,0.25)]
                         transition-all duration-500 p-4"
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
