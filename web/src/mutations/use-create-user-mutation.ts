import { BASE_URL } from "../constants/base-url";
import { CreateUser } from "../interfaces/user";
import { useMutation } from "@tanstack/react-query";

export function useCreateUserMutation() {
  const { mutateAsync: createUser } = useMutation({
    mutationFn: async (newUserData: CreateUser) =>
      await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      }),
  });
  return { createUser };
}
