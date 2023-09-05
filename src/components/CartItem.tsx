import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';

import { removeFromCart, increaseItemCount, decreaseItemCount } from '../redux';
import { ICartItem } from '../types/CartItem';

type Props = {
  item: ICartItem;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { name: itemName, price, image, count, id } = item;

  const maxItems = 99;
  const minItems = 1;

  const dispatch = useDispatch();

  const increaseCount = () => {
    if (count < maxItems) {
      dispatch(increaseItemCount(id));
    }
  };

  const decreaseCount = () => {
    if (count > minItems) {
      dispatch(decreaseItemCount(id));
    }
  };

  return (
    <div className="border bg-white border-elements max-w-[752px] text-sm text-primary flex flex-wrap rounded-2xl p-4 gap-4 justify-between items-center tablet:p-6 tablet:gap-6 tablet:flex-nowrap">
      <div className="flex justify-between items-center gap-4 tablet:gap-6 w-full tablet:w-auto">
        <button onClick={() => dispatch(removeFromCart(id))}>
          <FiX className="text-icons w-4 h-4 hover:scale-150 ease-in duration-300" />
        </button>

        <img
          className="w-20 h-20 object-contain"
          src={image}
          alt="product demo"
        />

        <p className="max-w-xs">{itemName}</p>
      </div>
      <div className="flex justify-between items-center gap-4 tablet:gap-6 w-full tablet:w-auto">
        <div className="flex gap-3 items-center">
          <span
            className={classNames(
              [
                'flex',
                'items-center',
                'justify-center',
                'text-primary',
                'border',
                'border-icons',
                'rounded-full',
                'h-8',
                'w-8',
                'cursor-pointer',
                'hover:border-primary',
                'focus:border-primary',
              ],
              {
                '!text-icons': count === minItems,
                '!border-icons': count === minItems,
              },
            )}
            onClick={decreaseCount}
          >
            <FiMinus />
          </span>

          <span>{count}</span>

          <span
            className={classNames(
              [
                'flex',
                'items-center',
                'justify-center',
                'text-primary',
                'border',
                'border-icons',
                'rounded-full',
                'h-8',
                'w-8',
                'cursor-pointer',
                'hover:border-primary',
                'focus:border-primary',
              ],
              {
                '!text-icons': count === maxItems,
                '!border-icons': count === maxItems,
              },
            )}
            onClick={increaseCount}
          >
            <FiPlus />
          </span>
        </div>
        <p className="text-primary font-extrabold text-[22px]">${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
