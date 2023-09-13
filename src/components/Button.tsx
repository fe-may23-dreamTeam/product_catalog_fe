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
      'text-white-light bg-accent-light dark:bg-accent-dark hover:shadow-custom dark:hover:shadow-custom-dark duration-300',
      'font-bold font-sans rounded-lg text-sm ',
      'dark:bg-accent-dark dark:hover:bg-accent-hover border border-accent-light dark:border-accent-hover w-full',
      'active:scale-95',
    ],
    {
      '!text-accent-light dark:!text-white-light !bg-white-light dark:!bg-white-dark border border-elements-light dark:!border-white-dark':
        outline,
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
