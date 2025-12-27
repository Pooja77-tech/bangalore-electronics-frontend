import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "../../components/forms/ContactForm";

export default function Contact() {
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
            Contact Us
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Contact us for any query. Our team is always ready to assist you with
            professional and reliable support.
          </p>
        </motion.div>

        {/* Info + Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-semibold text-cyan-300 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-4">
                <Phone className="text-cyan-400 mt-1" />
                <div>
                  <p>+91 80 22239770</p>
                  <p>+91 80 22217700</p>
                  <p>+91 80 22247870</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="text-green-400 mt-1" />
                <p>+91 8217064201 (WhatsApp)</p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-cyan-400 mt-1" />
                <p>adarsh@bangaloreelectronics.com</p>
              </div>


              <div className="flex items-start gap-4">
                <MapPin className="text-cyan-400 mt-1" />
                <p>
                  #124, Sadar Patrappa Road,
                  <br />
                  Bangalore, Karnataka – 560002
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-semibold text-cyan-300 mb-8">
              Send Us a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
        >
          <iframe
            title="Bangalore Electronics Location"
            src="https://maps.google.com/maps?q=Bangalore%20Electronics%20124%2C%20Sadar%20Patrappa%20Rd%20Bangalore&t=&z=18&ie=UTF8&iwloc=&output=embed"
            className="w-full h-105"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
