import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HomePage = () => {
  const image = require('../assets/images/mobile-promo.png');

  return (
    <main>
      <h1
        className="my-[24px] mx-[16px] max-w-[288px] font-mont font-extrabold text-[32px] line-clamp-2
    tablet:line-clamp-none tablet:max-w-full tablet:text-[48px] tablet:my-[32px] tablet:mx-[24px]
    desktop:max-w-[1136px] desktop:my-[56px] desktop:mx-[32px]"
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
    </main>
  );
};

export default HomePage;
