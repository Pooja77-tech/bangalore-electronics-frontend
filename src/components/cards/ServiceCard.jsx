export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}