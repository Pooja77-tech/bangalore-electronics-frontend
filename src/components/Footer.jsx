import React from "react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold text-green-500 mb-4">Bangalore Electronics</h2>
          <p className="flex items-start gap-3 text-gray-300 mb-2 text-xl">
            <HiOutlineLocationMarker className="mt-1 text-green-500 text-2xl" />
            124, Sadar Patrappa Road, Bangalore – 560002 ,  Karnataka, India
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-semibold text-green-500 mb-4">Contact Us</h3>
          <p className="flex items-center gap-3 text-gray-300 mb-2 text-2xl">
            <HiOutlinePhone className="text-green-500 text-2xl" />  +91 8049511596
          </p>
          <p className="flex items-center gap-3 text-gray-300 mb-2 text-2xl">
            <FaWhatsapp className="text-green-500 text-3xl" /> +91 8217064201
          </p>
          <p className="flex items-center gap-3 text-gray-300 text-2xl">
            <HiOutlineMail className="text-green-500 text-2xl" /> info@bangaloreelectronics.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-3xl font-semibold text-green-500 mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-4 text-gray-300 text-xl">
            <a href="/" className="hover:text-green-500 transition">Home</a>
            <a href="/about" className="hover:text-green-500 transition">About Us</a>
            <a href="/offerings" className="hover:text-green-500 transition">Offerings</a>
            <a href="/solutions" className="hover:text-green-500 transition">Solutions</a>
            <a href="/partners" className="hover:text-green-500 transition">Partners</a>
            <a href="/projects" className="hover:text-green-500 transition">Projects</a>
            <a href="/careers" className="hover:text-green-500 transition">Careers</a>
            <a href="/contact" className="hover:text-green-500 transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-blue-600 hover:text-green-500 transition">
              <FaLinkedinIn size={32} />
            </a>
            <a href="#" className="text-pink-500 hover:text-green-500 transition">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Legal */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-lg space-y-2">
        <p>© 2026 Bangalore Electronics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
