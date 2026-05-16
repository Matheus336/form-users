import { file, write, type BunRequest } from "bun";
import type { User } from "../models/user";
import { DB_PATH } from "../constants/db-path";

export const deleteUser = async (request: BunRequest) => {
  const { id_user } = request.params;

  if (!id_user)
    return Response.json({ error: "User ID is required" }, { status: 400 });

  const usersDb: User[] = await file(DB_PATH).json();

  const filteredUsers = usersDb.filter((user) => user.id !== id_user);

  if (filteredUsers.length === usersDb.length)
    return Response.json({ error: "User not found" }, { status: 404 });

  await write(DB_PATH, JSON.stringify(filteredUsers, null, 2));

  return Response.json(
    { message: "User deleted successfully" },
    { status: 200 },
  );
};
