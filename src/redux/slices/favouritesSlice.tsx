import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/Product';

type InitialState = {
  favouriteItems: IProduct[];
};

const initialState: InitialState = {
  favouriteItems: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    getInitialFavourites: (state) => {
      state.favouriteItems = JSON.parse(
        localStorage.getItem('favourite-items') || '[]',
      ) as IProduct[];
    },
    toggleFavourite: (state, action) => {
      const hasProductId = state.favouriteItems.some(
        (favouriteItem) => favouriteItem._id === action.payload._id,
      );

      if (hasProductId) {
        state.favouriteItems = state.favouriteItems.filter(
          (favouriteItem) => favouriteItem._id !== action.payload._id,
        );
        localStorage.setItem('favourite-items', JSON.stringify(state.favouriteItems));
      } else {
        state.favouriteItems.push(action.payload);
        localStorage.setItem('favourite-items', JSON.stringify(state.favouriteItems));
      }
    },
  },
});

export const { toggleFavourite, getInitialFavourites } = favouritesSlice.actions;
