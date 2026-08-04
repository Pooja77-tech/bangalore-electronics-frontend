import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Offerings", "/offerings"],
  ["Solutions", "/solutions"],
  ["Partners", "/partners"],
  ["Projects", "/projects"],
  ["Careers", "/careers"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-scrolled={scrolled}
      className="glass-nav fixed inset-x-0 top-0 z-50 transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center transition hover:opacity-85"
          aria-label="Bangalore Electronics home"
        >
          <img
            src="/images/logo.png"
            alt="Bangalore Electronics"
            className="h-12 w-[12.5rem] max-w-[calc(100vw-5.5rem)] object-contain object-left sm:h-14 sm:w-60"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className={`nav-link-underline ${pathname === href ? "nav-active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="premium-button hidden min-h-0 px-5 py-3 text-sm lg:inline-flex"
        >
          Get in touch
        </Link>

        <button
          type="button"
          className="spatial-icon-button inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-accent)] transition lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="glass-mobile-menu mobile-menu px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className={`nav-link-underline w-fit text-base ${
                  pathname === href ? "nav-active" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="premium-button mt-2 w-fit min-h-0 px-5 py-3 text-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
