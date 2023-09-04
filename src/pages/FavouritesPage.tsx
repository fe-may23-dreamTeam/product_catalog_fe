import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import axios from 'axios';
import { IProduct } from '../types/Product';

export const FavouritesPage: React.FC = () => {
  // #region rewrite to Redux
  const [products, setProducts] = useState<IProduct[]>([]);
  // #endregion

  // #region rewrite to RTQ Query
  useEffect(() => {
    axios
      .get('https://dreamteam.onrender.com/products', {
        params: { page: 1, perPage: 8 },
      })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);
  // #endregion

  return (
    <main className="container mx-auto flex flex-col items-center tablet:items-start px-4 pt-6 tablet:px-6 desktop:w-[1200px]">
      <header>
        <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
          FavouritesPage
        </h1>
        <p className="text-sm mb-8 tablet:mb-9 font-semibold leading-[21px] text-secondary">
          5 items
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        {products.map((pr) => (
          <Card product={pr} key={pr._id} />
        ))}
      </div>
    </main>
  );
};
