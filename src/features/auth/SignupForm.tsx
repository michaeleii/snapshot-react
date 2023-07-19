import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../misc/Button";
import Logo from "../misc/Logo";
import Form from "../misc/Form";
import { useSignUp } from "./useSignup";

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
  const { mutate: signUp, isLoading, error } = useSignUp();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    signUp(newUser);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(onSubmit)(e);
      }}
    >
      <div className="mx-auto mb-5">
        <Logo />
        {error instanceof Error ? (
          <p className="text-center text-red-700">{error.message}</p>
        ) : (
          <p className="mt-5 text-center text-2xl font-medium tracking-tighter">
            Sign up to post photos.
          </p>
        )}
      </div>
      <Form.InputGroup>
        <Form.Input
          type="text"
          placeholder="Username"
          error={errors.username?.message}
          {...register("username")}
        />
      </Form.InputGroup>
      <Form.InputGroup>
        <Form.Input
          type="email"
          placeholder="Email Address"
          error={errors.email?.message}
          {...register("email")}
        />
      </Form.InputGroup>
      <Form.InputGroup>
        <Form.Input
          type="password"
          placeholder="Password"
          error={errors.password?.message}
          {...register("password")}
        />
      </Form.InputGroup>
      <div>
        <Button disabled={isLoading}>
          {isLoading ? "Please wait..." : "Register"}
        </Button>
      </div>
    </Form>
  );
}
export default SignupForm;
