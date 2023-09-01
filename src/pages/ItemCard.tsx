import { FiHome, FiArrowRight, FiHeart } from 'react-icons/fi';
import ColorSelector from '../components/ColorSelector';
import Line from '../components/Line';
import MemoryButton from '../components/MemoryButton';
import { Button } from '../components/Button';
import { useState } from 'react';

const noop = () => {};

export const ItemCard = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <header></header>
      <main className="container mx-auto grid grid-cols-24 gap-4">
        <div className="flex items-center col-span-24">
          <FiHome />
          <FiArrowRight className="ml-2" />
          <p className="ml-2">Phones</p>
          <FiArrowRight className="ml-2" />
          <p className="ml-2">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</p>
        </div>
        <p className="mt-10 col-start-1 col-span-12">Back</p>
        <h1 className="font-extrabold text-5xl leading-tight mt-4 mb-10 col-span-24 col-start-1">
          Welcome to Nice Gadgets store!
        </h1>
        <div className="grid col-start-1 col-span-2 items-center justify-center">
          <div className="w-20 h-20">
            <img
              src={require('../assets/images/iphone11.png')}
              alt="baner"
              className="w-[66px] h-[66px]"
            />
          </div>
          <div className="w-20 h-20">
            <img
              src={require('../assets/images/iphone11.png')}
              alt="baner"
              className="w-[66px] h-[66px]"
            />
          </div>
          <div className="w-20 h-20">
            <img
              src={require('../assets/images/iphone11.png')}
              alt="baner"
              className="w-[66px] h-[66px]"
            />
          </div>
          <div className="w-20 h-20">
            <img
              src={require('../assets/images/iphone11.png')}
              alt="baner"
              className="w-[66px] h-[66px]"
            />
          </div>
          <div className="w-20 h-20">
            <img
              src={require('../assets/images/iphone11.png')}
              alt="baner"
              className="w-[66px] h-[66px]"
            />
          </div>
        </div>
        <div className="col-start-3 col-span-9">
          <img
            src={require('../assets/images/iphone11.png')}
            alt="baner"
            className="w-[442px] h-[442px]"
          />
        </div>
        <div className="col-start-12 col-span-7">
          <p>Available colors</p>

          <div className="flex space-x-2 mt-2">
            <ColorSelector color="#FCDBC1" onClick={noop} />
            <ColorSelector color="#5F7170" onClick={noop} />
            <ColorSelector color="#4C4C4C" onClick={noop} />
            <ColorSelector color="#F0F0F0" onClick={noop} />
          </div>

          <Line width="col-start-12 col-span-7 w-[320px] mt-6" />

          <div className="mt-6 col-start-12 col-span-7">
            <p>Select capacity</p>

            <MemoryButton label="64 GB" onClick={noop} isActive={true} />
            <MemoryButton label="128 GB" onClick={noop} isActive={false} />
            <MemoryButton label="256 GB" onClick={noop} isActive={false} />
          </div>

          <Line width="col-start-12 col-span-7 w-[320px] mt-6" />

          <div className="flex mt-8">
            <h1 className="mr-2">$799</h1>
            <h3>$1199</h3>
          </div>

          <div className="col-start-12 col-span-7 mt-4 grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <Button md>Add to cart</Button>
            </div>
            <div className="col-start-7 col-span-1">
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
        </div>
      </main>
      <footer></footer>
    </>
  );
};
