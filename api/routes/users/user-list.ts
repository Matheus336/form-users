import { file } from "bun";
import type { User } from "../models/user";
import { DB_PATH } from "../constants/db-path";

export const userList = async () => {
  const usersDb: User[] = await file(DB_PATH).json();

  return Response.json(usersDb, {
    status: 200,
  });
};
