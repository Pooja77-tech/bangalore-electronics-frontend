import React, { useEffect, useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Show early so it ALWAYS appears
      setShowScroll(scrollTop > 100);

      // Switch button near bottom
      if (scrollTop >= docHeight - 150) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-4">
              Bangalore Electronics
            </h2>
            <p className="flex items-start gap-3 text-gray-300 text-base sm:text-lg leading-relaxed">
              <HiOutlineLocationMarker className="mt-1 text-emerald-400 text-xl sm:text-2xl" />
              124, Sadar Patrappa Road, Bangalore – 560002,
              <br />
              Karnataka, India
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-400 mb-4">
              Contact Us
            </h3>

            <p className="flex items-center gap-3 text-gray-300 mb-2 text-base sm:text-lg">
              <HiOutlinePhone className="text-emerald-400 text-xl sm:text-2xl" />
              +91 8049511596
            </p>

            <p className="flex items-center gap-3 text-gray-300 mb-2 text-base sm:text-lg">
              <FaWhatsapp className="text-emerald-400 text-xl sm:text-2xl" />
              +91 8217064201
            </p>

            <p className="flex items-center gap-3 text-gray-300 text-base sm:text-lg break-all">
              <HiOutlineMail className="text-emerald-400 text-xl sm:text-2xl" />
              info@bangaloreelectronics.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-400 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-300 text-base sm:text-lg">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Offerings", path: "/offerings" },
                { name: "Solutions", path: "/solutions" },
                { name: "Partners", path: "/partners" },
                { name: "Projects", path: "/projects" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="hover:text-emerald-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-6">
              <a
                href="https://www.linkedin.com/company/36080000/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-emerald-400 transition"
              >
                <FaLinkedinIn size={30} />
              </a>

              <a
                href="https://www.instagram.com/bangaloreelectronics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-emerald-400 transition"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-5 px-4 text-center text-gray-400 text-sm sm:text-base">
          © 2026 Bangalore Electronics. All Rights Reserved.
        </div>
      </footer>

      {/* SCROLL BUTTON */}
      {showScroll && (
        <button
          onClick={scrollDirection === "up" ? scrollToTop : scrollToBottom}
          className="
            fixed bottom-6 right-6 z-9999
            w-12 h-12 rounded-full
            bg-emerald-500/20 backdrop-blur-xl
            border border-emerald-400/30
            shadow-[0_0_25px_rgba(16,185,129,0.8)]
            hover:shadow-[0_0_40px_rgba(16,185,129,1)]
            transition-all duration-300
            flex items-center justify-center
            text-emerald-300
          "
          aria-label="Scroll Button"
        >
          {scrollDirection === "up" ? (
            <FaArrowUp size={20} />
          ) : (
            <FaArrowDown size={20} />
          )}
        </button>
      )}
    </>
  );
};

export default Footer;
