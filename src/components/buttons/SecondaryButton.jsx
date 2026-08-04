export default function SecondaryButton({
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      data-variant="ghost"
      className={`premium-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
