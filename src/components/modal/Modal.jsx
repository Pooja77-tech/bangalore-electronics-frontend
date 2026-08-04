export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(29,28,29,0.28)] p-4 backdrop-blur-md">
      <div className="premium-card w-full max-w-lg rounded-[24px] p-5 sm:p-6">
        <button
          type="button"
          onClick={onClose}
          className="spatial-icon-button float-right flex h-9 w-9 items-center justify-center rounded-full text-[var(--slack-purple)]"
          aria-label="Close dialog"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
