/* eslint-disable no-unused-vars */
import { Button } from './Button';
import { ProductProperties } from './ProductProperties';
import { PhoneInfo } from '../App';
import favoritesSVG from '../assets/icons/Favourites (Heart Like).svg';
// eslint-disable-next-line max-len
import favoritesFilledSVG from '../assets/icons/Favourites Filled (Heart Like).svg';
import { useState } from 'react';

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
      className="container box-border rounded-lg p-8 max-w-xs border
    border-grey bg-white"
    >
      <div className="grid auto-rows-auto gap-y-2">
        <img className="h-32 mx-auto" src={phoneImage} alt="phone-image" />
        <h3 className="text-sm font-semibold mt-4">{phoneTitle}</h3>
        <div className="flex gap-2">
          <h3 className="text-xl font-extrabold leading-8">{discountPrice}</h3>
          <h3
            className="text-xl font-semibold leading-8 line-through
          text-grey_secondary decoration-from-font"
          >
            {phonePrice}
          </h3>
        </div>
        <span className="border border-grey border-t w-full" />
        <ProductProperties properties={phoneProperties} />
        <div className="flex justify-between gap-x-[8px]">
          <Button>Add to cart</Button>
          {favorite ? (
            <button
              className="w-10 h-10 rounded-full border border-grey_icons
            hover:border-grey_primary hover:scale-110
            flex justify-center items-center shrink-0 duration-300"
              onClick={handleClick}
            >
              <img
                src={favoritesSVG}
                alt="heart-like-icon"
                className="px-3 py-3"
              />
            </button>
          ) : (
            <button
              className="w-[40px] h-[40px] rounded-full border border-grey_icons
            hover:border-grey_primary hover:scale-110
            flex justify-center items-center shrink-0 duration-300"
              onClick={handleClick}
            >
              <img
                src={favoritesFilledSVG}
                alt="heart-like-icon"
                className="px-3 py-3"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
