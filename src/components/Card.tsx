/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { Button } from './Button';
import { ProductProperties } from './ProductProperties';
import { PhoneInfo } from '../App';
import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

type CardProps = {
  phoneInfo: PhoneInfo;
};

export const Card = (props: CardProps) => {
  const { phoneInfo } = props;
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  const {
    phoneImage,
    phoneTitle,
    phonePrice,
    discountPrice,
    phoneProperties,
    isAddedToCart,
    isFavorite,
  } = phoneInfo;

  return (
    <section
      className="card box-border rounded-lg p-8 max-w-xs border
    border-secondary bg-white"
    >
      <div className="grid auto-rows-auto gap-y-2 object-cover">
        <img className="mx-auto min-h-[230px]" src={phoneImage} alt="phone-image" />
        <h3 className="text-sm font-semibold mt-4">{phoneTitle}</h3>
        <div className="flex gap-2">
          <h3 className="text-xl font-extrabold leading-8">{discountPrice}</h3>
          <h3
            className="text-xl font-semibold leading-8 line-through
          text-secondary decoration-from-font"
          >
            {phonePrice}
          </h3>
        </div>
        <span className="border border-secondary border-t w-full" />
        <ProductProperties properties={phoneProperties} />
        <div className="flex justify-between gap-x-[8px]">
          <Button>Add to cart</Button>
          {favorite ? (
            <button
              className="w-10 h-10 rounded-full border border-icons
            hover:border-primary hover:scale-110
            flex justify-center items-center shrink-0 duration-300"
              onClick={handleClick}
            >
              <FiHeart className="text-secondary-accent" />
            </button>
          ) : (
            <button
              className="w-[40px] h-[40px] rounded-full border border-icons
            hover:border-primary hover:scale-110
            flex justify-center items-center shrink-0 duration-300"
              onClick={handleClick}
            >
              <FiHeart />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
