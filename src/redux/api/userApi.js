import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["Users"],
    }),
    getUser: builder.query({
      query: (userId) => ({
        url: `/users/${userId}`,
      }),
      providesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (usersData) => ({
        url: "/users",

        body: usersData,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, userData }) => ({
        url: `/users/${userId}`,
        body: userData,
      }),
    }),
  }),
  tagTypes: ["Users", "User"],
});

export const {
  // GET /users
  useGetUsersQuery,
  useLazyGetUsersQuery,
  // GET /users/:userId
  useGetUserQuery,
  useLazyGetUserQuery,
  // DELETE /users/:userId
  useDeleteUserMutation,
} = userApi;
