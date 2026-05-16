import { file, type BunRequest } from "bun";
import type { User } from "../models/user";
import { DB_PATH } from "../constants/db-path";

export const userDetails = async (request: BunRequest) => {
  const { id_user } = request.params;

  if (!id_user)
    return Response.json({ error: "User ID is required" }, { status: 400 });

  const usersDb: User[] = await file(DB_PATH).json();

  const user = usersDb.find((user) => user.id === id_user);

  if (!user) return Response.json({ error: "User not found" }, { status: 404 });

  return Response.json(user, { status: 200 });
};
