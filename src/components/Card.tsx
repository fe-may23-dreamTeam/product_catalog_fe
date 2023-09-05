import classNames from 'classnames';
import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import {
  addItemToCart,
  useAppDispatch,
  toggleFavourite,
  useAppSelector,
} from '../redux';
import { Button } from './Button';
import { ProductProperties } from './ProductProperties';
import { IProduct } from '../types/Product';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

type Props = {
  product: IProduct;
};

export const Card = ({ product }: Props) => {
  const { favouriteItems } = useAppSelector((state) => state.favourites);
  const dispatch = useAppDispatch();
  const [favorite, setFavorite] = useState(false);

  const isFavourite = (id: string) =>
    favouriteItems.some((item) => item._id === id);

  const productProps = [
    {
      name: 'Screen',
      value: product.screen!,
    },
    {
      name: 'Capacity',
      value: product.capacity!,
    },
    {
      name: 'RAM',
      value: product.ram!,
    },
  ];

  const handleToggleFav = (currentProduct: IProduct) => {
    dispatch(toggleFavourite(currentProduct));
    setFavorite(!favorite);
  };

  const handleAddToCart = () => {
    const itemData = {
      id: product._id,
      name: product.name,
      price: product.priceDiscount
        ? product.priceDiscount
        : product.priceRegular,
      image: product.images[0],
      count: 1,
    };

    dispatch(addItemToCart(itemData));
    toast.success('Successfully added to cart!');
  };

  return (
    <article
      className="card box-border hover:shadow-card rounded-lg p-8 min-w-[272px] border max-h-[440px] tablet:max-h-[506px]
    border-secondary bg-white"
    >
      <div className="grid auto-rows-auto gap-y-2 object-cover">
        <NavLink to={product._id}>
          <img
            className="mx-auto max-h-[130px] tablet:max-h-[200px]"
            src={product.images[0]}
            alt={product.namespaceId}
          />
        </NavLink>

        <h3 className="text-sm font-semibold mt-4 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex gap-2">
          <h3 className="text-xl font-extrabold leading-8 before:content-['$']">
            {product.priceDiscount}
          </h3>
          <h3 className="relative text-xl line-through font-semibold leading-8 text-secondary before:content-['$']">
            {product.priceRegular}
          </h3>
        </div>
        <span className="border border-secondary border-t w-full" />
        <ProductProperties properties={productProps} />
        <div className="flex justify-between gap-x-[8px]">
          <Button onClick={handleAddToCart}>Add to cart</Button>
          <button
            className={classNames([
              'w-10 h-10',
              'rounded-full border border-icons',
              'hover:border-primary hover:scale-105',
              'active:scale-95',
              'flex justify-center items-center shrink-0 duration-300',
            ])}
            onClick={() => handleToggleFav(product)}
          >
            {isFavourite(product._id) ? (
              <FaHeart className="text-secondary-accent" />
            ) : (
              <FiHeart />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
