import { motion } from "framer-motion";
import biometricsVid from "../../assets/videos/services/biometrics.mp4";

export default function BiometricsAccess() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">

      {/* TOP VIDEO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[320px] overflow-hidden rounded-b-3xl"
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

      {/* CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold mb-4">
            Biometrics & Access Control Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced biometric authentication and intelligent access control
            systems designed to enhance security, improve efficiency, and
            prevent unauthorized access.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Get a Consultation
            </button>
            <button className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100 transition">
              Request a Demo
            </button>
          </div>
        </motion.div>

        {/* TYPES OF BIOMETRIC AUTHENTICATION */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Types of Biometric Authentication
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">🔐 Fingerprint Recognition</h3>
              <p>
                Fast, accurate, and widely used for offices, attendance systems,
                and secure facilities.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">👁 Facial Recognition</h3>
              <p>
                Contactless and highly secure, ideal for high-traffic areas and
                modern workplaces.
              </p>
            </div>
          </div>
        </section>

        {/* ACCESS CONTROL SOLUTIONS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Access Control Solutions We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">🚪 Card & RFID Access Systems</h3>
              <p>Secure access using smart cards, key fobs, or badges.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">🔢 PIN & Password-Based Systems</h3>
              <p>Additional layer of security or multi-factor authentication.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">📱 Mobile & Smart Access</h3>
              <p>
                Control access using mobile apps, QR codes, or cloud-based
                systems.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">🔗 Integrated Systems</h3>
              <p>
                Combine biometrics with CCTV, alarms, and attendance tracking.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES & BENEFITS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Key Features & Benefits
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
            <li>High-level security and fraud prevention</li>
            <li>Eliminates lost keys and stolen passwords</li>
            <li>Real-time access monitoring and logs</li>
            <li>Scalable for small to large organizations</li>
            <li>Seamless integration with existing systems</li>
            <li>Fast, contactless, and user-friendly authentication</li>
          </ul>
        </section>

        {/* FINAL CTA */}
        <section className="text-center bg-gray-100 rounded-2xl p-10">
          <h2 className="text-3xl font-semibold mb-4">
            Secure Your Facility with Intelligent Access Control
          </h2>
          <p className="mb-6 text-gray-600">
            Contact us today to discuss your biometric and access control needs.
          </p>

          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Contact Us
          </button>
        </section>

      </div>
    </div>
  );
}
