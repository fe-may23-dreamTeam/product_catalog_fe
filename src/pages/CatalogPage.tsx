import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import { Card } from '../components/Card';
import { Dropdown } from '../components/Dropdown';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import Pagination from '../components/Pagination';
import { useGetProductsQuery } from '../redux/api/productApi';
import { CatalogTitle } from '../types/PageTitle';
import { IProduct } from '../types/Product';
import { useTranslation } from 'react-i18next';

const perPageOptions = [
  {
    value: '8',
    label: '8',
  },
  {
    value: '16',
    label: '16',
  },
  {
    value: '24',
    label: '24',
  },
];

const CatalogPage: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const perPage = Number(searchParams.get('perPage')) || 8;
  const sortBy = searchParams.get('sortBy') || 'Newest';
  const {
    data: products,
    isError,
    isFetching,
    isLoading,
  } = useGetProductsQuery({
    perPage,
    page: currentPage,
    sortBy,
    type: pathname.slice(1),
  });

  const title: CatalogTitle = {
    '/phones': t('mobilePhones'),
    '/tablets': t('tablets'),
    '/accessories': t('accessories'),
  };

  const sortOptions = [
    {
      value: `${t('newest')}`,
      label: `${t('newest')}`,
    },
    {
      value: `${t('oldest')}`,
      label: `${t('oldest')}`,
    },
  ];

  const total = products ? products.totalProducts : 0;

  const modelCounter =
    total === 1 ? `${total} ${t('models')}` : `${total} ${t('models')}`;

  const handlePageNumber = (pageNo: number) => {
    searchParams.set('page', pageNo.toString());
  };

  return (
    <main className="relative container mx-auto flex flex-col items-center tablet:items-start p-4 tablet:px-6 desktop:w-[1200px]">
      <ErrorMessage isError={isError}>
        <Loader isLoading={isLoading}>
          <BreadCrumb />

          <header>
            <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl dark:text-primary-dark">
              {t(title[pathname as keyof CatalogTitle])}
            </h1>

            <p className="text-sm font-semibold leading-[21px] text-secondary-light dark:text-secondary-dark mb-8">
              {modelCounter}
            </p>
          </header>
          {products?.data.length > 0 && (
            <div className="flex gap-4 mb-6">
              <Dropdown
                className="w-[136px] tablet:w-[187px] dark:bg-white-dark dark:text-secondary-dark dark:border-none"
                label={t('sortBy')}
                query="sortBy"
                options={sortOptions}
              />

              <Dropdown
                query="perPage"
                className="w-[136px] dark:bg-white-dark dark:text-secondary-dark dark:border-none"
                label={t('itemsOnPage')}
                options={perPageOptions}
              />
            </div>
          )}

          <div className="mb-10 relative grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
            {products?.data.length > 0 ? (
              products?.data.map((product: IProduct) => (
                <Card
                  isFetching={isFetching}
                  product={product}
                  key={product._id}
                />
              ))
            ) : (
              <p className="col-span-4 tablet:col-span-12 desktop:col-span-24 dark:text-primary-dark">
                {t('runOutOfProducts')}
              </p>
            )}
          </div>
          {products?.totalProducts > perPage && (
            <Pagination
              className="mb-20"
              total={total}
              perPage={perPage}
              currentPage={currentPage}
              onPageChange={(pageNo) => handlePageNumber(+pageNo)}
            />
          )}
        </Loader>
      </ErrorMessage>
    </main>
  );
};

export default CatalogPage;
