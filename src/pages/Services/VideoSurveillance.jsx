export default function VideoSurveillance() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">
 
      {/* PAGE HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Video Surveillance Systems
        </h1>
        <p className="mt-5 text-gray-300">
          Robust CCTV and video monitoring systems designed to deliver advanced
          security, visibility, and control across all environments.
        </p>
      </div>
 
      {/* GLASS CARD WRAPPER */}
      <div className="max-w-7xl mx-auto">
 
        {/* SOLUTIONS */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Our Surveillance Solutions
          </h2>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CCTV Camera Systems",
                desc: "High-definition analog and IP cameras for reliable indoor and outdoor monitoring."
              },
              {
                title: "IP & Network Surveillance",
                desc: "Advanced IP-based surveillance with remote access and centralized control."
              },
              {
                title: "Video Recording & Storage",
                desc: "Secure DVR and NVR solutions with long-term video storage and playback."
              },
              {
                title: "Smart Video Analytics",
                desc: "Motion detection, intrusion alerts, and intelligent video analysis."
              },
              {
                title: "Centralized Monitoring",
                desc: "Monitor multiple locations through a single unified surveillance system."
              },
              {
                title: "Maintenance & Support",
                desc: "System optimization, health checks, and technical support services."
              }
            ].map((item, i) => (
              <div
                key={i}
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
 
      </div>
    </div>
  );
}
 
 