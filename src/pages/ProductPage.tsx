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
  const { phoneId } = useParams();
  const { data, isError, isLoading } = useGetProductByIdQuery(phoneId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }

  const handleClick = () => {
    setFavorite(!favorite);
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
            <div className="col-span-4 tablet:col-start-2 desktop:col-start-3 tablet:col-span-6 desktop:col-span-10">
              <img src="" alt="banner" className="w-full object-contain" />
            </div>
            <div className="flex flex-row tablet:row-start-1 tablet:flex-col col-span-4 tablet:col-span-1 desktop:col-span-2 mx-auto gap-2">
              <img src="" alt="banner" />
              <img src="" alt="banner" />
              <img src="" alt="banner" />
              <img src="" alt="banner" />
              <img src="" alt="banner" />
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
              <div className="col-span-4 tablet:col-span-12">
                <p className="text-left text-xs font-semibold text-secondary">
                  Screen
                </p>
                <p className="text-right text-xs font-bold text-primary">
                  6.5” OLED
                </p>
              </div>
              <div className="col-span-4 tablet:col-span-12">
                <p className="text-left text-xs font-semibold text-secondary">
                  Resolution
                </p>
                <p className="text-right text-xs font-bold text-primary">
                  2688x1242
                </p>
              </div>
              <div className="col-span-4 tablet:col-span-12">
                <p className="text-left text-xs font-semibold text-secondary">
                  Processor{' '}
                </p>
                <p className="text-right text-xs font-bold text-primary">
                  Apple A12 Bionic
                </p>
              </div>
              <div className="col-span-4 tablet:col-span-12">
                <p className="text-left text-xs font-semibold text-secondary">
                  RAM
                </p>
                <p className="text-right text-xs font-bold text-primary">
                  3 GB
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col col-span-4 tablet:col-span-12 desktop:col-span-24 desktop:flex-row gap-12">
          <div className="desktop:w-1/2">
            <h2 className="mt-16 font-extrabold text-2xl text-primary">
              About
            </h2>

            <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

            {data && (
              <>
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
              </>
            )}
          </div>

          <div className="desktop:w-1/2">
            <h2 className="mt-16 font-extrabold text-2xl text-primary">
              Tech specs
            </h2>

            <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

            <div className="">
              <div className="">
                <p className="text-left text-secondary font-medium text-sm">
                  Screen
                </p>
                <p className="text-right text-primary font-semibold text-sm">
                  6.5” OLED
                </p>
              </div>
              <div className="">
                <p className="text-left text-secondary font-medium text-sm">
                  Resolution
                </p>
                <p className="text-right text-primary font-semibold text-sm">
                  2688x1242
                </p>
              </div>
              <div className="">
                <p className="text-left text-secondary font-medium text-sm">
                  Processor{' '}
                </p>
                <p className="text-right text-primary font-semibold text-sm">
                  Apple A12 Bionic
                </p>
              </div>
              <div className="">
                <p className="text-left text-secondary font-medium text-sm">
                  RAM
                </p>
                <p className="text-right text-primary font-semibold text-sm">
                  3 GB
                </p>
              </div>
              <div className="">
                <p className="text-left text-secondary font-medium text-sm">
                  Built in memory
                </p>
                <p className="text-right text-primary font-semibold text-sm">
                  64 GB
                </p>
              </div>
              <div className="">
                <p className="text-left text-secondary font-medium text-sm">
                  Camera
                </p>
                <p className="text-right text-primary font-semibold text-sm">
                  12 Mp + 12 Mp + 12 Mp (Triple)
                </p>
              </div>
              <div className="">
                <p className="text-left text-secondary font-medium text-sm">
                  Zoom
                </p>
                <p className="text-right text-primary font-semibold text-sm">
                  Optical, 2x
                </p>
              </div>
              <div className="">
                <p className="text-left text-secondary font-medium text-sm">
                  Cell
                </p>
                <p className="text-right text-primary font-semibold text-sm">
                  GSM, LTE, UMTS
                </p>
              </div>
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
