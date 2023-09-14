import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import { Button } from '../components/Button';
import CartItem from '../components/CartItem';
import { CheckoutModal } from '../components/CheckoutModal';
import { clearCart, useAppDispatch, useAppSelector } from '../redux';
import { getTotalProductsCost } from '../utils/getTotalCost';
import { getTotalItemsCount } from '../utils/getTotalItemsCount';

const CartPage = () => {
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const totalCost = getTotalProductsCost(cartItems);
  const totalItemsCount = getTotalItemsCount(cartItems);

  let itemCounter;

  if (totalItemsCount === 1) {
    itemCounter = `${t('totalFor')} ${totalItemsCount} ${t('item')}`;
  } else if (totalItemsCount >= 2 && totalItemsCount <= 4) {
    itemCounter = `${t('totalFor')} ${totalItemsCount} ${t('itemu')}`;
  } else {
    itemCounter = `${t('totalFor')} ${totalItemsCount} ${t('items')}`;
  }

  const handlePaymentSuccess = () => {
    localStorage.removeItem('cart-items');
    dispatch(clearCart());

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
          'container mx-auto flex flex-col p-4 pb-6 tablet:px-6 desktop:w-[1200px]',
          { 'blur pointer-events-none': showModal },
        )}
      >
        <BreadCrumb />
        <div className="mb-8">
          <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl dark:text-primary-dark">
            {t('cart')}
          </h1>
        </div>

        {cartItems.length ? (
          <div className="flex flex-col desktop:flex-row desktop:items-start gap-4">
            <div className="flex flex-col gap-4 w-full">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="box-border flex flex-col mx-auto desktop:mx-0 items-center rounded-lg p-6 w-full border border-elements-light dark:border-elements-dark bg-hover-bg-light dark:bg-hover-bg-dark desktop:w-[368px]">
              <h3 className="select-none text-center text-primary-light dark:text-primary-dark text-[32px] font-extrabold leading-[41px]">
                {`${totalCost}$`}
              </h3>
              <div className="text-center text-secondary-light dark:text-secondary-dark text-sm font-semibold leading-[21px] mb-4">
                {itemCounter}
              </div>
              <span className="w-full h-[0px] border border-elements-light dark:border-elements-dark mb-4"></span>
              <Button onClick={handlePaymentSuccess}>{t('checkout')}</Button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="mb-2">{t('emptyCart')}</h3>
            <NavLink to="/phones" className="cursor-pointer font-bold w-fit">
              {t('startShopping')}
            </NavLink>
          </>
        )}
      </main>
    </>
  );
};

export default CartPage;
