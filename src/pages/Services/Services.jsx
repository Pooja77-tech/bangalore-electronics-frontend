import React from "react";
import {
  Cpu,
  Video,
  Home,
  Network,
  Server,
  Lock,
  Puzzle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Glass effect style
const glass = "bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl";

// Fade-up animation
const fadeUp = {
  opacity: 1,
  transform: "translateY(0)",
  transition: "all 0.6s ease-out",
};

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-white to-blue-50 p-6 md:p-12">

      {/* PAGE HEADER */}
      <div style={fadeUp} className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600">
          Bangalore Electronics offers industry-standard solutions for components,
          security, networking, storage, access management, and system integration.
        </p>
      </div>

      {/* SERVICE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* TEMPLATE FUNCTION */}
        {[
          {
            title: "Electronic Components",
            icon: Cpu,
            desc: "A wide range of quality electronic parts — resistors, capacitors, ICs and more.",
            button: "View Components",
          },
          {
            title: "Video Surveillance",
            icon: Video,
            desc: "High-definition surveillance systems with tailored installation and support.",
            button: "Learn More",
          },
          {
            title: "Home Security & Intercom",
            icon: Home,
            desc: "Comprehensive security and intercom systems for homes and residences.",
            button: "Learn More",
          },
          {
            title: "Networking Solutions",
            icon: Network,
            desc: "Infrastructure including routers, switches, cabling, and wireless solutions.",
            button: "Network Setup",
          },
          {
            title: "Server & Storage",
            icon: Server,
            desc: "Enterprise-grade servers, storage solutions, and data center equipment.",
            button: "View Servers",
          },
          {
            title: "Access Control",
            icon: Lock,
            desc: "Advanced access control systems with customizable configurations.",
            button: "Secure",
          },
          {
            title: "System Integration",
            icon: Puzzle,
            desc: "Seamless integration of systems for efficient business workflows.",
            button: "Integrate Now",
          },
        ].map(({ title, icon: Icon, desc, button }) => (
          <div
            key={title}
            style={fadeUp}
            className={`${glass} rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            </div>

            <p className="text-gray-700 mb-6">{desc}</p>

            <button className="w-full flex items-center justify-center gap-2 rounded-xl text-lg py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              {button} <ArrowRight />
            </button>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div style={fadeUp} className="max-w-4xl mx-auto mt-24 text-center">
        <div className={`${glass} rounded-3xl p-12`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-5 text-xl rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="h-40"></div>
    </div>
  );
}
