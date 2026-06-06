import { useMutation } from "@tanstack/react-query";
import { BASE_URL } from "../constants/base-url";

export function useDeleteUserMutation() {
  const { mutateAsync: deleteUser } = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
      });
      return response.json();
    },
  });
  return { deleteUser };
}
