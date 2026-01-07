import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram, FaClock, FaWhatsapp } from "react-icons/fa";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Address Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 tracking-wide">Bangalore Electronics</h2>
          <p className="flex items-start gap-4 text-lg leading-relaxed">
            <FaMapMarkerAlt className="text-blue-400 mt-1 text-2xl" />
            <span>
              #124, Sadar Patrappa Road,<br />
              Bangalore, India – 560002
            </span>
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
          <p className="flex items-center gap-4 text-lg mb-4">
            <FaPhoneAlt className="text-green-400 text-xl" />
            <span>08049511596</span>
          </p>
          <p className="flex items-center gap-4 text-lg mb-4">
            <FaWhatsapp className="text-green-400 text-xl" />
            <span>+91 8217064201</span>
          </p>
          <div className="flex items-start gap-4 text-lg">
            <FaEnvelope className="text-red-400 text-xl mt-1" />
            <div className="flex flex-col">
              <span>info@bangaloreelectronics.com</span>
              <span>adarsh@bangaloreelectronics.com</span>
            </div>
          </div>
        </div>

        {/* Opening Hours + Social */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Opening Hours</h3>
          <p className="flex items-start gap-4 text-lg mb-4">
            <FaClock className="text-yellow-400 text-xl mt-1" />
            <span>
              <strong>Monday – Friday:</strong><br />
              09:00 AM – 09:00 PM
            </span>
          </p>
          <p className="flex items-start gap-4 text-lg mb-8">
            <FaClock className="text-yellow-400 text-xl mt-1" />
            <span>
              <strong>Saturday – Sunday:</strong><br />
              09:00 AM – 12:00 PM
            </span>
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/36080000/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaLinkedin size={36} />
            </a>
            <a
              href="https://www.instagram.com/bangaloreelectronics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition transform hover:scale-110"
            >
              <FaInstagram size={36} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Bangalore Electronics. All Rights Reserved.
      </div>

      {/* Scroll Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-4">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 hover:bg-white/30"
          >
            <FaArrowUp size={20} />
          </button>
        )}
        <button
          onClick={scrollToBottom}
          className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 hover:bg-white/30"
        >
          <FaArrowDown size={20} />
        </button>
      </div>
    </footer>
  );
}
