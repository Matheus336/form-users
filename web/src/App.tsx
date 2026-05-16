import "./index.css";
import { CreateUser } from "./create-user";
import { UserList } from "./user-list";
import { Suspense } from "react";
import { getUserList } from "./queries/get-user-list";
import { Loader } from "lucide-react";

const userListPromise = getUserList();

export const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] w-full mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 tracking-tight text-center">
          React Hook Form / Zod
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-6 items-start">
          <CreateUser />

          <Suspense
            fallback={
              <div className="flex flex-col gap-4 h-full items-center justify-center text-base font-medium text-gray-700">
                <Loader className="size-8 animate-spin" />
                Carregando usuários...
              </div>
            }
          >
            <UserList userListPromise={userListPromise} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
