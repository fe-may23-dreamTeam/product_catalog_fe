import { ICartItem } from '../types/CartItem';

export const getTotalItemsCount = (product: ICartItem[]) => {
  const totalCount = product.reduce((total, { count }) => {
    return total + count;
  }, 0);

  return totalCount;
};
