import React from 'react';
import { Dropdown } from '../components/Dropdown';
import { Card } from '../components/Card';

const modelsAmount = '95';

const sortOptions = [
  {
    value: 'Newest',
    label: 'Newest',
  },
  {
    value: 'Oldest',
    label: 'Oldest',
  },
];

const itemOnPageOptions = [
  {
    value: '8',
    label: '8',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '16',
    label: '16',
  },
];

const PhonePage: React.FC = () => {
  return (
    <main className="container mx-auto flex flex-col items-center tablet:items-start px-4 pt-6 tablet:px-6 desktop:w-[1200px]">
      <header>
        <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
          Mobile phones
        </h1>
        <div className="text-sm font-semibold leading-[21px] text-secondary mb-8">
          {`${modelsAmount} models`}
        </div>
        <div className="flex gap-4 mb-6">
          <Dropdown
            className="w-[136px] tablet:w-[187px]"
            label="Sort By"
            options={sortOptions}
          />

          <Dropdown
            className="w-[136px]"
            label="Items on page"
            options={itemOnPageOptions}
          />
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        <Card
          phoneInfo={{
            phoneImage: require('../assets/images/iphone11.png'),
            phoneTitle: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
            phonePrice: '$899',
            discountPrice: '$859',
            phoneProperties: [
              { name: 'Screen', value: '6.1” OLED' },
              { name: 'Capacity', value: '128 GB' },
              { name: 'RAM', value: '6 GB' },
            ],
            isAddedToCart: false,
            isFavorite: false,
          }}
        />
        <Card
          phoneInfo={{
            phoneImage: require('../assets/images/iphone11.png'),
            phoneTitle: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
            phonePrice: '$899',
            discountPrice: '$859',
            phoneProperties: [
              { name: 'Screen', value: '6.1” OLED' },
              { name: 'Capacity', value: '128 GB' },
              { name: 'RAM', value: '6 GB' },
            ],
            isAddedToCart: false,
            isFavorite: false,
          }}
        />
        <Card
          phoneInfo={{
            phoneImage: require('../assets/images/iphone11.png'),
            phoneTitle: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
            phonePrice: '$899',
            discountPrice: '$859',
            phoneProperties: [
              { name: 'Screen', value: '6.1” OLED' },
              { name: 'Capacity', value: '128 GB' },
              { name: 'RAM', value: '6 GB' },
            ],
            isAddedToCart: false,
            isFavorite: false,
          }}
        />
        <Card
          phoneInfo={{
            phoneImage: require('../assets/images/iphone11.png'),
            phoneTitle: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
            phonePrice: '$899',
            discountPrice: '$859',
            phoneProperties: [
              { name: 'Screen', value: '6.1” OLED' },
              { name: 'Capacity', value: '128 GB' },
              { name: 'RAM', value: '6 GB' },
            ],
            isAddedToCart: false,
            isFavorite: false,
          }}
        />
      </div>
    </main>
  );
};

export default PhonePage;
