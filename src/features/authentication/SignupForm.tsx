import { z } from "zod";

import Button from "../misc/Button";
import Logo from "../misc/Logo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters long" }),
});

type FormData = z.infer<typeof schema>;

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
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
          {...register("username")}
          placeholder="Username"
          className="w-full rounded-full border-2 px-5 py-3 placeholder:text-gray-300"
        />
      </div>
      <div>
        <input
          type="email"
          {...register("email")}
          placeholder="Email Address"
          className="w-full rounded-full border-2 px-5 py-3 placeholder:text-gray-300"
        />
      </div>
      <div>
        <input
          type="text"
          {...register("password")}
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
export default SignupForm;
