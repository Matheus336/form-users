import { BASE_URL } from "../constants/base-url";
import { CreateUser } from "../interfaces/user";

export async function createUser(newUserData: CreateUser) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await response.json();
}
