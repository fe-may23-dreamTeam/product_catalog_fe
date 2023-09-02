/* eslint-disable max-len */
import { useState } from 'react';
import classNames from 'classnames';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';

const CartItem = () => {
  const [itemCount, setItemCount] = useState(1);
  const maxItems = 5;
  const minItems = 1;

  const increaseCount = () => {
    if (itemCount < maxItems) {
      setItemCount((prevCount) => prevCount + 1);
    }
  };

  const decreaseCount = () => {
    if (itemCount > minItems) {
      setItemCount((prevCount) => prevCount - 1);
    }
  };

  return (
    // !!! if max-width 752px is not suitable in page layout, change this rule max-w-[752px]
    <div className="border bg-white border-elements max-w-[752px] text-sm text-primary flex flex-wrap rounded-2xl p-4 gap-4 justify-between items-center tablet:p-6 tablet:gap-6 tablet:flex-nowrap">
      <div className="flex justify-between items-center gap-4 tablet:gap-6 w-full tablet:w-auto">
        <button>
          <FiX className="text-icons w-4 h-4 hover:scale-150 ease-in duration-300" />
        </button>

        <img
          className="w-20 h-20"
          src={require('../assets/images/iphone11.png')} // hardcoded for now
          alt="product demo"
        />

        <p className="max-w-xs">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
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
                '!text-icons': itemCount === minItems,
                '!border-icons': itemCount === minItems,
              },
            )}
            onClick={decreaseCount}
          >
            <FiMinus />
          </span>

          <span>{itemCount}</span>

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
                '!text-icons': itemCount === maxItems,
                '!border-icons': itemCount === maxItems,
              },
            )}
            onClick={increaseCount}
          >
            <FiPlus />
          </span>
        </div>
        <p className="text-primary font-extrabold text-[22px]">$1099</p>
      </div>
    </div>
  );
};

export default CartItem;
