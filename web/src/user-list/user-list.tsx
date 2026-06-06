import { User } from "../interfaces/user";
import { useUserList } from "./user-list.logic";
import { PencilLine, Trash2 } from "lucide-react";

interface UserListProps {
  userList?: User[];
}

export function UserList({ userList }: UserListProps) {
  const { handleDeleteUser } = useUserList();

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100 text-sm font-semibold text-slate-600">
            <th className="py-3 px-4 whitespace-nowrap w-20">ID</th>
            <th className="py-3 px-4 whitespace-nowrap w-1/3">Nome</th>
            <th className="py-3 px-4 whitespace-nowrap">Email</th>
            <th className="py-3 px-4 whitespace-nowrap w-30">Status</th>
            <th className="py-3 px-4 whitespace-nowrap text-center">Ações</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {userList?.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-slate-50/50 transition-colors"
            >
              <td className="py-3 px-4 text-sm text-slate-500 font-mono">
                #{user.id}
              </td>

              <td className="py-3 px-4 text-sm font-medium text-slate-900 truncate">
                {user.name}
              </td>

              <td className="py-3 px-4 text-sm text-slate-500">{user.email}</td>

              <td className="py-3 px-4 text-sm">
                {user.status === "active" ? (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-green-600 text-white shadow-sm">
                    Ativo
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-500 text-white shadow-sm">
                    Inativo
                  </span>
                )}
              </td>

              <td className="py-3 px-4 w-0">
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    title="Editar"
                    className="size-9 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors shadow-sm cursor-pointer"
                  >
                    <PencilLine size={16} />
                  </button>

                  <button
                    type="button"
                    title="Excluir"
                    className="size-9 flex items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors shadow-sm cursor-pointer"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
