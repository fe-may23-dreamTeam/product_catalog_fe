import { useEffect } from 'react';
import { getInitialItems, useAppDispatch } from '../redux';

export const useInitCart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialItems());
  }, []);
};
