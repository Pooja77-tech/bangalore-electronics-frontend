import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const networkSecurityVid = "/videos/offerings/Network Security.mp4";

export default function NetworkSecurity() {
  const features = [
    "Next-Generation Firewalls (NGFW) & Perimeter Security",
    "Intrusion Detection & Prevention Systems (IDS / IPS)",
    "Secure VPN & Remote Access Solutions",
    "Zero-Trust Network Access (ZTNA)",
    "Advanced Malware & Ransomware Protection",
    "Continuous Monitoring & Threat Analysis",
  ];

  const applications = [
    "Enterprise IT & Corporate Networks",
    "Data Centers & Cloud Infrastructure",
    "Manufacturing & Industrial Networks",
    "Financial Services & Critical Infrastructure",
    "Government, Healthcare & Education Institutions",
  ];

  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back Link */}
        <Link
          to="/offerings"
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          ← Back to Offerings
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
        >
          <video
            src={networkSecurityVid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          />

          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-cyan-300 mb-6">
              Network Security
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Our Network Security solutions protect enterprise networks from evolving cyber threats while ensuring high availability, performance, and regulatory compliance across on-premises, cloud, and hybrid environments.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-10 text-center">
            Key Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg"
              >
                <p className="text-gray-200">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-12 text-center"
        >
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
            Where It’s Used
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our Network Security solutions are deployed across:
          </p>

          <ul className="mt-8 space-y-3 text-gray-300">
            {applications.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        

      </div>
    </section>
  );
}
