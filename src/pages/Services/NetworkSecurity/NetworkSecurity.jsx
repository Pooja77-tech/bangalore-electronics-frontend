import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NetworkSecurity() {
  const capabilities = [
    {
      title: "Next-Generation Firewalls (NGFW)",
      desc: "Advanced firewall technology with application awareness and threat intelligence.",
    },
    {
      title: "Intrusion Detection & Prevention (IDS/IPS)",
      desc: "Real-time detection and blocking of malicious traffic.",
    },
    {
      title: "Secure VPN & Remote Access",
      desc: "Encrypted access for remote and hybrid workforces.",
    },
    {
      title: "Zero Trust & Network Segmentation",
      desc: "Micro-segmentation to minimize attack surfaces and lateral movement.",
    },
    {
      title: "Malware & Ransomware Protection",
      desc: "Multi-layered defense against advanced and zero-day threats.",
    },
    {
      title: "24/7 Monitoring & Threat Analysis",
      desc: "Continuous visibility with proactive incident response.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          to="/services"
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          ← Back to Services
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
        >
          <video
            src="/videos/services/network-security.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Network Security Solutions
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Enterprise-grade network security solutions designed to protect
              critical infrastructure against evolving cyber threats while
              maintaining performance, availability, and compliance.
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              By combining advanced threat prevention, real-time monitoring, and
              centralized policy enforcement, we help organizations maintain a
              strong security posture without compromising network performance.
            </p>
            <p className="text-gray-300 leading-relaxed mt-6">
              Our solutions integrate seamlessly with existing IT environments,
              support cloud and hybrid architectures, and enable secure digital
              transformation at scale.
            </p>
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Core Network Security Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Ready to Secure Your Network?
          </h3>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            Talk to Our Security Experts
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
