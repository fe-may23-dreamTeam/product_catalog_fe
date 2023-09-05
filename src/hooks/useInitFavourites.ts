import { useEffect } from 'react';
import { getInitialFavourites, useAppDispatch } from '../redux';

export const useInitFavourites = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialFavourites());
  }, []);
};
