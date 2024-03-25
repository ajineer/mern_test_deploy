import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  basQuery: fetchBaseQuery({ baseUrl: "http: //lcoalhost:5555" }),
  tagTypes: ["Note", "User"],
  endpoints: (builder) => ({}),
});
