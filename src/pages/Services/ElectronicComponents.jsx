export default function ElectronicComponents() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Electronic Components
        </h1>
        <p className="mt-5 text-gray-300">
          High-quality electronic components sourced from trusted brands,
          ensuring reliability, performance, and long-term durability.
        </p>
      </div>

      {/* MAIN GLASS CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-16">

        {/* COMPONENT CATEGORIES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Our Component Range
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Passive Components",
                desc: "Resistors, capacitors, inductors, and transformers for stable circuit performance."
              },
              {
                title: "Active Components",
                desc: "Diodes, transistors, ICs, and voltage regulators for advanced electronic control."
              },
              {
                title: "Microcontrollers & Processors",
                desc: "Microcontrollers and processors for embedded systems and automation projects."
              },
              {
                title: "Sensors & Modules",
                desc: "Temperature, motion, proximity, and environmental sensors for smart applications."
              },
              {
                title: "Power Components",
                desc: "SMPS, relays, connectors, and power management solutions."
              },
              {
                title: "Cables & Connectors",
                desc: "High-quality connectors, wires, and interconnect solutions for secure connections."
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

        {/* WHY CHOOSE US */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Why Choose Our Components
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
            <li className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
              ✔ Sourced from trusted international brands
            </li>
            <li className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
              ✔ High reliability and quality assurance
            </li>
            <li className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
              ✔ Suitable for hobbyists, businesses, and industries
            </li>
            <li className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
              ✔ Wide inventory for immediate availability
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
