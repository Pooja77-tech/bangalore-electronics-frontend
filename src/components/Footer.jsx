export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-slate-300 text-sm">

      {/* Premium glass layer */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/4" />

      <div className="relative max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Address */}
          <div className="leading-snug">
            <h4 className="text-slate-100 font-semibold tracking-wide mb-2">
              Address
            </h4>
            <p>
              #124, Sadar Patrappa Road<br />
              Bangalore, Karnataka – 560002<br />
              India
            </p>
          </div>

          {/* Contact */}
          <div className="leading-snug">
            <h4 className="text-slate-100 font-semibold tracking-wide mb-2">
              Contact
            </h4>
            <p>
              +91 80 22239770, 22217700, 22247870<br />
              +91 8217064201 (WhatsApp)
            </p>
            <p className="mt-1">
              adarsh@bangaloreelectronics.com<br />
              info@bangaloreelectronics.com
            </p>
          </div>

          {/* Opening Hours */}
          <div className="leading-snug">
            <h4 className="text-slate-100 font-semibold tracking-wide mb-2">
              Opening Hours
            </h4>
            <p>
              Mon – Fri: 09.00 AM – 09.00 PM<br />
              Sat – Sun: 09.00 AM – 12.00 PM
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-white/10" />

        {/* Bottom row */}
        <div className="mt-4 flex flex-col md:flex-row justify-between text-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} Bangalore Electronics
          </span>
          <span className="mt-1 md:mt-0">
            Trusted Since 1988 • Bangalore
          </span>
        </div>

      </div>
    </footer>
  );
}
