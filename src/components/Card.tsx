/* eslint-disable no-unused-vars */
import classNames from 'classnames';
import { Button } from './Button';
import { ProductProperties } from './ProductProperties';
import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

type Props = {
  product: any;
};

export const Card = (props: Props) => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <section
      className="card box-border rounded-lg p-8 max-w-xs border
    border-secondary bg-white"
    >
      <div className="grid auto-rows-auto gap-y-2 object-cover">
        <img className="mx-auto" src="" alt="phone-image" />
        <h3 className="text-sm font-semibold mt-4">TITLE</h3>
        <div className="flex gap-2">
          <h3 className="text-xl font-extrabold leading-8">899</h3>
          <h3
            className="text-xl font-semibold leading-8 line-through
          text-secondary decoration-from-font"
          >
            1000
          </h3>
        </div>
        <span className="border border-secondary border-t w-full" />
        <ProductProperties properties={[]} />
        <div className="flex justify-between gap-x-[8px]">
          <Button>Add to cart</Button>
          <button
            className={classNames([
              'w-10 h-10',
              'rounded-full border border-icons',
              'hover:border-primary hover:scale-105',
              'flex justify-center items-center shrink-0 duration-300',
            ])}
            onClick={handleClick}
          >
            <FiHeart
              className={classNames({
                'text-secondary-accent': favorite,
              })}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
