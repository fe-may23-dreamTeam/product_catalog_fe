import React from 'react';
import { FiArrowRight, FiHome } from 'react-icons/fi';

const BreadCrumb = () => {
  return (
    <div className='flex items-center col-span-4 tablet:col-span-12 desktop:col-span-24 mt-[25px]'>
      <FiHome />
      <FiArrowRight className="ml-2" />
      <p className="ml-2 text-xs">Phones</p>
      <FiArrowRight className="ml-2" />
      <p className="ml-2 text-xs">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </p>
    </div>
  );
};

export default BreadCrumb;
