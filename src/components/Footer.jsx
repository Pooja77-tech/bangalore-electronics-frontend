import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaArrowUp,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Offerings", path: "/offerings" },
  { name: "Solutions", path: "/solutions" },
  { name: "Partners", path: "/partners" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setShowScroll(scrollTop > 100);
      setScrollDirection(scrollTop >= docHeight - 150 ? "up" : "down");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="spatial-footer relative overflow-hidden text-[var(--color-text)]">
        <div className="footer-glow footer-glow-purple" />
        <div className="footer-glow footer-glow-gold" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--slack-purple)]">
              Bangalore Electronics
            </p>
            <p className="mt-5 max-w-sm text-3xl font-bold leading-tight text-[var(--color-text)]">
              Secure infrastructure with a collaborative product feel.
            </p>
            <p className="mt-6 flex items-start gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <HiOutlineLocationMarker className="mt-1 h-5 w-5 shrink-0 text-[var(--slack-blue)]" />
              <span className="space-y-4">
                <span className="block">
                  <strong className="block font-semibold text-[var(--color-text)]">S.P. Road</strong>
                  124, Sadar Patrappa Road, Bangalore - 560002, Karnataka, India
                </span>
                <span className="block">
                  <strong className="block font-semibold text-[var(--color-text)]">Rajajinagar</strong>
                  D-103, Industrial Estate, Rajaji Nagar Industrial Town,
                  Rajajinagar, Bengaluru, Karnataka 560010
                </span>
              </span>
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--slack-purple)]">
              Contact
            </p>
            <div className="mt-5 space-y-4 text-sm text-[var(--color-muted)]">
              <a
                href="tel:+918049511596"
                className="flex items-center gap-3 transition hover:text-[var(--slack-deep)]"
              >
                <HiOutlinePhone className="h-5 w-5 text-[var(--slack-green)]" />
                +91 8049511596
              </a>
              <a
                href="https://wa.me/918217064201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-[var(--slack-deep)]"
              >
                <FaWhatsapp className="h-5 w-5 text-[var(--slack-green)]" />
                +91 8217064201
              </a>
              <a
                href="mailto:info@bangaloreelectronics.com"
                className="flex items-center gap-3 break-all transition hover:text-[var(--slack-deep)]"
              >
                <HiOutlineMail className="h-5 w-5 shrink-0 text-[var(--slack-blue)]" />
                info@bangaloreelectronics.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--slack-purple)]">
              Navigate
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-[var(--color-muted)]">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="transition hover:text-[var(--slack-deep)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com/company/36080000/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="spatial-icon-button flex h-11 w-11 items-center justify-center rounded-full text-[var(--slack-purple)] transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={17} />
              </a>
              <a
                href="https://www.instagram.com/bangaloreelectronics/"
                target="_blank"
                rel="noopener noreferrer"
                className="spatial-icon-button flex h-11 w-11 items-center justify-center rounded-full text-[var(--slack-purple)] transition"
                aria-label="Instagram"
              >
                <FaInstagram size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-[var(--color-border)] bg-white/10 px-4 py-5 text-center text-xs text-[var(--color-muted)]">
          Copyright 2026 Bangalore Electronics. All Rights Reserved.
        </div>
      </footer>

      {showScroll ? (
        <button
          onClick={scrollDirection === "up" ? scrollToTop : scrollToBottom}
          className="spatial-fab fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-[var(--slack-purple)] transition"
          aria-label={scrollDirection === "up" ? "Scroll to top" : "Scroll to bottom"}
          type="button"
        >
          {scrollDirection === "up" ? (
            <FaArrowUp size={17} />
          ) : (
            <FaArrowDown size={17} />
          )}
        </button>
      ) : null}
    </>
  );
};

export default Footer;
