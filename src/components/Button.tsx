import classNames from 'classnames';
import { ButtonProps } from '../types/Button';

export const Button = ({
  children,
  outline,
  sm = true,
  md,
  ...rest
}: ButtonProps) => {
  const className = classNames(
    [
      rest.className,
      'text-white bg-accent hover:shadow-custom duration-300',
      'font-bold font-sans rounded-lg text-sm ',
      'dark:bg-blue-600 dark:hover:bg-blue-700 border border-accent w-full',
      'active:scale-95',
    ],
    {
      '!text-accent bg-white border border-elements': outline,
      'px-5 py-2.5': sm,
      'py-[13px]': md,
    },
  );

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
