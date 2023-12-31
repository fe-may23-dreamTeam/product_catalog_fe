import React from 'react';
import { FiSmartphone } from 'react-icons/fi';

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const Loader = ({ isLoading, children }: Props) => {
  if (isLoading) {
    return (
      <div className="top-0 absolute left-1/2 -translate-x-1/2 flex place-content-center ">
        <FiSmartphone className="w-20 h-40 rounded-full animate-bounce text-accent-light dark:text-accent-dark" />
      </div>
    );
  }

  return <>{children}</>;
};
