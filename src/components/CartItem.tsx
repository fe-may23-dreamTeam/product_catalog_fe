import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';

import { removeFromCart, increaseItemCount, decreaseItemCount } from '../redux';
import { ICartItem } from '../types/CartItem';
import { NavLink } from 'react-router-dom';

type Props = {
  item: ICartItem;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { name: itemName, price, image, count, id, category } = item;

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
    <div className="border bg-white-light dark:bg-gray-surface border-elements-light dark:border-elements-dark max-w-[752px] text-sm text-primary-light dark:text-primary-dark flex flex-wrap rounded-2xl p-4 gap-4 justify-between items-center tablet:p-6 tablet:gap-6 tablet:flex-nowrap">
      <div className="flex justify-between items-center gap-4 tablet:gap-6 w-full tablet:w-auto">
        <button onClick={() => dispatch(removeFromCart(id))}>
          <FiX className="text-icons-light dark:text-icons-dark w-4 h-4 hover:scale-150 ease-in duration-300" />
        </button>

        <img
          className="w-20 h-20 object-contain"
          src={image}
          alt="product demo"
        />

        <NavLink to={`/${category}/${id}`} className="max-w-xs">
          {itemName}
        </NavLink>
      </div>
      <div className="flex justify-between items-center gap-4 tablet:gap-6 w-full tablet:w-auto">
        <div className="flex gap-3 items-center">
          <span
            className={classNames(
              [
                'flex',
                'items-center',
                'justify-center',
                'text-primary-light',
                'dark:text-primary-dark',
                'border',
                'border-icons-light',
                'dark:border-white-dark',
                'dark:bg-white-dark',
                'dark:hover:bg-icons-dark',
                'rounded-full',
                'h-8',
                'w-8',
                'cursor-pointer',
                'hover:border-primary-light',
                'focus:border-primary-light',
                'dark:focus:border-primary-dark',
              ],
              {
                '!text-icons-light dark:!text-icons-dark dark:!bg-gray-surface':
                  count === minItems,
                '!border-icons-light dark:!border-icons-dark':
                  count === minItems,
              },
            )}
            onClick={decreaseCount}
          >
            <FiMinus />
          </span>

          <span className="select-none inline-block">{count}</span>

          <span
            className={classNames(
              [
                'flex',
                'items-center',
                'justify-center',
                'text-primary-light',
                'dark:text-primary-dark',
                'border',
                'border-icons-light',
                'dark:border-white-dark',
                'dark:bg-white-dark',
                'dark:bg-white-dark',
                'dark:hover:bg-icons-dark',
                'rounded-full',
                'h-8',
                'w-8',
                'cursor-pointer',
                'hover:border-primary-light',
                'focus:border-primary-light',
                'dark:focus:border-primary-dark',
              ],
              {
                '!text-icons-light dark:!text-icons-dark dark:!bg-gray-surface':
                  count === maxItems,
                '!border-icons-light hover:!border-icons-light':
                  count === maxItems,
              },
            )}
            onClick={increaseCount}
          >
            <FiPlus className="dark:text-primary-dark" />
          </span>
        </div>
        <p className="text-primary-light dark:text-primary-dark font-extrabold text-[22px] select-none">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
