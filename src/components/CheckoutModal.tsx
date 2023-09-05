import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiSmile } from 'react-icons/fi';
import { Button } from './Button';

type Props = {
  showModal: boolean;
  onCloseModal: () => void;
};

export const CheckoutModal: React.FC<Props> = ({ showModal, onCloseModal }) => {
  const navigate = useNavigate();

  function handlebackToHome() {
    navigate('/');
    onCloseModal();
  }

  return (
    <>
      {showModal && (
          <div className="z-10 max-h-fit max-w-2 absolute inset-x-0 top-16 m-auto justify-center container border border-secondary rounded-2xl w-auto my-6 mx-auto max-w-3xl shadow-lg flex flex-col bg-white outline-none focus:outline-none">
            <button
              className="flex justify-end bg-transparent border-0 float-right"
              onClick={onCloseModal}
            >
              <div className=" m-4 mb-1 border rounded-full border-icons border-solid hover:border-primary hover:scale-105 active:text-primary focus:text-primary h-10 w-10 flex items-center justify-center">
                <FiX className="w-4 h-4" />
              </div>
            </button>
            <div className="relative p-4 flex-auto">
              <h3 className="flex justify-center items-center font-Mont text-primary text-2xl">
                Your payment was successfull
              </h3>
                <p className="pt-8 flex items-center justify-center font-Mont text-secondary gap-2">
                  Thank you for shopping with us!
                  <span className="flex items-center">
                  <FiSmile className="text-accent mb-1" />
                </span>
                </p>
              <p className="pt-2 flex justify-center font-Mont text-secondary">
                Your order has been placed
              </p>
            </div>
            <div className="flex justify-around p-6 rounded-b w-full max-w-xs m-auto">
              <Button
                onClick={handlebackToHome}
              >
                Back to Home
              </Button>
            </div>
          </div>
      )}
    </>
  );
};
