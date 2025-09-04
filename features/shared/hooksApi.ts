// All global api hooks go here
// DON'T DELETE - KEEPING FOR FUTURE REFERENCE
// import axiosClient from "@/axiosConfig";
// import { setUser } from "@/redux/appSlice";
// import { store } from "@/redux/store";
// import { useMutation, useSuspenseQuery, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
// import camelcaseKeys from "camelcase-keys";
// import snakecaseKeys from "snakecase-keys";
// import { UserQueryKeys } from "./enums";
// import { UpdateUserRequest, User } from "./types";

// const useUpdateUserMutation = () => {
//     return useMutation({
//         mutationFn: async ({ userId, payload }: { userId: number; payload: UpdateUserRequest }) => {
//             try {
//                 const formData = new FormData();
//                 Object.entries(snakecaseKeys(payload, { deep: true })).forEach(([key, value]: [any, any]) => {
//                     formData.append(key, value);
//                 });
//                 formData.append("_method", "PATCH");
//                 const response = await axiosClient.post(`/user/${userId}`, formData);

//                 return camelcaseKeys(response.data, { deep: true });
//             } catch (error) {
//                 console.log(error);
//                 return null;
//             }
//         },
//     });
// };

// const useGetCurrentUserQuery = (
//     props?: Omit<UseSuspenseQueryOptions<User, Error>, "queryKey" | "queryFn">,
// ): UseSuspenseQueryResult<User, Error> => {
//     return useSuspenseQuery({
//         queryKey: [UserQueryKeys.CurrentUser],
//         queryFn: async () => {
//             const response = await axiosClient.get("/user/me");
//             const data = camelcaseKeys(response.data, { deep: true });
//             const user = data?.user;
//             store.dispatch(setUser(user));
//             return user;
//         },
//         staleTime: 5 * 60 * 1000, // 5 minutes - data is considered fresh for 5 minutes
//         gcTime: 10 * 60 * 1000, // 10 minutes - cache is kept for 10 minutes (formerly cacheTime)
//         ...props,
//     });
// };

// export { useGetCurrentUserQuery, useUpdateUserMutation };
