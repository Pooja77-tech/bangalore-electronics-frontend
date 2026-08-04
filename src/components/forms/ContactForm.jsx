import { useState } from "react";
import emailjs from "@emailjs/browser";

const fieldClass = "premium-input";

export default function ContactForm() {
  const MAX_FILE_SIZE = 2 * 1024 * 1024;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    message: "",
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
    if (file && file.size > MAX_FILE_SIZE) {
      alert("CV file size must be under 2MB");
      return;
    }

    try {
      const attachment = file ? await fileToBase64(file) : null;

      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        experience: form.experience,
        skills: form.skills,
        message: form.message,
        cv: attachment,
        cv_name: file ? file.name : "",
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Application submitted successfully. You will receive a confirmation email shortly.");
      e.target.reset();
      setForm({
        name: "",
        email: "",
        phone: "",
        experience: "",
        skills: "",
        message: "",
        cv: null,
      });
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again later.");
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
        className={fieldClass}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className={fieldClass}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        className={fieldClass}
      />

      <input
        type="text"
        name="experience"
        placeholder="Years of Experience"
        value={form.experience}
        onChange={handleChange}
        required
        className={fieldClass}
      />

      <input
        type="text"
        name="skills"
        placeholder="Skills (e.g., Networking, Security, etc.)"
        value={form.skills}
        onChange={handleChange}
        required
        className={fieldClass}
      />

      <textarea
        name="message"
        placeholder="Professional Summary"
        value={form.message}
        onChange={handleChange}
        rows="4"
        required
        className={`${fieldClass} resize-none`}
      />

      <input
        type="file"
        name="cv"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        required
        className="premium-input file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-accent)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
      />

      <button type="submit" className="premium-button w-full">
        Submit Application
      </button>
    </form>
  );
}
