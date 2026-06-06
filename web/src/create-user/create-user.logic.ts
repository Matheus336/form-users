import { CreateUser } from "../interfaces/user";
import { createUser } from "../mutations/create-user";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty({ error: "Nome é obrigatório" })
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.email({
    error: (issue) => {
      if (issue.input === "") {
        return "Email é obrigatório";
      }
      return "Email inválido";
    },
  }),
  age: z
    .number({ error: "Idade é obrigatória" })
    .min(16, { error: "Idade deve ser maior ou igual a 16" })
    .max(120, { error: "Idade deve ser menor ou igual a 120" }),
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
      age: undefined,
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
