import React from 'react';

type Props = {
  count: number;
};

export const ItemCounter: React.FC<Props> = ({ count }) => {
  return (
    <>
      {count !== 0 && (
        <div className="absolute flex items-center border border-white left-[51%] tablet:left-7 desktop:left-9 bottom-8 font-bold text-white text-[8px] bg-secondary-accent w-[14px] h-[14px] rounded-full text-center">
          <p className="mt-[2px] mx-auto">{count < 100 ? count : `99+`}</p>
        </div>
      )}
    </>
  );
};
