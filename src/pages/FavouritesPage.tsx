import { useTranslation } from 'react-i18next';
import BreadCrumb from '../components/BreadCrumb';
import { Card } from '../components/Card';
import { useAppSelector } from '../redux';

const FavouritesPage = () => {
  const { favouriteItems } = useAppSelector((state) => state.favourites);
  const { t } = useTranslation();

  return (
    <main className="container mx-auto flex flex-col items-center tablet:items-start p-4 pb-6 tablet:px-6 desktop:w-[1200px]">
      <BreadCrumb />

      <header>
        <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl dark:text-primary-dark">
          {t('favourites')}
        </h1>
      </header>
      {favouriteItems.length ? (
        <>
          <p className="text-sm mb-8 tablet:mb-9 font-semibold leading-[21px] text-secondary dark:text-secondary-dark">
            {`${favouriteItems.length} ${t('items')}`}
          </p>
          <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
            {favouriteItems.map((pr) => (
              <Card product={pr} key={pr._id} />
            ))}
          </div>
        </>
      ) : (
        <h3>{t('noFavourites')}</h3>
      )}
    </main>
  );
};

export default FavouritesPage;
