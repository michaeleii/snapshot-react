import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUser } from "../auth/UserContext";
import Button from "../misc/Button";
import Form from "../misc/Form";
import { useUpdateUser } from "./useUpdateUser";
import { getCurrentUser } from "../../services/apiAuth";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
});

type FormData = z.infer<typeof schema>;

function SettingsForm() {
  const { currentUser } = useUser();

  const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: async () => {
      const user = await getCurrentUser();
      if (!user) return { username: "" };
      return { username: user.username };
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (currentUser?.username === data.username) return;
    const updatedUser = {
      username: data.username,
    };
    updateUser(updatedUser);
  };
  if (!currentUser) return null;
  return (
    <div className="xl:flex xl:items-center xl:justify-center">
      <form
        className="flex flex-col gap-5 p-10"
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
            error={errors.username?.message}
          />
        </Form.InputGroup>
        <div>
          <Button disabled={isUpdating}>
            <span>{isUpdating ? "Updating..." : "Save"}</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SettingsForm;
