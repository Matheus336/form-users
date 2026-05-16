import { deleteUser } from "../mutations/delete-user";

export const useUserList = () => {
  async function handleDeleteUser(id: string) {
    await deleteUser(id);
  }

  return {
    handleDeleteUser,
  };
};
