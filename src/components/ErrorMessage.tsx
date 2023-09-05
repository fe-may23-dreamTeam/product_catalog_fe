import React from 'react';

type Props = {
  isError: boolean;
  children: React.ReactNode;
};

export const ErrorMessage = ({ isError, children }: Props) => {
  if (isError) {
    return (
      <div>
        <p className="font-Mont font-extrabold text-secondary m-auto flex justify-center">
          Error has occured while loading data from server
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
