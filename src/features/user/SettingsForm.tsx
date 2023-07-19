import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUser } from "../auth/UserContext";
import Button from "../misc/Button";
import Form from "../misc/Form";
import { useUpdateUser } from "./useUpdateUser";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
});

type FormData = z.infer<typeof schema>;

function SettingsForm() {
  const { currentUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (currentUser?.username === data.username) return;
    const updatedUser = {
      username: data.username,
    };
    updateUser(updatedUser);
  };
  return (
    <div className="flex max-w-7xl items-center justify-center">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(onSubmit)(e);
        }}
      >
        <h2 className="text-xl font-bold tracking-tighter text-black ">
          Change Username
        </h2>

        <Form.InputGroup>
          <Form.Input
            type="text"
            placeholder="Username"
            {...register("username")}
            defaultValue={currentUser?.username}
            error={errors.username?.message}
          />
        </Form.InputGroup>
        <div>
          <Button disabled={isUpdating}>
            <span>{isUpdating ? "Updating..." : "Save"}</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default SettingsForm;
