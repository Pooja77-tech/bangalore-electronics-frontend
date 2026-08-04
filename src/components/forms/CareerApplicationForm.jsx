import { useState } from "react";
import emailjs from "@emailjs/browser";

const fieldClass = "premium-input";

export default function CareerApplicationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resumeLink: "",
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.resumeLink) {
      alert("Please provide a link to your resume.");
      setLoading(false);
      return;
    }

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
          resumeLink: form.resumeLink,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Application submitted successfully. We will review your application soon.");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resumeLink: "",
        coverLetter: "",
      });
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

      <select
        name="position"
        value={form.position}
        onChange={handleChange}
        required
        className={`${fieldClass} bg-white`}
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
        className={fieldClass}
      />

      <input
        type="url"
        name="resumeLink"
        placeholder="Resume Link (OneDrive / Google Drive / Dropbox)"
        value={form.resumeLink}
        onChange={handleChange}
        required
        className={fieldClass}
      />

      <textarea
        name="coverLetter"
        placeholder="Cover Letter"
        value={form.coverLetter}
        onChange={handleChange}
        rows="5"
        required
        className={`${fieldClass} resize-none`}
      />

      <button
        type="submit"
        disabled={loading}
        className="premium-button w-full disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
