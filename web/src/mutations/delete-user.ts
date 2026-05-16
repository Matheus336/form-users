import { BASE_URL } from "../constants/base-url";

export async function deleteUser(id: string) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });

  return response.json();
}
