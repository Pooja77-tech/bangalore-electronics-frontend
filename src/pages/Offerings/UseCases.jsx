import { motion } from "framer-motion";

export default function UseCases() {
  const useCases = [
    {
      title: "High-Occupancy Environments",
      description:
        "Operational environments with continuous human movement that require controlled access, real-time visibility, and consistent oversight to maintain safety and order.",
      features: [
        "Controlled Entry & Exit",
        "Continuous Monitoring",
        "Incident Traceability",
      ],
    },
    {
      title: "Asset-Intensive Operations",
      description:
        "Facilities where physical and digital assets must be protected, monitored, and accounted for without disrupting daily workflows.",
      features: [
        "Asset Visibility",
        "Access Accountability",
        "Loss Prevention",
      ],
    },
    {
      title: "Distributed Locations",
      description:
        "Multi-site operations requiring centralized supervision, consistent standards, and unified operational control across locations.",
      features: [
        "Centralized Oversight",
        "Multi-Location Control",
        "Unified Reporting",
      ],
    },
    {
      title: "Mission-Critical Facilities",
      description:
        "Environments where uptime, reliability, and immediate response are essential to prevent operational or financial disruption.",
      features: [
        "High Availability",
        "Redundancy Readiness",
        "Real-Time Alerts",
      ],
    },
    {
      title: "Public-Facing Spaces",
      description:
        "Open-access environments that must balance accessibility with safety, visibility, and controlled movement.",
      features: [
        "Crowd Awareness",
        "Safety Assurance",
        "Operational Visibility",
      ],
    },
    {
      title: "Restricted-Access Zones",
      description:
        "Sensitive areas requiring layered access control, role-based permissions, and detailed activity tracking.",
      features: [
        "Role-Based Access",
        "Activity Logging",
        "Policy Enforcement",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-[#020617] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Industry Use Cases
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Operational environments where reliability, control, and long-term
            performance are critical to everyday functioning.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition-all"
            >
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                {useCase.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {useCase.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  Operational Focus Areas
                </h4>
                <ul className="space-y-1">
                  {useCase.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-300 flex items-center"
                    >
                      <span className="text-cyan-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="mt-20 text-center text-gray-400 max-w-4xl mx-auto">
          These use cases represent practical deployment experience across
          diverse operational environments, emphasizing reliability,
          accountability, and long-term system performance.
        </p>

      </div>
    </section>
  );
}
