import Button from "../misc/Button";
import Logo from "../misc/Logo";

function LoginForm() {
  return (
    <form
      action=""
      className="flex h-screen  flex-col justify-center gap-5  bg-white p-10 xl:min-h-screen xl:justify-center xl:px-20"
    >
      <div className="mx-auto mb-5">
        <Logo />
        <p className="mt-5 text-center text-2xl font-medium tracking-tighter">
          Sign up to post photos.
        </p>
      </div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full rounded-full border-2 px-5 py-3 placeholder:text-gray-300"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full rounded-full border-2 px-5 py-3 placeholder:text-gray-300"
        />
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="w-full rounded-full border-2 px-5 py-3 placeholder:text-gray-300"
        />
      </div>
      <div>
        <Button>Register</Button>
      </div>
    </form>
  );
}
export default LoginForm;