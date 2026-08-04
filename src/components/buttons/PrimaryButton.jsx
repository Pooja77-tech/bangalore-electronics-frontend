export default function PrimaryButton({
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`premium-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
