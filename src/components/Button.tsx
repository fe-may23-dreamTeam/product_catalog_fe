import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = (
  props: Props & ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { children, onClick } = props;

  return (
    <button
      type="button"
      className="text-white bg-accent hover:shadow-custom duration-300
          font-bold font-sans rounded-lg text-sm px-5 py-2.5
          dark:bg-blue-600 dark:hover:bg-blue-700 border border-accent w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
