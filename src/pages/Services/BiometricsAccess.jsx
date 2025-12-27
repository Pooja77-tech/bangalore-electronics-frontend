import { motion } from "framer-motion";
import biometricsVid from "../../assets/videos/services/biometrics.mp4";

export default function BiometricsAccessControl() {
  return (
    <div className="min-h-screen px-6 py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#062e2e] text-white">


      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Biometrics & Access Control Solutions
        </h1>
        <p className="mt-6 text-gray-300 max-w-4xl mx-auto">
          Advanced biometric authentication and intelligent access control
          systems designed to enhance security, improve efficiency, and prevent
          unauthorized access across modern environments.
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
          src={biometricsVid}
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

        {/* BIOMETRIC TYPES */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Types of Biometric Authentication
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                🔐 Fingerprint Recognition
              </h3>
              <p className="text-gray-300 text-sm">
                Fast, accurate, and widely used biometric authentication for
                offices, attendance systems, secure facilities, and restricted
                access areas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                👁 Facial Recognition
              </h3>
              <p className="text-gray-300 text-sm">
                Contactless and highly secure authentication ideal for
                high-traffic areas, corporate offices, and modern workplaces.
              </p>
            </div>
          </div>
        </section>

        {/* ACCESS CONTROL SOLUTIONS */}
        <section className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Access Control Solutions We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "🚪 Card & RFID Access Systems",
                desc: "Secure access using smart cards, key fobs, or badges for controlled entry."
              },
              {
                title: "🔢 PIN & Password-Based Systems",
                desc: "Adds an additional layer of protection or works as part of multi-factor authentication."
              },
              {
                title: "📱 Mobile & Smart Access",
                desc: "Control access using mobile apps, QR codes, or cloud-based authorization systems."
              },
              {
                title: "🔗 Integrated Systems",
                desc: "Seamlessly combine biometrics with CCTV, alarms, and attendance tracking systems."
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

      </div>
    </div>
  );
}
