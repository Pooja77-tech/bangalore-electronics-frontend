import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    message: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = form.cv;
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert('CV file size must be under 2MB');
        return;
      }
    }

    try {
      let attachment = null;
      if (file) {
        attachment = await fileToBase64(file);
      }

      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        experience: form.experience,
        skills: form.skills,
        message: form.message,
        cv: attachment,
        cv_name: file ? file.name : '',
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert('Application submitted successfully. You will receive a confirmation email shortly.');
      e.target.reset();
      setForm({
        name: '',
        email: '',
        phone: '',
        experience: '',
        skills: '',
        message: '',
        cv: null,
      });
    } catch (error) {
      console.error(error);
      alert('Submission failed. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="text"
        name="experience"
        placeholder="Years of Experience"
        value={form.experience}
        onChange={handleChange}
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="text"
        name="skills"
        placeholder="Skills (e.g., Networking, Security, etc.)"
        value={form.skills}
        onChange={handleChange}
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <textarea
        name="message"
        placeholder="Professional Summary"
        value={form.message}
        onChange={handleChange}
        rows="4"
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
      />

      <input
        type="file"
        name="cv"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-400 file:text-black hover:file:bg-cyan-500"
      />

      <button type="submit" className="w-full bg-linear-to-r from-cyan-400 to-green-400 text-black font-semibold px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-green-500 transition-all duration-300">Submit Application</button>
    </form>
  );
}