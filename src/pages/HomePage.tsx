import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from '../components/CategoryCard';
import { HotPrices } from '../components/HotPrices';
import { NewProducts } from '../components/NewProducts';

const HomePage = () => {
  const image = require('../assets/images/mobile-promo.png');
  const phonesImage = require('../assets/images/phones-category.png');
  const tabletsImage = require('../assets/images/tablets-category.png');
  const accessoriesoneImage = require('../assets/images/accessories-category.png');

  return (
    <main>
      <h1
        className="py-[24px] mx-[16px] max-w-[288px] font-mont font-extrabold text-[32px] line-clamp-2
    tablet:line-clamp-none tablet:max-w-full tablet:text-[48px] tablet:py-[32px] tablet:mx-[24px]
    desktop:max-w-[1136px] desktop:py-[56px] desktop:mx-[32px]"
      >
        Welcome to Nice Gadgets store!
      </h1>
      <div className="w-full tablet:w-4/5 mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={true}
          navigation={true}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="mx-auto h-full tablet:w-5/6">
              <img
                src={image}
                alt="promo-images"
                className="tablet:rounded-lg h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto h-full tablet:w-5/6">
              <img
                src={image}
                alt="promo-images"
                className="tablet:rounded-lg h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto h-full tablet:w-5/6">
              <img
                src={image}
                alt="promo-images"
                className="tablet:rounded-lg h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <NewProducts />

      <section className="mt-[57px] tablet:mt-[64px] desktop:mt-[80px] desktop:max-w-[1136px] desktop:mx-auto">
        <h2 className="font-mont font-extrabold text-[22px] tablet:text-[32px] text-primary mx-[16px] tablet:mx-[24px] desktop:mx-[32px]">
          Shop by category
        </h2>
        <div className="grid grid-cols-4 gap-8 tablet:grid-cols-12 tablet:gap-4 tablet:mx-[24px] desktop:mx-[32px] desktop:grid-cols-24 mx-[16px] mt-[24px]">
          <CategoryCard type={'Phones'} image={phonesImage} />
          <CategoryCard type={'Tablets'} image={tabletsImage} />
          <CategoryCard type={'Accessories'} image={accessoriesoneImage} />
        </div>
      </section>

      <HotPrices />
    </main>
  );
};

export default HomePage;
