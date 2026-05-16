import { userList } from "./routes/users/user-list";
import { createUser } from "./routes/users/create-user";
import { userDetails } from "./routes/users/user-details";
import { deleteUser } from "./routes/users/delete-user";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function withCors(handler: Function) {
  return async (req: Request, ...args: any[]) => {
    const res = await handler(req, ...args);
    if (res instanceof Response) {
      for (const [key, value] of Object.entries(corsHeaders)) {
        res.headers.set(key, value);
      }
    }
    return res;
  };
}

const server = Bun.serve({
  routes: {
    "/users": {
      GET: withCors(userList),
      POST: withCors(createUser),
    },
    "/users/:id_user": {
      GET: withCors(userDetails),
      DELETE: withCors(deleteUser),
    },
  },
  fetch(req) {
    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    return new Response("Not Found", { status: 404 });
  },
  port: 3000,
});

console.log(`Server is running on port ${server.port}`);
