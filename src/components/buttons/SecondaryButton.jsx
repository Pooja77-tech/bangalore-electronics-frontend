export default function SecondaryButton({ children, onClick }) {
  return (
    <button
      className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}