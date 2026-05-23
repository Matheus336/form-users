import { CreateUser } from "../interfaces/user";
import { createUser } from "../mutations/create-user";
import { useForm } from "react-hook-form";

export const useCreateUserLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUser>({
    defaultValues: {
      name: "",
      email: "",
      age: 0,
      gender: "male",
      status: "active",
    },
  });

  const handleCreateUser = handleSubmit(async (data) => {
    await createUser(data);

    await new Promise((resolve) => setTimeout(resolve, 4000));
  });

  return {
    register,
    handleCreateUser,
    errors,
    isSubmitting,
  };
};
