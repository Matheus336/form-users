import { CreateUser } from "../interfaces/user";
import { createUser } from "../mutations/create-user";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  age: z.number().min(16).max(120),
  gender: z.enum(["male", "female"]),
  status: z.enum(["active", "inactive"]),
});

export const useCreateUserLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUser>({
    defaultValues: {
      name: "",
      email: "",
      age: 16,
      gender: "male",
      status: "active",
    },
    resolver: zodResolver(createUserSchema),
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
