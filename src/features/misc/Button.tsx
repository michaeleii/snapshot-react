function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="w-full rounded-full bg-black px-5 py-3 font-bold text-white transition-colors hover:bg-white hover:text-black hover:ring-2 hover:ring-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
