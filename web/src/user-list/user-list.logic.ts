import { deleteUser } from "../mutations/delete-user";
import { useGetUserListQuery } from "../queries/use-get-user-list-query";

export const useUserList = () => {
  async function handleDeleteUser(id: string) {
    await deleteUser(id);
  }

  const { userList, isPendingUserList, isFetchingUserList, errorUserList } =
    useGetUserListQuery();

  return {
    handleDeleteUser,
    userList,
    isPendingUserList,
    isFetchingUserList,
    errorUserList,
  };
};
