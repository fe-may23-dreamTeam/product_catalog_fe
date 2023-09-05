import { ICartItem } from '../types/CartItem';

export const getTotalProductsCost = (product: ICartItem[]) => {
  const totalAmount = product.reduce((total, item) => {
    const itemsPrice = item.price * item.count;

    return total + itemsPrice;
  }, 0);

  return totalAmount;
};
