/* eslint-disable max-len */
import React, { useState } from 'react';
import arrowDown from '../assets/Icons/Chevron (Arrow Down).svg';
import arrowUp from '../assets/Icons/Chevron (Arrow Up).svg';

type Props = {
  className?: string;
  label: string;
  options: { value: string; label: string }[];
};

export const Dropdown: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className, label, options } = props;

  return (
    <div>
      <h3 className="text-secondary text-xs font-bold mb-1">
        {label}
      </h3>
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          onBlur={() => setIsOpen(false)}
          className={`${className} h-10 rounded-lg border-2 border-icons hover:border-secondary focus:border-secondary flex justify-between items-center px-[12px] py-[10px]`}
        >
          <p className="text-stone-950 text-sm font-bold leading-[21px]">
            {options[0].value}
          </p>
          {!isOpen ? (
            <img
              src={arrowDown}
              alt="\/"
              className='h-5 w-5'
            />
          ) : (
            <img
              src={arrowUp}
              alt="/\"
              className='h-5 w-5'
            />
          )}
        </button>

        {isOpen && (
          <div
            className={`absolute ${className} left-0 z-10 mt-2 w-[136px] rounded-md shadow-option bg-white ring-opacity-5 focus:outline-none border-2 border-icons`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div role="none">
              {options.map((elem) => (
                <button
                  key={elem.value}
                  className="text-secondary hover:text-primary block px-4 py-2 text-sm w-full text-left hover:bg-hover-bg hover:rounded-lg hover:text-stone-950"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${elem.value}`}
                >
                  {elem.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
