import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Button = (props: Props) => {
  const { children } = props;

  return (
    <button
      type="button"
      className="text-white bg-accent hover:shadow-custom duration-300
          font-bold font-sans rounded-lg text-sm px-5 py-2.5
          dark:bg-blue-600 dark:hover:bg-blue-700 border border-accent w-full"
    >
      {children}
    </button>
  );
};
