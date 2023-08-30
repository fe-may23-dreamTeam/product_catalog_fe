/* eslint-disable max-len */
import { useState } from 'react';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import { FaMinus, FaPlus } from 'react-icons/fa';

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
    // !!! delete class border (was added for visualisation without background)
    <div className="border max-w-3xl text-sm text-primary flex flex-wrap rounded-2xl p-4 gap-4 justify-between items-center sm:p-6 sm:gap-6">
      <div className="flex justify-between items-center gap-4 sm:gap-6 w-full md:w-auto">
        <button>
          <IoMdClose className="text-icons w-4 h-4 hover:scale-150 ease-in duration-300" />
        </button>

        <img
          className="w-[80px] h-[80px]"
          src={require('../assets/images/iphone11.png')} // hardcoded for now
          alt="product demo"
        />

        <p className="max-w-xs">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>
      <div className="flex justify-between items-center gap-4 sm:gap-6 w-full md:w-auto">
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
                '!cursor-not-allowed': itemCount === minItems,
              },
            )}
            onClick={decreaseCount}
          >
            <FaMinus />
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
                '!cursor-not-allowed': itemCount === maxItems,
              },
            )}
            onClick={increaseCount}
          >
            <FaPlus />
          </span>
        </div>
        <p className="text-primary font-extrabold text-[22px]">$1099</p>
      </div>
    </div>
  );
};

export default CartItem;
