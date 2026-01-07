import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,

  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-gray-300 overflow-hidden">
      {/* Animated Glow */}
      <div
        className="pointer-events-none absolute -inset-40 bg-linear-to-r
        from-cyan-500/10 via-teal-400/10 to-blue-500/10 blur-3xl"
        style={{ animation: "gradientGlow 18s ease-in-out infinite" }}
      />

      {/* Glass Container */}
      <div className="relative border-t border-white/10 bg-black/60 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-5">
              Bangalore Electronics
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Delivering advanced electronics, networking, security, and
              enterprise technology solutions with reliability, innovation,
              and decades of industry expertise.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-5 text-lg">
            <h4 className="text-2xl font-semibold text-white mb-5">
              Contact Information
            </h4>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-cyan-400 mt-1 text-xl" />
              <span className="leading-relaxed">
                #124, Sadar Patrappa Road,<br />
                Bangalore – 560002
              </span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:items-end gap-4">
            <h4 className="text-2xl font-semibold text-white mb-3">
              Connect With Us
            </h4>
            <div className="flex gap-6 text-emerald-400 text-2xl">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mx-6" />

        {/* Bottom Bar */}
        <div className="px-6 py-6 flex flex-col md:flex-row justify-between text-lg text-slate-400">
          <span>
            © {new Date().getFullYear()} Bangalore Electronics
          </span>
          <span className="mt-2 md:mt-0">
            Trusted Since 1988 • Bangalore
          </span>
        </div>
      </div>
    </footer>
  );
}
