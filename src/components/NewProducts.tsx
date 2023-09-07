import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useGetNewProductsQuery } from '../redux/api/productApi';
import { IProduct } from '../types/Product';
import { Card } from './Card';
import { ErrorMessage } from './ErrorMessage';

export const NewProducts = () => {
  const { data: products, isError, isFetching } = useGetNewProductsQuery('');

  const newProducts = products || [];

  return (
    <div className="desktop:container mx-2 grid grid-cols-4 desktop:grid-cols-24 tablet:grid-cols-12 desktop:mx-auto gap-4">
      <section className="col-span-4 tablet:col-span-12 desktop:col-span-24 mt-16">
        <div className="flex justify-between">
          <h2 className="font-extrabold text-2xl desktop:text-4xl text-primary">
            Brand new models
          </h2>
          <div className="flex">
            <div className="text-right mr-4 w-8 h-8 rounded-full border border-icons relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <FiChevronLeft />
              </div>
            </div>
            <div className="text-right w-8 h-8 rounded-full border border-icons relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <FiChevronRight />
              </div>
            </div>
          </div>
        </div>

        <article className="mt-8 mb-20 flex space-x-4 overflow-hidden">
          <ErrorMessage isError={isError}>
            {newProducts.map((product: IProduct) => (
              <Card
                isFetching={isFetching}
                product={product}
                key={product._id}
              />
            ))}
          </ErrorMessage>
        </article>
      </section>
    </div>
  );
};
