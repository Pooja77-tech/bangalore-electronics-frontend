export default function UseCases() {
  return (
    <div className="px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">

      {/* SECTION HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Industry Use Cases
        </h2>
        <p className="mt-4 text-gray-300">
          Real-world examples of our solutions implemented across industries,
          demonstrating reliability, scalability, and real operational impact.
        </p>
      </div>

      {/* PARAGRAPH CONTENT */}
      <div className="max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed">

        <p>
          <span className="text-cyan-300 font-semibold">
            Manufacturing & Industrial Facilities:
          </span>{" "}
          Deployed surveillance systems, secure networking, and automation
          infrastructure to improve workplace safety, monitor operations, and
          reduce downtime in high-demand industrial environments.
        </p>

        <p>
          <span className="text-cyan-300 font-semibold">
            Corporate Offices & IT Parks:
          </span>{" "}
          Implemented scalable IT infrastructure, network security, and access
          monitoring solutions to support uninterrupted business operations and
          secure enterprise environments.
        </p>

        <p>
          <span className="text-cyan-300 font-semibold">
            Retail & Commercial Spaces:
          </span>{" "}
          Integrated video surveillance and monitoring systems to enhance
          customer safety, prevent theft, and provide actionable insights
          through intelligent analytics.
        </p>

        <p>
          <span className="text-cyan-300 font-semibold">
            Healthcare & Hospitals:
          </span>{" "}
          Delivered reliable networking and surveillance systems to ensure
          patient safety, protect sensitive areas, and maintain compliance
          within critical healthcare facilities.
        </p>

        <p>
          <span className="text-cyan-300 font-semibold">
            Educational Institutions:
          </span>{" "}
          Designed campus-wide security and IT solutions to enable safe learning
          environments, improve connectivity, and manage access across large
          educational campuses.
        </p>

        <p>
          <span className="text-cyan-300 font-semibold">
            Warehousing & Logistics:
          </span>{" "}
          Implemented real-time monitoring and infrastructure solutions to
          improve asset tracking, security, and operational efficiency in
          logistics and distribution centers.
        </p>

      </div>
    </div>
  );
}
