export default function TestimonialCard({ quote, author }) {
  return (
    <figure className="premium-card rounded-[24px] p-6">
      <blockquote className="text-lg leading-8 text-[var(--color-text)]">
        "{quote}"
      </blockquote>
      <figcaption className="mt-5 text-sm font-semibold text-[var(--color-accent)]">
        {author}
      </figcaption>
    </figure>
  );
}
