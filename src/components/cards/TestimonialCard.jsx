export default function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p>"{quote}"</p>
      <p className="mt-2 font-bold">- {author}</p>
    </div>
  );
}