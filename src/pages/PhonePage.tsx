/* eslint-disable max-len */
import React from 'react';
import { Dropdown } from '../components/Dropdown';

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
    <main className="container mx-auto flex flex-col px-4 pt-6 tablet:px-6 desktop:w-[1200px]">
      <div className="mb-8">
        <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
          Mobile phones
        </h1>
        <div className="text-sm font-semibold leading-[21px] text-secondary">
          {`${modelsAmount} models`}
        </div>
      </div>
      {/*  */}
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
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 middle:grid-cols-3 desktop:grid-cols-4">
        {/* Cards */}
        <div
          className="container box-border rounded-lg p-8 max-w-xs border
    border-grey bg-white"
        >
          Card component
        </div>
        <div
          className="container box-border rounded-lg p-8 max-w-xs border
    border-grey bg-white"
        >
          Card component
        </div>
        <div
          className="container box-border rounded-lg p-8 max-w-xs border
    border-grey bg-white"
        >
          Card component
        </div>
        <div
          className="container box-border rounded-lg p-8 max-w-xs border
    border-grey bg-white"
        >
          Card component
        </div>
      </div>
    </main>
  );
};

export default PhonePage;
