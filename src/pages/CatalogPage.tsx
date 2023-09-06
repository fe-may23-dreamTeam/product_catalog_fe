import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Dropdown } from '../components/Dropdown';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import Pagination from '../components/Pagination';
import { useGetProductsQuery } from '../redux/api/productApi';
import { IProduct } from '../types/Product';
import { Card } from '../components/Card';
import BreadCrumb from '../components/BreadCrumb';

const sortOptions = [
  {
    value: 'Newest',
    label: 'Newest',
  },
  {
    value: 'Oldest',
    label: 'Oldest',
  },
];

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
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const perPage = Number(searchParams.get('perPage')) || 8;
  const sortBy = searchParams.get('sortBy') || 'Newest';

  const {
    data: products,
    isLoading,
    isError,
    isFetching,
  } = useGetProductsQuery({
    perPage,
    page: currentPage,
    sortBy,
  });

  const total = products ? products.totalProducts : 0;

  const handlePageNumber = (pageNo: number) => {
    searchParams.set('page', pageNo.toString());
  };

  return (
    <main className="relative container mx-auto flex flex-col items-center tablet:items-start px-4 tablet:px-6 desktop:w-[1200px]">
      <ErrorMessage isError={isError}>
        <Loader isLoading={isLoading}>
          <BreadCrumb />

          <header>
            <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
              Mobile phones
            </h1>

            <p className="text-sm font-semibold leading-[21px] text-secondary mb-8">
              {total} models
            </p>
          </header>
          <div className="flex gap-4 mb-6">
            <Dropdown
              className="w-[136px] tablet:w-[187px]"
              label="Sort By"
              query="sortBy"
              options={sortOptions}
            />

            <Dropdown
              query="perPage"
              className="w-[136px]"
              label="Items on page"
              options={perPageOptions}
            />
          </div>

          <div className="mb-10 relative grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
            {products?.data.map((product: IProduct) => (
              <Card
                isFetching={isFetching}
                product={product}
                key={product._id}
              />
            ))}
          </div>
          <Pagination
            className="mb-20"
            total={total}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={(pageNo) => handlePageNumber(+pageNo)}
          />
        </Loader>
      </ErrorMessage>
    </main>
  );
};

export default CatalogPage;
