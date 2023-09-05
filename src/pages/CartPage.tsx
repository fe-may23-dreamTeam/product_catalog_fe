/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { Button } from '../components/Button';
import CartItem from '../components/CartItem';
import { getTotalProductsCost } from '../utils/getTotalCost';
import { getTotalItemsCount } from '../utils/getTotalItemsCount';

export const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalCost = getTotalProductsCost(cartItems);
  const totalItemsCount = getTotalItemsCount(cartItems);

  return (
    <main className="container mx-auto flex flex-col px-4 pt-6 tablet:px-6 desktop:w-[1200px] desktop:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
          Cart
        </h1>
      </div>

      <div className="flex flex-col desktop:flex-row justify-between desktop:items-start gap-4">
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="box-border flex flex-col mx-auto desktop:mx-0 items-center rounded-lg p-6 w-full border border-elements bg-hover-bg desktop:w-[368px]">
          <h3 className="text-center text-primary text-[32px] font-extrabold leading-[41px]">
            {`${totalCost}$`}
          </h3>
          <div className="text-center text-secondary text-sm font-semibold leading-[21px] mb-4">
            {`Total for ${totalItemsCount} items`}
          </div>
          <span className="w-full h-[0px] border text-elements mb-4"></span>
          <Button>Checkout</Button>
        </div>
      </div>
    </main>
  );
};
