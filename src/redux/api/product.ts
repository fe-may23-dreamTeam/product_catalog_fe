import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dreamteam.onrender.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
