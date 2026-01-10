import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function CareerApplicationForm() {
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > MAX_FILE_SIZE) {
      alert("Resume must be under 2MB.");
      return;
    }
    setForm({ ...form, resume: file });
    setResumeName(file ? file.name : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
        {
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          position: form.position,
          experience: form.experience,
          coverLetter: form.coverLetter,
          resumeFileName: form.resume ? form.resume.name : "No resume uploaded",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Application submitted successfully. We will review your application soon.");

      // Reset form
      setForm({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: null,
        coverLetter: "",
      });
      setResumeName("");
    } catch (error) {
      console.error(error);
      alert("Failed to submit application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
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

      <select
        name="position"
        value={form.position}
        onChange={handleChange}
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <option value="" disabled>
          Select Position
        </option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
        <option value="QA Engineer">QA Engineer</option>
        <option value="Sales Executive">Sales Executive</option>
        <option value="Business Development">Business Development</option>
        <option value="Support Specialist">Support Specialist</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="text"
        name="experience"
        placeholder="Years of Experience"
        value={form.experience}
        onChange={handleChange}
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <label className="block text-gray-300">
        <span className="mb-1 block">Upload Resume (PDF, DOC, DOCX)</span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white file:bg-cyan-400 file:text-black file:border-0 file:rounded file:px-3 file:py-1 file:font-semibold file:mr-3 cursor-pointer"
        />
        {resumeName && <p className="mt-1 text-gray-200 text-sm">Selected File: {resumeName}</p>}
      </label>

      <textarea
        name="coverLetter"
        placeholder="Cover Letter"
        value={form.coverLetter}
        onChange={handleChange}
        rows="5"
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-linear-to-r from-cyan-400 to-green-400 text-black font-semibold px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-green-500 transition-all duration-300 disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

    </form>
  );
}
