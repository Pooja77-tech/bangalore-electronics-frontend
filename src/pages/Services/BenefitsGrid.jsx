export default function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="bg-white p-4 rounded shadow">
        <h3>Benefit 1</h3>
        <p>Description</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3>Benefit 2</h3>
        <p>Description</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3>Benefit 3</h3>
        <p>Description</p>
      </div>
    </div>
  );
}