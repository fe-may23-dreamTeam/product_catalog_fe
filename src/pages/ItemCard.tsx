import { FiHome, FiArrowRight, FiHeart, FiArrowLeft } from 'react-icons/fi';
import ColorSelector from '../components/ColorSelector';
import Line from '../components/Line';
import MemoryButton from '../components/MemoryButton';
import { Button } from '../components/Button';
import { useState } from 'react';
import { Card } from '../components/Card';

const noop = () => {};

export const ItemCard = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <main className="container mx-2 grid grid-cols-4 desktop:grid-cols-24 tablet:grid:cols-12 tablet:mx-6 desktop:mx-auto gap-4">
        <div className="flex items-center col-span-4 tablet:col-span-12 desktop:col-span-24 mt-[25px]">
          <FiHome />
          <FiArrowRight className="ml-2" />
          <p className="ml-2 text-xs">Phones</p>
          <FiArrowRight className="ml-2" />
          <p className="ml-2 text-xs">
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </p>
        </div>
        <p className="mt-6 col-span-4 tablet:col-span-12 desktop:col-start-1 desktop:col-span-12 text-xs">
          Back
        </p>
        <h1 className="font-extrabold text-4xl text-primary leading-tight mb-6 col-span-4 tablet:col-span-12 desktop:col-span-24 col-start-1">
          Welcome to Nice Gadgets store!
        </h1>
        <div className="grid">
          <div className="mt-4 space-x-2 col-span-4 desktop:col-start-3 desktop:col-span-9">
            <div className="flex-col flex desktop:flex-row desktop:h-[442px] desktop:w-[442px] w-[228px] h-[228px]">
              <img
                src={require('../assets/images/iphone11.png')}
                alt="banner"
                className="desktop:h-[442px] h-[228px] desktop:w-[442px] w-[228px]"
              />
            </div>
          </div>
          <div className="mt-4 space-x-2 col-span-4 desktop:col-start-1 desktop:col-span-2">
            <div className="flex-row flex desktop:flex-col">
              <div className="w-12 h-12 desktop:w-20 desktop:h-20 flex items-center justify-center">
                <img
                  src={require('../assets/images/iphone11.png')}
                  alt="banner"
                  className="w-12 h-12 desktop:w-20 desktop:h-20"
                />
              </div>
              <div className="w-12 h-12 desktop:w-20 desktop:h-20 flex items-center justify-center">
                <img
                  src={require('../assets/images/iphone11.png')}
                  alt="banner"
                  className="w-12 h-12 desktop:w-20 desktop:h-20"
                />
              </div>
              <div className="w-12 h-12 desktop:w-20 desktop:h-20 flex items-center justify-center">
                <img
                  src={require('../assets/images/iphone11.png')}
                  alt="banner"
                  className="w-12 h-12 desktop:w-20 desktop:h-20"
                />
              </div>
              <div className="w-12 h-12 desktop:w-20 desktop:h-20 flex items-center justify-center">
                <img
                  src={require('../assets/images/iphone11.png')}
                  alt="banner"
                  className="w-12 h-12 desktop:w-20 desktop:h-20"
                />
              </div>
              <div className="w-12 h-12 desktop:w-20 desktop:h-20 flex items-center justify-center">
                <img
                  src={require('../assets/images/iphone11.png')}
                  alt="banner"
                  className="w-12 h-12 desktop:w-20 desktop:h-20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 tablet:col-start-7 tablet:col-span-5 desktop:col-start-13 desktop:col-span-7">
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
            <h1 className="mr-2 font-extrabold text-4xl text-primary">$799</h1>
            <h3 className="text-2xl text-secondary font-medium ml-2 flex items-center">
              <span className="line-through mr-2">$1199</span>
            </h3>
          </div>

          <div className="grid-cols-4 col-span-4 tablet:grid-cols-12 tablet:col-span-12 desktop:col-start-12 desktop:col-span-7 mt-4 grid desktop:grid-cols-6 gap-4">
            <div className="col-span-3 tablet:col-start-7 tablet:col-span-4 desktop:col-start-1 desktop:col-span-6">
              <Button md>Add to cart</Button>
            </div>
            <div className="col-start-4 col-span-1 tablet:col-start-11 tablet:col-span-1 desktop:col-start-7 desktop:col-span-1">
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
              <p className="text-right text-xs font-bold text-primary">3 GB</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 tablet:col-span-12 desktop:col-start-1 desktop:col-span-11">
          <h2 className="mt-16 font-extrabold text-2xl text-primary">About</h2>

          <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

          <h3 className="mt-8 font-bold text-primary text-xl">
            And then there was Pro
          </h3>
          <p className="mt-4 text-secondary font-medium text-sm">
            A transformative triple‑camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And a
            mind‑blowing chip that doubles down on machine learning and pushes
            the boundaries of what a smartphone can do. Welcome to the first
            iPhone powerful enough to be called Pro.
          </p>

          <h3 className="mt-8 font-bold text-primary text-xl">Camera</h3>
          <p className="mt-4 text-secondary font-medium text-sm">
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest‑quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>

          <h3 className="mt-8 font-bold text-primary text-xl">
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h3>
          <p className="mt-4 text-secondary font-medium text-sm">
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </p>
        </div>

        <div className="col-span-4 tablet:col-span-12 desktop:col-start-13 desktop:col-span-12">
          <h2 className="mt-16 font-extrabold text-2xl text-primary">
            Tech specs
          </h2>

          <Line width="col-span-4 w-auto tablet:col-start-7 tablet:col-span-5 tablet:w-auto desktop:col-start-12 desktop:col-span-7 desktop:w-[320px] mt-6" />

          <div className="grid-cols-4 col-span-4 tablet:grid-cols-12 tablet:col-span-12 desktop:col-start-13 desktop:col-span-7 mt-[25px] grid desktop:grid-cols-2 gap-2">
            <div className="col-span-4 tablet:col-span-12">
              <p className="text-left text-secondary font-medium text-sm">
                Screen
              </p>
              <p className="text-right text-primary font-semibold text-sm">
                6.5” OLED
              </p>
            </div>
            <div className="col-span-4 tablet:col-span-12">
              <p className="text-left text-secondary font-medium text-sm">
                Resolution
              </p>
              <p className="text-right text-primary font-semibold text-sm">
                2688x1242
              </p>
            </div>
            <div className="col-span-4 tablet:col-span-12">
              <p className="text-left text-secondary font-medium text-sm">
                Processor{' '}
              </p>
              <p className="text-right text-primary font-semibold text-sm">
                Apple A12 Bionic
              </p>
            </div>
            <div className="col-span-4 tablet:col-span-12">
              <p className="text-left text-secondary font-medium text-sm">
                RAM
              </p>
              <p className="text-right text-primary font-semibold text-sm">
                3 GB
              </p>
            </div>
            <div className="col-span-4 tablet:col-span-12">
              <p className="text-left text-secondary font-medium text-sm">
                Built in memory
              </p>
              <p className="text-right text-primary font-semibold text-sm">
                64 GB
              </p>
            </div>
            <div className="col-span-4 tablet:col-span-12">
              <p className="text-left text-secondary font-medium text-sm">
                Camera
              </p>
              <p className="text-right text-primary font-semibold text-sm">
                12 Mp + 12 Mp + 12 Mp (Triple)
              </p>
            </div>
            <div className="col-span-4 tablet:col-span-12">
              <p className="text-left text-secondary font-medium text-sm">
                Zoom
              </p>
              <p className="text-right text-primary font-semibold text-sm">
                Optical, 2x
              </p>
            </div>
            <div className="col-span-4 tablet:col-span-12">
              <p className="text-left text-secondary font-medium text-sm">
                Cell
              </p>
              <p className="text-right text-primary font-semibold text-sm">
                GSM, LTE, UMTS
              </p>
            </div>
          </div>
        </div>

        <h1 className="col-span-3 tablet:col-span-10 desktop:col-start-1 desktop:col-span-11 mt-16 font-extrabold text-2xl desktop:text-4xl text-primary">
          You may also like
        </h1>
        <div className="col-start-4 tablet:col-start-11 desktop:col-start-12 desktop:col-span-full flex justify-end mt-16">
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

        <div className="col-span-4 tablet:col-span-12 desktop:col-span-24 mt-2 mb-20 flex space-x-4 overflow-hidden">
          <Card product={noop} />
          <Card product={noop} />
          <Card product={noop} />
          <Card product={noop} />
        </div>
      </main>
    </>
  );
};
