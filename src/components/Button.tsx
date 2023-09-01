import { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  md?: boolean;
  sm?: boolean;
};

export const Button = (props: Props) => {
  const { children, md, sm = true } = props;

  const className = classNames(`text-white bg-accent hover:shadow-custom duration-300
    font-bold font-sans rounded-lg text-sm
    dark:bg-blue-600 dark:hover:bg-blue-700 border border-accent w-full`, {
    'px-5 py-2.5': sm,
    'py-[13px]': md,
  });

  return (
    <button
      type="button"
      className={className}
    >
      {children}
    </button>
  );
};
