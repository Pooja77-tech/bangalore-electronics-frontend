import { motion } from "framer-motion";
// Placeholder video - replace with actual video path when available
import benefitsVid from "../../assets/videos/services/benefits.mp4";

export default function NetworkSecurity() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Network Security
        </h1>
        <p className="mt-6 text-gray-300 max-w-4xl mx-auto">
          Our Network Security solutions are designed to protect enterprise networks against evolving cyber threats while ensuring high availability, performance, and regulatory compliance. Built on industry-leading security architectures, our solutions safeguard critical data, applications, and infrastructure across on-premises, cloud, and hybrid environments.
        </p>
      </div>

      {/* TOP VIDEO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-80 overflow-hidden rounded-b-3xl"
      >
        <video
          src={benefitsVid} // Placeholder - replace with actual video when available
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </motion.div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto space-y-20">

        {/* DESCRIPTION */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            By combining advanced threat prevention, real-time monitoring, and centralized policy management, we enable organizations to maintain a strong security posture without compromising network performance. Our approach emphasizes defense-in-depth, visibility, and control—allowing enterprises to proactively detect, prevent, and respond to security incidents.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            Engineered for scalability and resilience, our Network Security solutions integrate seamlessly with existing IT and networking ecosystems, supporting multi-site deployments, remote access, and secure digital transformation initiatives.
          </p>
        </section>

        {/* CORE NETWORK SECURITY CAPABILITIES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Core Network Security Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Next-Generation Firewalls (NGFW) and perimeter security",
                desc: "Advanced firewall technology with application awareness and threat intelligence."
              },
              {
                title: "Intrusion Detection and Prevention Systems (IDS/IPS)",
                desc: "Real-time detection and blocking of malicious network traffic."
              },
              {
                title: "Secure VPN and remote access solutions",
                desc: "Encrypted remote access for secure connectivity."
              },
              {
                title: "Network segmentation and zero-trust enforcement",
                desc: "Micro-segmentation and zero-trust security models."
              },
              {
                title: "Advanced malware and ransomware protection",
                desc: "Multi-layered protection against advanced malware threats."
              },
              {
                title: "Secure routing, switching, and wireless security",
                desc: "Secure network infrastructure and wireless access points."
              },
              {
                title: "Continuous monitoring, logging, and threat analysis",
                desc: "24/7 network monitoring and comprehensive threat intelligence."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ENTERPRISE VALUE */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Enterprise Value
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Protects critical business data and applications",
                desc: "Comprehensive protection for sensitive business assets."
              },
              {
                title: "Reduces risk of cyber attacks and service disruptions",
                desc: "Proactive threat prevention and incident response."
              },
              {
                title: "Ensures regulatory compliance and audit readiness",
                desc: "Compliance with industry standards and regulations."
              },
              {
                title: "Enhances network visibility and operational control",
                desc: "Complete visibility into network activities and controls."
              },
              {
                title: "Supports secure scalability and business growth",
                desc: "Scalable security solutions for growing enterprises."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRY APPLICATIONS */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Industry Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise IT and corporate networks",
                desc: "Comprehensive security for large corporate environments."
              },
              {
                title: "Data centers and cloud environments",
                desc: "Protection for critical data center and cloud infrastructure."
              },
              {
                title: "Manufacturing and industrial networks",
                desc: "Secure industrial control systems and manufacturing networks."
              },
              {
                title: "Financial services and critical infrastructure",
                desc: "High-security solutions for financial institutions."
              },
              {
                title: "Government, healthcare, and education institutions",
                desc: "Compliance-focused security for public sector organizations."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECURITY ARCHITECTURE OVERVIEW */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Security Architecture Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Perimeter Security",
                desc: "Advanced perimeter defenses with next-generation firewalls and threat prevention."
              },
              {
                title: "Internal Segmentation",
                desc: "Network segmentation to contain breaches and limit lateral movement."
              },
              {
                title: "Secure Access",
                desc: "Secure access controls for users, devices, and applications."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ZERO TRUST & COMPLIANCE */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Zero Trust & Compliance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Zero Trust Network Access (ZTNA)",
                desc: "Never trust, always verify approach to network access."
              },
              {
                title: "Compliance Readiness",
                desc: "Ready for ISO 27001, NIST, SOC, and other compliance frameworks."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MANAGED SECURITY SERVICES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Managed Security Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Monitoring",
                desc: "Round-the-clock network security monitoring and alerting."
              },
              {
                title: "Incident Response Support",
                desc: "Rapid incident detection and response capabilities."
              },
              {
                title: "Security Updates & Policy Management",
                desc: "Regular security updates and policy enforcement."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES / SCENARIOS */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Use Cases / Scenarios
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Remote Workforce",
                desc: "Secure access for distributed and remote employees."
              },
              {
                title: "Data Center Protection",
                desc: "Comprehensive security for critical data center environments."
              },
              {
                title: "Branch-to-Branch Secure Connectivity",
                desc: "Secure connectivity between multiple office locations."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTEGRATION & INTEROPERABILITY */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-cyan-300">
            Integration & Interoperability
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SIEM & SOC Integration",
                desc: "Seamless integration with Security Information and Event Management systems."
              },
              {
                title: "Multi-Vendor Compatibility",
                desc: "Compatibility with existing networking vendors and platforms."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 transition"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl text-center">
          <h2 className="text-3xl font-semibold mb-6 text-cyan-300">
            Ready to Secure Your Network?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact our security experts to discuss your network security requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition">
              Request a Security Assessment
            </button>
            <button className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition">
              Talk to Our Security Experts
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
