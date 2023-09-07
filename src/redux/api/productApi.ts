import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/Product';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dreamteam.onrender.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, perPage, sortBy, type }) => ({
        url: `/products`,
        params: {
          page,
          perPage,
          sortBy,
          type,
        },
      }),
    }),

    getProductById: builder.query<IProduct, string>({
      query: (productId) => `/products/${productId}`,
    }),

    getProductByParams: builder.query<IProduct, any>({
      query: ({ id, capacity, color }) => ({
        url: `products/${id}`,
        params: {
          color,
          capacity,
        },
      }),
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
  useLazyGetProductByParamsQuery,
  useGetProductsByCategoryQuery,
} = productApi;
