import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

export default function Solutions() {
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const useCases = [
    {
      title: "Corporate Offices",
      description:
        "Secure access control and surveillance for multi-floor corporate buildings with integrated IT infrastructure.",
      features: ["Biometric Access", "Video Surveillance", "Network Security"],
    },
    {
      title: "Educational Institutions",
      description:
        "Comprehensive safety and operations solutions for schools, colleges, and universities.",
      features: ["Access Control", "Emergency Response", "Video Analytics"],
    },
    {
      title: "Healthcare Facilities",
      description:
        "Critical infrastructure protection for hospitals and medical centers where uptime and auditability matter.",
      features: ["Patient Safety", "Asset Tracking", "Emergency Systems"],
    },
    {
      title: "Government Buildings",
      description:
        "High-security solutions for public offices and civic infrastructure with clear audit trails.",
      features: ["Multi-level Security", "Audit Compliance", "Monitoring"],
    },
    {
      title: "Industrial Complexes",
      description:
        "Robust security for manufacturing plants and industrial facilities with environmental awareness.",
      features: ["Perimeter Security", "Asset Protection", "Monitoring"],
    },
    {
      title: "Retail & Commercial",
      description:
        "Loss prevention, customer safety, and operations visibility for high-traffic commercial spaces.",
      features: ["Loss Prevention", "Customer Safety", "Inventory Security"],
    },
  ];

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    if (!reviewRating) {
      return;
    }

    setReviewSubmitted(true);
  };

  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="Sector-specific systems with a common standard."
          description="Bangalore Electronics delivers technology solutions engineered for performance, compliance, scalability, and long-term reliability across enterprise and public-sector environments."
          align="center"
        />

        <motion.div
          {...fadeUp}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {useCases.map((useCase) => (
            <SurfaceCard key={useCase.title} className="min-h-[390px]">
              <h3 className="text-2xl font-semibold text-[var(--color-text)]">
                {useCase.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {useCase.description}
              </p>
              <div className="mt-8 space-y-2">
                {useCase.features.map((feature) => (
                  <p
                    key={feature}
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)]"
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </motion.div>

        <SurfaceCard
          {...fadeUp}
          className="mt-20 grid gap-8 p-8 text-center sm:p-10 lg:grid-cols-[0.65fr_1.35fr] lg:p-12 lg:text-left"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
              Customer Satisfaction
            </p>
            <p className="mt-5 text-5xl font-semibold text-[var(--color-text)]">
              5.0/5
            </p>
            <div
              className="mt-4 flex justify-center gap-2 text-[var(--slack-yellow)] lg:justify-start"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-6 w-6"
                  fill="currentColor"
                  strokeWidth={1.75}
                />
              ))}
            </div>
          </div>
          <p className="self-end text-base leading-8 text-[var(--color-muted)]">
            Our solutions consistently earn strong satisfaction ratings for
            reliability, timely execution, and professional support.
          </p>
        </SurfaceCard>

        <SurfaceCard {...fadeUp} className="mt-6 p-8 text-center sm:p-10">
          <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
            Give Your Review Rating
          </p>
          <form className="mt-6" onSubmit={handleReviewSubmit}>
            <div
              className="flex justify-center gap-3"
              role="radiogroup"
              aria-label="Choose your review rating"
            >
              {Array.from({ length: 5 }).map((_, index) => {
                const rating = index + 1;
                const isSelected = rating <= reviewRating;

                return (
                  <button
                    key={rating}
                    type="button"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--slack-yellow)] transition hover:border-[rgba(236,178,46,0.55)] hover:bg-[rgba(236,178,46,0.08)]"
                    onClick={() => {
                      setReviewRating(rating);
                      setReviewSubmitted(false);
                    }}
                    role="radio"
                    aria-checked={reviewRating === rating}
                    aria-label={`${rating} star${rating > 1 ? "s" : ""}`}
                  >
                    <Star
                      className="h-6 w-6"
                      fill={isSelected ? "currentColor" : "none"}
                      strokeWidth={1.75}
                    />
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-sm font-semibold text-[var(--color-text)]">
              {reviewRating
                ? `${reviewRating} out of 5 selected`
                : "Select your rating"}
            </p>

            <button
              type="submit"
              className="premium-button mt-6 min-h-0 px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-55"
              disabled={!reviewRating}
            >
              Submit rating
            </button>

            {reviewSubmitted ? (
              <p className="mt-4 text-sm font-semibold text-[var(--slack-green)]">
                Thank you for rating us {reviewRating} out of 5.
              </p>
            ) : null}
          </form>
        </SurfaceCard>
      </Container>
    </PageShell>
  );
}
