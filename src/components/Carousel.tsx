import React from 'react';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Card } from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IProduct } from '../types/Product';
import { useParams } from 'react-router-dom';
import { useGetProductByTypeQuery } from '../redux/api/productApi';
import { ErrorMessage } from './ErrorMessage';
import { Loader } from './Loader';

const settings = {
  className: 'mx-auto overflow-hidden !static',
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: true,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  swipeToSlide: false,
};

function SampleNextArrow(props: any) {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-0 cursor-pointer border rounded-full border-icons border-solid hover:border-primary active:text-primary focus:text-primary h-8 w-8 flex items-center justify-center"
    >
      <FiChevronRight className="w-4 h-4" />
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-12 cursor-pointer border rounded-full border-icons border-solid hover:border-primary active:text-primary focus:text-primary h-8 w-8 flex items-center justify-center"
    >
      <FiChevronLeft className="w-4 h-4" />
    </button>
  );
}

type Props = {
  title: string,
  type: 'discount' | 'new' | 'recommended',
};

export const Carousel: React.FC<Props> = ({ title, type }) => {
  const { productId } = useParams();
  const {
    data: products,
    isError,
    isFetching,
  } = useGetProductByTypeQuery({ type, productId });

  return (
    <div className="Carousel relative mx-auto desktop:max-w-[1152px] pt-16 mt-[150px] desktop:pb-20 tablet:pb-16">
      <ErrorMessage isError={isError}>
        <Loader isLoading={isFetching}>
          <h2 className="font-extrabold text-2xl desktop:text-4xl text-primary absolute left-0 top-0">
            {title}
          </h2>
          <Slider {...settings} className="space-x-4">
            {products &&
              products.map((product: IProduct) => (
                <div key={product._id} className="max-w-[272px]">
                  <Card
                    isFetching={isFetching}
                    product={product}
                    key={product._id}
                  />
                </div>
              ))}
          </Slider>
        </Loader>
      </ErrorMessage>
    </div>
  );
};
