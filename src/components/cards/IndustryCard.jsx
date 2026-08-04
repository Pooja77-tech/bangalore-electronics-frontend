export default function IndustryCard({ title, description }) {
  return (
    <div className="premium-card rounded-[24px] p-6">
      <h3 className="text-xl font-semibold text-[var(--color-text)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}
