import React from 'react';

type Props = {
  isError: boolean;
  children: React.ReactNode;
};

export const ErrorMessage = ({ isError, children }: Props) => {
  if (isError) {
    return (
      <div className="сol-span-4 tablet:col-span-12 desktop:col-span-24">
        <p className="font-Mont font-extrabold text-secondary-light dark:text-secondary-dark m-auto flex justify-center ">
          Error has occured while loading data from server
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
