import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Bangalore Electronics
          </h3>
          <p className="text-sm">
            Providing advanced electronics, networking, and security solutions
            for modern enterprises.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Offerings</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white text-md font-semibold mb-3">
            Connect with us
          </h4>
          <div className="flex space-x-4 text-xl">
            <FaTwitter className="hover:text-cyan-400 cursor-pointer" />
            <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Bangalore Electronics. All rights reserved.
      </div>
    </footer>
  );
}
