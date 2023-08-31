/* eslint-disable max-len */
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type Props = {
  className?: string;
  label: string;
  options: { value: string; label: string }[];
};

export const Dropdown: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className, label, options } = props;
  const [currentValue, setCurrentValue] = useState(options[0].label);

  return (
    <div>
      <h3 className="text-secondary text-xs font-bold mb-1">
        {label}
      </h3>
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          onBlur={() => setTimeout(() => {
            setIsOpen(false);
          }, 100)}
          className={`${className} h-10 rounded-lg border-2 border-icons hover:border-secondary focus:border-secondary flex justify-between items-center px-[12px] py-[10px]`}
        >
          <p className="text-stone-950 text-sm font-bold leading-[21px]">
            {currentValue}
          </p>
          {!isOpen ? (
            <FiChevronDown className='text-icons' />
          ) : (
            <FiChevronUp className='text-icons' />
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
              {options.map((option) => (
                <button
                  key={option.value}
                  className="text-secondary hover:text-primary block px-4 py-2 text-sm w-full text-left hover:bg-hover-bg hover:rounded-lg hover:text-stone-950"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${option.value}`}
                  onClick={() => {
                    setCurrentValue(option.label);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
