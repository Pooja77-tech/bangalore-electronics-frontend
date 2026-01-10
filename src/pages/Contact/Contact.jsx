import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const infoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="
        min-h-screen bg-[#020617] text-slate-200 relative overflow-hidden
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
        py-16 sm:py-20 md:py-24 lg:py-28
      "
    >
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.14),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#64748b_1px,transparent_1px)] bg-size-[3px_3px] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Reach out to us for enquiries, support, or business discussions. Our
            team is committed to providing timely and professional assistance.
          </p>
        </motion.div>

        {/* ================= CONTACT INFO ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={infoVariants}
          className="
            bg-white/5 border border-emerald-400/20 rounded-3xl
            p-6 sm:p-8 md:p-12 mb-16 sm:mb-20
            shadow-[0_30px_80px_rgba(16,185,129,0.25)]
            hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)]
            backdrop-blur-2xl transition-all
          "
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-400 mb-10 text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-slate-300">
            {/* Phone */}
            <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
              <Phone className="text-emerald-400 mt-1 w-6 h-6" />
              <p className="font-medium">+91 8049511596</p>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
              <FaWhatsapp className="text-green-400 mt-1 w-6 h-6" />
              <p className="font-medium">+91 8217064201</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
              <Mail className="text-emerald-400 mt-1 w-6 h-6" />
              <p className="font-medium break-all">
                info@bangaloreelectronics.com
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
              <MapPin className="text-emerald-400 mt-1 w-6 h-6" />
              <p className="font-medium leading-relaxed">
                #124, Sadar Patrappa Road,
                <br />
                Bangalore – 560002,
                <br />
                Karnataka, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= MAP ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={infoVariants}
          className="
            bg-white/5 border border-emerald-400/20 rounded-3xl overflow-hidden
            shadow-[0_30px_80px_rgba(16,185,129,0.25)]
            hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)]
            backdrop-blur-2xl transition-all
          "
        >
          <iframe
            title="Bangalore Electronics Location"
            src="https://maps.google.com/maps?q=Bangalore%20Electronics%20124%2C%20Sadar%20Patrappa%20Rd%20Bangalore&t=&z=18&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 sm:h-80 md:h-96"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}
