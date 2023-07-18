import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <LoginForm />
      <img
        src="/test_post.jpg"
        alt=""
        className="hidden h-screen w-full object-cover xl:block"
      />
    </div>
  );
}
export default Login;
