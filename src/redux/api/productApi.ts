import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dreamteam.onrender.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, perPage, sortBy }) => ({
        url: `/products`,
        params: {
          page,
          perPage,
          sortBy,
        },
      }),
    }),

    getProductById: builder.query({
      query: (productId) => `/products/${productId}`,
    }),

    getProductsByCategory: builder.query({
      query: (type) => ({
        url: `/products`,
        params: {
          type,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productApi;
