function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      {children}
      <img
        src="/test_post.jpg"
        alt=""
        className="hidden h-screen w-full object-cover xl:block"
      />
    </div>
  );
}
export default FormLayout;
