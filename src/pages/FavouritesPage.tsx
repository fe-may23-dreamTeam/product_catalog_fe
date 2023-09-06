import React from 'react';
import { Card } from '../components/Card';
import { useAppSelector } from '../redux';
import BreadCrumb from '../components/BreadCrumb';

export const FavouritesPage: React.FC = () => {
  const { favouriteItems } = useAppSelector((state) => state.favourites);

  return (
    <main className="container mx-auto flex flex-col items-center tablet:items-start px-4 pb-6 tablet:px-6 desktop:w-[1200px]">
      <BreadCrumb />

      <header>
        <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
          Favourites
        </h1>
      </header>
      {favouriteItems.length ? (
        <>
          <p className="text-sm mb-8 tablet:mb-9 font-semibold leading-[21px] text-secondary">
            {`${favouriteItems.length} items`}
          </p>
          <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
            {favouriteItems.map((pr) => (
              <Card product={pr} key={pr._id} />
            ))}
          </div>
        </>
      ) : (
        <h3>You don't have favourite products</h3>
      )}
    </main>
  );
};
