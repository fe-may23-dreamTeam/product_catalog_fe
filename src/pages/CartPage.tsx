/* eslint-disable max-len */
import classNames from 'classnames';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { CheckoutModal } from '../components/CheckoutModal';

const totalSum = '2657';
const itemsAmount = '3';

export const CartPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handlePaymentSuccess = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <CheckoutModal showModal={showModal} onCloseModal={handleCloseModal} />
      )}
      <main
        className={classNames(
          'container mx-auto flex flex-col px-4 pt-6 tablet:px-6 desktop:w-[1200px] desktop:px-8',
          { 'blur pointer-events-none': showModal },
        )}
      >
        <div className="mb-8">
          <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
            Cart
          </h1>
        </div>

        <div className="flex flex-col desktop:flex-row justify-between desktop:items-start gap-4">
          <div className="flex flex-col gap-4">
            <div className="w-full desktop:w-[752px] mb-2 max-w-[752px] h-32 p-6 bg-white rounded-2xl border border-zinc-200 justify-center items-center gap-6 inline-flex"></div>
            <div className="w-full desktop:w-[752px] mb-2 max-w-[752px] h-32 p-6 bg-white rounded-2xl border border-zinc-200 justify-center items-center gap-6 inline-flex"></div>
            <div className="w-full desktop:w-[752px] mb-2 max-w-[752px] h-32 p-6 bg-white rounded-2xl border border-zinc-200 justify-center items-center gap-6 inline-flex"></div>
            <div className="w-full desktop:w-[752px] mb-2 max-w-[752px] h-32 p-6 bg-white rounded-2xl border border-zinc-200 justify-center items-center gap-6 inline-flex"></div>
            <div className="w-full desktop:w-[752px] mb-2 max-w-[752px] h-32 p-6 bg-white rounded-2xl border border-zinc-200 justify-center items-center gap-6 inline-flex"></div>
            <div className="w-full desktop:w-[752px] mb-2 max-w-[752px] h-32 p-6 bg-white rounded-2xl border border-zinc-200 justify-center items-center gap-6 inline-flex"></div>
          </div>

          <div className="box-border flex flex-col mx-auto desktop:mx-0 items-center rounded-lg p-6 w-full border border-elements bg-hover-bg desktop:w-[368px]">
            <h3 className="text-center text-primary text-[32px] font-extrabold leading-[41px]">
              {`${totalSum}$`}
            </h3>
            <div className="text-center text-secondary text-sm font-semibold leading-[21px] mb-4">
              {`Total for ${itemsAmount} items`}
            </div>
            <span className="w-full h-[0px] border text-elements mb-4"></span>
            <Button onClick={handlePaymentSuccess}>Checkout</Button>
          </div>
        </div>
      </main>
    </>
  );
};
