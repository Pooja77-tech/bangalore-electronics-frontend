import { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  experience: "",
  skills: "",
  summary: "",
  resume: null,
};

const fieldClass = "premium-input";

const getCareersEndpoint = () => {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");

  if (configuredBaseUrl) {
    return `${configuredBaseUrl}/api/careers/applications`;
  }

  if (import.meta.env.DEV) {
    return "http://localhost:5001/api/careers/applications";
  }

  return "/api/careers/applications";
};

export default function Careers() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "idle",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: files ? files[0] ?? null : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    setSubmitState({
      type: "idle",
      message: "",
    });

    if (!form.resume) {
      setSubmitState({
        type: "error",
        message: "Please attach a resume before submitting.",
      });
      return;
    }

    if (form.resume.size > MAX_FILE_SIZE) {
      setSubmitState({
        type: "error",
        message: "Resume must be 5MB or smaller.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("experience", form.experience);
    formData.append("skills", form.skills);
    formData.append("summary", form.summary);
    formData.append("resume", form.resume);

    setIsSubmitting(true);

    try {
      const response = await fetch(getCareersEndpoint(), {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit the application.");
      }

      setSubmitState({
        type: "success",
        message:
          "Application submitted successfully. It has been sent to adarsh@bangaloreelectronics.com.",
      });
      setForm(INITIAL_FORM);
      formElement.reset();
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error.message ||
          "Unable to submit the application right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Careers"
            title="Join a team that values steady execution."
            description="We foster a professional, inclusive, and growth-oriented work environment where individuals are empowered to innovate, collaborate, and perform at their best."
          />

          <SurfaceCard
            {...fadeUp}
            className="p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              Submit Your Application
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Every application from this page is sent directly to
              adarsh@bangaloreelectronics.com.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className={fieldClass}
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={fieldClass}
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className={fieldClass}
              />

              <input
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="Years of Experience"
                required
                className={fieldClass}
              />

              <input
                type="text"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="Skills (e.g. Networking, Security etc)"
                required
                className={fieldClass}
              />

              <textarea
                rows="4"
                name="summary"
                value={form.summary}
                onChange={handleChange}
                placeholder="Professional Summary"
                required
                className={`${fieldClass} resize-none`}
              />

              <div className="space-y-3">
                <div className="flex flex-col gap-3 rounded-[18px] border border-[var(--color-border)] bg-white p-3 sm:flex-row sm:items-center">
                  <label className="premium-button min-h-0 shrink-0 px-4 py-3 text-sm">
                    Choose File
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-[var(--color-muted)] break-all">
                    {form.resume ? form.resume.name : "No file chosen"}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-muted)]">
                  Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB.
                </p>
              </div>

              {submitState.message ? (
                <p
                  className={`rounded-[18px] border px-4 py-3 text-sm ${
                    submitState.type === "success"
                      ? "border-[rgba(46,182,125,0.34)] text-[var(--slack-green)]"
                      : "border-rose-400/40 text-rose-700"
                  }`}
                  aria-live="polite"
                >
                  {submitState.message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="premium-button w-full disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </SurfaceCard>
        </div>

        <motion.div
          {...fadeUp}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {[
            "Quality and accountability",
            "Cross-discipline collaboration",
            "Long-term technical growth",
          ].map((item) => (
            <SurfaceCard key={item}>
              <p className="text-lg font-semibold text-[var(--color-text)]">
                {item}
              </p>
            </SurfaceCard>
          ))}
        </motion.div>
      </Container>
    </PageShell>
  );
}
