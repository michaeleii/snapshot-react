function Button({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className="w-full rounded-full bg-black px-5 py-3 font-bold text-white transition-colors hover:bg-white hover:text-black hover:ring-2 hover:ring-black disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700 disabled:ring-0"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
