import { useEffect, useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* FOOTER */}
      <footer className="relative bg-[#020617] text-gray-300 overflow-hidden">
        {/* Animated Glow */}
        <div
          className="pointer-events-none absolute -inset-40 bg-linear-to-r
          from-cyan-500/10 via-teal-400/10 to-blue-500/10 blur-3xl"
          style={{ animation: "gradientGlow 18s ease-in-out infinite" }}
        />

        {/* Glass container */}
        <div className="relative border-t border-white/10 bg-black/60 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Company */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Bangalore Electronics
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Delivering advanced electronics, networking, security, and
                enterprise technology solutions with reliability, innovation,
                and industry expertise.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Information
              </h4>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <span>
                  #124, Sadar Patrappa Road,<br />
                  Bangalore – 560002
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                <span>
                  +91 80 22239770<br />
                  +91 8217064201
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-cyan-400 mt-1" />
                <div>
                  <a
                    href="mailto:adarsh@bangaloreelectronics.com"
                    className="block hover:text-cyan-400 transition"
                  >
                    adarsh@bangaloreelectronics.com
                  </a>
                  <a
                    href="mailto:info@bangaloreelectronics.com"
                    className="block hover:text-cyan-400 transition"
                  >
                    info@bangaloreelectronics.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours & Social */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Business Hours
              </h4>

              <div className="flex items-start gap-3 text-sm">
                <FaClock className="text-cyan-400 mt-1" />
                <span>
                  <strong>Mon – Fri:</strong> 09:00 AM – 09:00 PM<br />
                  <strong>Sat – Sun:</strong> 09:00 AM – 12:00 PM
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect With Us
                </h4>
                <div className="flex gap-5 text-xl">
                  {[
                    { icon: FaTwitter, link: "https://twitter.com" },
                    { icon: FaInstagram, link: "https://instagram.com" },
                    {
                      icon: FaLinkedin,
                      link: "https://www.linkedin.com/company/36080000/",
                    },
                  ].map(({ icon: Icon, link }, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-white/5 border border-white/10
                      hover:border-cyan-400 hover:text-cyan-400
                      hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
                      transition"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Bangalore Electronics. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 p-3 rounded-full
          bg-cyan-500 text-black shadow-xl hover:scale-110 transition"
        >
          <FaArrowUp />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918217064201"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full
        bg-green-500 text-white shadow-xl
        hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]
        transition"
      >
        <FaWhatsapp size={22} />
      </a>
    </>
  );
}
