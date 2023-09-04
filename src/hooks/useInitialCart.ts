import { useEffect } from 'react';
import { getInitialItems, useAppDispatch } from '../redux';

export const useInitialCart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialItems());
  }, []);
};
