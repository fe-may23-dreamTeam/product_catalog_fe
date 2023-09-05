import { useEffect } from 'react';
import {
  getInitialFavourites,
  getInitialItems,
  useAppDispatch,
} from '../redux';

export const useLocalStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialItems());
    dispatch(getInitialFavourites());
  }, []);
};
