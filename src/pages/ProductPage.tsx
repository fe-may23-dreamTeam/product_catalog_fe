import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiHeart } from 'react-icons/fi';
import { NavLink, useParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import { Button } from '../components/Button';
import ColorSelector from '../components/ColorSelector';
import Line from '../components/Line';
import MemoryButton from '../components/MemoryButton';
import { useGetProductByIdQuery } from '../redux/api/productApi';
import { IDescription } from '../types/Description';

const noop = () => {};

export const ProductPage = () => {
  const [favorite, setFavorite] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { phoneId } = useParams();
  const { data, isError, isLoading } = useGetProductByIdQuery(phoneId!);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }

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

  const handleClick = () => {
    setFavorite(!favorite);
  };

  const handleChangeImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <>
      <main className="desktop:container mx-2 grid grid-cols-4 desktop:grid-cols-24 tablet:grid-cols-12 desktop:mx-auto gap-4">
        <BreadCrumb />
        <NavLink
          to=".."
          className="mt-6 col-span-4 tablet:col-span-12 desktop:col-start-1 desktop:col-span-12 text-xs"
        >
          Back
        </NavLink>
        <h1 className="font-extrabold text-4xl text-primary leading-tight mb-6 col-span-4 tablet:col-span-12 desktop:col-span-24 col-start-1">
          Welcome to Nice Gadgets store!
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
                      ? 'border-primary'
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
            <p className="text-xs text-secondary">Available colors</p>

            <div className="flex space-x-2 mt-2">
              <ColorSelector color="#FCDBC1" onClick={noop} />
              <ColorSelector color="#5F7170" onClick={noop} />
              <ColorSelector color="#4C4C4C" onClick={noop} />
              <ColorSelector color="#F0F0F0" onClick={noop} />
            </div>

            <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

            <div className="mt-6 col-span-4 tablet:col-start-7 tablet:col-span-5 desktop:col-start-12 desktop:col-span-7">
              <p className="text-xs text-secondary">Select capacity</p>

              <MemoryButton label="64 GB" onClick={noop} isActive={true} />
              <MemoryButton label="128 GB" onClick={noop} isActive={false} />
              <MemoryButton label="256 GB" onClick={noop} isActive={false} />
            </div>

            <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

            <div className="flex mt-8">
              <h1 className="mr-2 font-extrabold text-4xl text-primary">
                $799
              </h1>
              <h3 className="text-2xl text-secondary font-medium ml-2 flex items-center">
                <span className="line-through mr-2">$1199</span>
              </h3>
            </div>

            <div className="flex gap-2 desktop:w-[55%] mt-4">
              <Button md>Add to cart</Button>
              <div>
                {favorite ? (
                  <button
                    className="w-12 h-12 rounded-full border border-icons
                    hover:border-primary hover:scale-110
                    flex justify-center items-center shrink-0 duration-300"
                    onClick={handleClick}
                  >
                    <FiHeart className="text-secondary-accent" />
                  </button>
                ) : (
                  <button
                    className="w-12 h-12 rounded-full border border-icons
                    hover:border-primary hover:scale-110
                    flex justify-center items-center shrink-0 duration-300"
                    onClick={handleClick}
                  >
                    <FiHeart />
                  </button>
                )}
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
                    <p className="text-left text-xs font-semibold text-secondary">
                      {characteristic}
                    </p>
                    <p className="text-right text-xs font-bold text-primary">
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
                <h2 className="mt-16 font-extrabold text-2xl text-primary">
                  About
                </h2>
                <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

                {data.description.map((descItem: IDescription) => (
                  <div key={descItem._id}>
                    <h3 className="mt-8 font-bold text-primary text-xl">
                      {descItem.title}
                    </h3>
                    <p className="mt-4 text-secondary font-medium text-sm">
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
            <h2 className="mt-16 font-extrabold text-2xl text-primary">
              Tech specs
            </h2>

            <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

            <div className="mt-[30px] tablet:mt-[25px] desktop:mt-[25px]">
              {Object.entries(characteristicsData).map(
                ([characteristic, value]) => (
                  <div
                    key={characteristic}
                    className="flex justify-between mt-2"
                  >
                    <p className="text-left text-secondary font-medium text-sm">
                      {characteristic}
                    </p>
                    <p className="text-right text-primary font-semibold text-sm">
                      {value}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="col-span-4 tablet:col-span-12 desktop:col-span-24 mt-16 ">
          <div className="flex justify-between">
            <h2 className="font-extrabold text-2xl desktop:text-4xl text-primary">
              You may also like
            </h2>
            <div className="flex">
              <div className="text-right mr-4 w-8 h-8 rounded-full border border-icons relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <FiArrowLeft />
                </div>
              </div>
              <div className="text-right w-8 h-8 rounded-full border border-icons relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>

          <article className="mt-8 mb-20 flex space-x-4 overflow-hidden"></article>
        </section>
      </main>
    </>
  );
};
