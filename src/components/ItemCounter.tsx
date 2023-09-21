import React from 'react';

type Props = {
  count: number;
};

export const ItemCounter: React.FC<Props> = ({ count }) => {
  return (
    <>
      {count !== 0 && (
        <div className="absolute flex items-center border border-white-light dark:border-white-dark left-[51%] tablet:left-7 desktop:left-9 bottom-8 font-bold text-white-light dark:text-white-dark text-[8px] bg-secondary-accent-light dark:bg-secondary-accent-dark w-[14px] h-[14px] rounded-full text-center">
          <p className="mt-[2px] mx-auto">{count < 100 ? count : `99+`}</p>
        </div>
      )}
    </>
  );
};
