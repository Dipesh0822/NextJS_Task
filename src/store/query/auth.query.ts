import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, InternalAPI } from "../../config/api.config";

export const AuthAPI = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (data) => `${InternalAPI.Users}`,
    }),
    createUser: builder.mutation({
      query: (payload) => ({
        url: `${InternalAPI.Users}`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useCreateUserMutation } = AuthAPI;
