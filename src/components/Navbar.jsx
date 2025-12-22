import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Detect scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle =
    "nav-link-underline text-slate-700 hover:text-blue-600 transition-all";

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        backdrop-blur-2xl transition-all duration-300
        border-b shadow-lg

        ${scrolled
          ? "bg-white/70 border-white/30 shadow-xl"
          : "bg-white/50 border-white/40 shadow-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className={`h-10 w-auto transition-all duration-300 ${
              scrolled ? "opacity-95" : "opacity-100"
            }`}
          />
          <span className="text-xl font-semibold text-slate-900 tracking-tight">
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">

          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Solutions", "/solutions"],
            ["Products", "/products"],
            ["Projects", "/projects"],
            ["Support", "/support"],
            ["Careers", "/careers"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className={`${linkStyle} ${
                pathname === href ? "nav-active" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="
              ml-6 px-5 py-2.5 rounded-xl text-white bg-blue-600
              hover:bg-blue-700 transition-all shadow-md hover:shadow-lg
            "
          >
            Get Consultation
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 text-slate-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            mobile-menu md:hidden flex flex-col 
            px-6 py-4 space-y-4
            bg-white/90 backdrop-blur-2xl 
            border-b border-white/40 shadow-lg
          "
        >
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Solutions", "/solutions"],
            ["Products", "/products"],
            ["Projects", "/projects"],
            ["Support", "/support"],
            ["Careers", "/careers"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className={`text-lg ${linkStyle} ${
                pathname === href ? "nav-active" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="
              mt-3 px-5 py-3 text-center rounded-xl text-white bg-blue-600
              hover:bg-blue-700 transition shadow-md
            "
          >
            Get Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
