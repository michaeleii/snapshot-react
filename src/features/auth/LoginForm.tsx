import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../misc/Button";
import Form from "../misc/Form";
import Logo from "../misc/Logo";
import { useLogin } from "./useLogin";
import { useUser } from "../user/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters long" }),
});

type FormData = z.infer<typeof schema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { mutate: login, isLoading, error } = useLogin();

  const onSubmit = (data: FormData) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    login(user);
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
      </div>
      {error instanceof Error && (
        <p className="text-center text-red-700">{error.message}</p>
      )}
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
          type="Password"
          placeholder="Password"
          error={errors.password?.message}
          {...register("password")}
        />
      </Form.InputGroup>
      <div>
        <Button disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </Form>
  );
}
export default LoginForm;
