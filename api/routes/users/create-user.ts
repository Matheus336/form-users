import { file, write, type BunRequest } from "bun";
import type { User } from "../models/user";
import { DB_PATH } from "../constants/db-path";

export const createUser = async (request: BunRequest) => {
  try {
    const body = (await request.json()) as Omit<User, "id">;

    const usersDb: User[] = await file(DB_PATH).json();

    const newUser: User = {
      id: String(usersDb.length + 1),
      ...body,
    };

    usersDb.push(newUser);

    await write(DB_PATH, JSON.stringify(usersDb, null, 2));

    return Response.json(newUser, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
};
