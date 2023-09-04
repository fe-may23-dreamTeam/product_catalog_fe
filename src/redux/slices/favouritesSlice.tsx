import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/Product';

type InitialState = {
  favouriteItems: IProduct[],
}

const initialState: InitialState = {
  favouriteItems: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.favouriteItems.push(action.payload);
    },
    deleteFromFavourites: (state, action) => {
      state.favouriteItems = state.favouriteItems.filter(favouriteItem => (
        favouriteItem._id !== action.payload._id
      ));
    },
  },
});

export const { addToFavourites, deleteFromFavourites } = favouritesSlice.actions;
