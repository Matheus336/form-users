import { BASE_URL } from "../constants/base-url";
import { User } from "../interfaces/user";
import { useQuery } from "@tanstack/react-query";

export function useGetUserListQuery() {
  const {
    data: userList,
    isPending: isPendingUserList,
    isFetching: isFetchingUserList,
    error: errorUserList,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/users`);
      const data: User[] = await response.json();
      return data;
    },
  });
  return { userList, isPendingUserList, isFetchingUserList, errorUserList };
}
