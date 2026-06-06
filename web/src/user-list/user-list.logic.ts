import { useQueryClient } from "@tanstack/react-query";
import { useDeleteUserMutation } from "../mutations/use-delete-user-mutation";
import { useGetUserListQuery } from "../queries/use-get-user-list-query";

export const useUserList = () => {
  const queryClient = useQueryClient();
  const { deleteUser } = useDeleteUserMutation();

  async function handleDeleteUser(id: string) {
    await deleteUser(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });
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
