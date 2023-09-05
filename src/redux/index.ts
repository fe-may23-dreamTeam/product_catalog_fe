import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { favouritesSlice } from './slices/favouritesSlice';
import { cartSlice } from './slices/cartSlice';
import { productApi } from './api/productApi';

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [favouritesSlice.name]: favouritesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export { store };

export * from './slices/favouritesSlice';
export * from './slices/cartSlice';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
