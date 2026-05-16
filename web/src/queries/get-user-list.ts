import { BASE_URL } from "../constants/base-url";
import { User } from "../interfaces/user";

export async function getUserList() {
  const response = await fetch(`${BASE_URL}/users`);
  const data: User[] = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
}
