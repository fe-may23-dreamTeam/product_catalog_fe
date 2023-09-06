import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/Product';

// type Details = {
//   color?: string;
//   capacity?: string;
//   id: string;
// };

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
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useLazyGetProductByParamsQuery,
} = productApi;
