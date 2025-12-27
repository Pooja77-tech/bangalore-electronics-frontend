export default function ITInfrastructure() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          IT Infrastructure Services
        </h1>
        <p className="mt-5 text-gray-300">
          Reliable, secure, and scalable IT infrastructure solutions designed
          to support modern business operations and digital transformation.
        </p>
      </div>

      {/* MAIN GLASS CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-16">

        {/* SERVICES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Our IT Infrastructure Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network Infrastructure",
                desc: "Structured cabling, LAN/WAN design, switches, routers, and secure network architecture."
              },
              {
                title: "Server & Storage Solutions",
                desc: "Physical and virtual servers, centralized storage, backup, and disaster recovery."
              },
              {
                title: "Cloud Infrastructure",
                desc: "Cloud architecture planning, migration, and management for scalable operations."
              },
              {
                title: "Cybersecurity",
                desc: "Firewalls, endpoint protection, access control, and continuous security monitoring."
              },
              {
                title: "IT Support & Maintenance",
                desc: "Proactive monitoring, system upgrades, troubleshooting, and technical support."
              },
              {
                title: "Data Center Solutions",
                desc: "Design and deployment of secure, efficient, and scalable data center environments."
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

        {/* INDUSTRIES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Industries We Support
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              "Corporate Offices & Enterprises",
              "Manufacturing & Industrial Units",
              "Metro Stations & Transportation",
            
            ].map((industry, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition"
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
