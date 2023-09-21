import classNames from 'classnames';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaHeart } from 'react-icons/fa';
import { FiChevronLeft, FiHeart } from 'react-icons/fi';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import { Button } from '../components/Button';
import { Carousel } from '../components/Carousel';
import ColorSelector from '../components/ColorSelector';
import { ErrorMessage } from '../components/ErrorMessage';
import Line from '../components/Line';
import { Loader } from '../components/Loader';
import MemoryButton from '../components/MemoryButton';
import {
  addItemToCart,
  toggleFavourite,
  useAppDispatch,
  useAppSelector,
} from '../redux';
import { useGetProductByIdQuery } from '../redux/api/productApi';
import { IDescription } from '../types/Description';

const ProductPage = () => {
  const { productId } = useParams();
  const { pathname } = useLocation();
  const [favorite, setFavorite] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { favouriteItems } = useAppSelector((state) => state.favourites);
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { data, isError, isLoading, isFetching } = useGetProductByIdQuery(
    productId!,
  );
  const { t } = useTranslation();

  const route = pathname.split('/')[1];
  const isFavourite = favouriteItems.some((item) => item._id === data?._id);
  const isAddedToCart = items.some((item) => item.id === productId);
  const characteristicsData = {
    Screen: data?.screen,
    Resolution: data?.resolution,
    Processor: data?.processor,
    RAM: data?.ram,
    'Built in memory': data?.capacity,
    Camera: data?.camera,
    Zoom: data?.zoom,
    Cell: data?.cell?.join(', '),
  };
  const itemData = {
    id: data?._id,
    name: data?.name,
    price: data?.priceDiscount ? data?.priceDiscount : data?.priceRegular,
    image: data?.images[0],
    count: 1,
  };
  const links = [
    {
      label: route[0].toUpperCase() + route.slice(1),
      url: `/${route}`,
    },
    {
      label: data?.name!,
      url: `/phones/${data?._id!}`,
    },
  ];

  const handleChangeImage = (index: number) => {
    setCurrentImage(index);
  };

  const handleToggleFav = () => {
    dispatch(toggleFavourite(data));
    setFavorite(!favorite);
  };

  const handleAddToCart = () => {
    if (items.some(({ id }) => id === data?._id)) {
      toast.error(t('toTheCartError'));

      return;
    }

    dispatch(addItemToCart(itemData));
    toast.success(t('toTheCart'));
  };

  return (
    <>
      <main
        className={classNames(
          'desktop:container mx-2 grid grid-cols-4 desktop:grid-cols-24 tablet:grid-cols-12 desktop:mx-auto gap-4 relative',
          {
            'opacity-75 pointer-events-none': isFetching,
          },
        )}
      >
        <ErrorMessage isError={isError}>
          <Loader isLoading={isLoading}>
            <BreadCrumb links={links} />
            <NavLink
              to=".."
              className="mt-6 col-span-4 tablet:col-span-12 desktop:col-start-1 desktop:col-span-12 text-xs"
            >
              <span>
                <FiChevronLeft className="inline mr-1" />
                {t('back')}
              </span>
            </NavLink>
            <h1 className="font-extrabold text-4xl text-primary-light dark:text-primary-dark leading-tight mb-6 col-span-4 tablet:col-span-12 desktop:col-span-24 col-start-1">
              {data?.name}
            </h1>
            <section className="col-span-4 gap-12 tablet:col-span-12 desktop:col-span-24 grid grid-cols-4 desktop:grid-cols-24 tablet:grid-cols-12 ">
              <div className="grid grid-cols-4 tablet:grid-cols-7 desktop:grid-cols-12 col-span-4 tablet:col-span-7 desktop:col-span-12 gap-4">
                <div className="col-span-4 tablet:col-start-2 desktop:col-start-3 tablet:col-span-6 desktop:col-span-10 max-h-[288px] tablet:max-h-[360px] desktop:max-h-[464px]">
                  <img
                    src={data?.images[currentImage]}
                    alt="banner"
                    className="mx-auto h-full object-contain"
                  />
                </div>
                <div className="flex flex-row tablet:row-start-1 tablet:flex-col col-span-4 tablet:col-span-1 desktop:col-span-2 mx-auto gap-2 max-h-[50px] tablet:max-h-[35px] desktop:max-h-20 rounded">
                  {data?.images.map((image, index) => (
                    <div
                      key={index}
                      className={`h-full object-contain border-[2px] rounded ${
                        index === currentImage
                          ? 'border-primary-light dark:border-primary-dark'
                          : 'border-secondary'
                      } cursor-pointer`}
                      onClick={() => handleChangeImage(index)}
                    >
                      <img
                        src={image}
                        alt={`Image ${index}`}
                        className="h-full w-full object-center object-contain p-1 tablet:p-[3px] desktop:p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-4 tablet:col-span-5 desktop:col-span-12">
                <p className="text-xs text-secondary-light dark:text-secondary-dark">
                  {t('availableColors')}
                </p>

                <div className="flex space-x-2 mt-2">
                  {data?.colorsAvailable.map((color) => (
                    <ColorSelector
                      key={color}
                      color={color}
                      isActive={data.color === color}
                    />
                  ))}
                </div>

                <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-auto mt-6" />

                <div className="mt-6 col-span-4 tablet:col-start-7 tablet:col-span-5 desktop:col-start-12 desktop:col-span-7">
                  <p className="text-xs text-secondary-light dark:text-secondary-dark mb-2">
                    {t('selectCapacity')}
                  </p>

                  {data?.capacityAvailable &&
                    data?.capacityAvailable.map((capacity) => (
                      <MemoryButton
                        key={capacity}
                        capacity={capacity}
                        isActive={data.capacity === capacity}
                      />
                    ))}
                </div>

                <div className="flex mt-8">
                  <h2 className="mr-2 before:content-['$'] font-extrabold text-4xl text-primary-light dark:text-primary-dark">
                    {data?.priceDiscount}
                  </h2>
                  <h3 className="text-2xl before:content-['$'] text-secondary-light dark:text-secondary-dark font-medium ml-2 flex items-center line-through mr-2">
                    {data?.priceRegular}
                  </h3>
                </div>

                <div className="flex gap-2 desktop:w-[55%] mt-4">
                  <Button
                    md
                    onClick={handleAddToCart}
                    outline={!!isAddedToCart}
                  >
                    {isAddedToCart ? t('addedToCart') : t('addToCart')}
                  </Button>
                  <div>
                    <button
                      className="w-12 h-12 rounded-full border border-icons
                      hover:border-primary-light dark:hover:border-primary-dark hover:scale-110
                      flex justify-center items-center shrink-0 duration-300"
                      onClick={handleToggleFav}
                    >
                      {isFavourite ? (
                        <FaHeart className="text-secondary-accent-light dark:text-secondary-accent-dark" />
                      ) : (
                        <FiHeart />
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid-cols-4 col-span-4 tablet:col-span-12 tablet:grid-cols-12 desktop:col-start-13 desktop:col-span-7 mt-8 grid desktop:grid-cols-2 gap-2">
                  {Object.entries(characteristicsData)
                    .slice(0, 4)
                    .map(([characteristic, value]) => (
                      <div
                        key={characteristic}
                        className="col-span-4 tablet:col-span-12"
                      >
                        <p className="text-left text-xs font-semibold text-primary-light dark:text-secondary-dark">
                          {characteristic}
                        </p>
                        <p className="text-right text-xs font-bold text-primary-light dark:text-primary-dark">
                          {value}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            <section className="flex flex-col col-span-4 tablet:col-span-12 desktop:col-span-24 desktop:flex-row gap-12">
              {data && (
                <>
                  <div className="desktop:w-1/2">
                    <h2 className="mt-16 font-extrabold text-2xl text-primary-light dark:text-primary-dark">
                      {t('about')}
                    </h2>
                    <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

                    {data.description.map((descItem: IDescription) => (
                      <div key={descItem._id}>
                        <h3 className="mt-8 font-bold text-primary-light dark:text-primary-dark text-xl">
                          {t(descItem.title)}
                        </h3>
                        <p className="mt-4 text-secondary-light dark:text-secondary-dark font-medium text-sm">
                          {descItem.text.map((textItem) => (
                            <span key={textItem}>{textItem}</span>
                          ))}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="desktop:w-1/2">
                <h2 className="mt-16 font-extrabold text-2xl text-primary-light dark:text-primary-dark">
                  {t('techSpecs')}
                </h2>

                <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

                <div className="mt-[30px] tablet:mt-[25px] desktop:mt-[25px]">
                  {Object.entries(characteristicsData).map(
                    ([characteristic, value]) => (
                      <div
                        key={characteristic}
                        className="flex justify-between mt-2"
                      >
                        <p className="text-left text-secondary-light dark:text-secondary-dark font-medium text-sm">
                          {characteristic}
                        </p>
                        <p className="text-right text-primary-light dark:text-primary-dark font-semibold text-sm">
                          {value}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </section>
            <section className="col-span-4 tablet:col-span-12 desktop:col-span-24">
              <Carousel title={t('recomended')} type={'recommended'} />
            </section>
          </Loader>
        </ErrorMessage>
      </main>
    </>
  );
};

export default ProductPage;
