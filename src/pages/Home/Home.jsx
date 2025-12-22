import { Shield, Fingerprint, Server } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Biometrics Access", icon: <Fingerprint size={42} /> },
    { title: "Video Surveillance", icon: <Shield size={42} /> },
    { title: "IT Infrastructure", icon: <Server size={42} /> },
  ];

  return (
    <>
      {/* ===========================
          HERO SECTION
      ============================ */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 text-slate-900 overflow-hidden">

        {/* ⚡ Neon Background Blobs */}
        <div className="absolute -top-32 -left-28 w-105 h-105 bg-blue-400/35 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 -right-20 w-105 h-105 bg-cyan-400/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-87.5 h-87.5 bg-green-400/25 blur-[170px] rounded-full"></div>

        {/* ⚡ Main Hero Glass Card */}
        <div className="relative z-10 max-w-4xl text-center backdrop-blur-2xl bg-white/55 border border-white/40 shadow-[0_0_40px_rgba(0,160,255,0.25)] p-14 rounded-4xl">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 drop-shadow-sm">
            Smart Electronics & <br />
            <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(0,124,255,0.35)]">
              Security Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade electronics, surveillance, biometrics, and
            IT infrastructure trusted by modern industries and organizations.
          </p>

          {/* ⚡ Neon Buttons */}
          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <button className="px-8 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 hover:scale-105 transition-all">
              Get Consultation
            </button>

            <button className="px-8 py-3 rounded-xl backdrop-blur-xl bg-white/50 border border-slate-300/40 hover:bg-white/80 transition-all shadow-sm hover:shadow-md">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* ===========================
          SERVICES SECTION
      ============================ */}
      <section className="py-28 bg-linear-to-b from-white to-slate-100 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-slate-900 mb-14 drop-shadow-sm">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-10 rounded-3xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl hover:shadow-[0_0_40px_rgba(0,200,255,0.25)] hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="text-blue-600 drop-shadow-[0_0_10px_rgba(0,140,255,0.3)] mb-5 flex justify-center">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 text-center mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-center">
                  Secure, scalable, enterprise-ready solutions for modern businesses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
