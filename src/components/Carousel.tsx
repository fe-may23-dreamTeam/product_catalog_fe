import React from 'react';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Card } from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IProduct } from '../types/Product';

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
  products: IProduct[];
  title: string;
};

export const Carousel: React.FC<Props> = ({ products, title }) => {
  return (
    <div className="Carousel relative mx-auto desktop:max-w-[1152px] pt-16 mt-[150px]">
      <h2 className="absolute left-0 top-0">{title}</h2>
      <Slider {...settings} className="space-x-4">
        {products.map((product) => (
          <div className="w-[276px]">
            <Card product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
