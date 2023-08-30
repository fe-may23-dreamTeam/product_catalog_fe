/* eslint-disable max-len */
import React, { useState } from 'react';

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
      <h3 className="text-gray-secondary text-xs font-bold mb-1 font-mont">
        {label}
      </h3>
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          onBlur={() => setIsOpen(false)}
          className={`${className} hover:text-gray-secondary focus:border-stone-950 h-10 rounded-lg border border-gray-400 flex justify-between items-center px-[12px] py-[10px]`}
        >
          <p className="text-stone-950 text-sm font-bold leading-[21px]">
            {options[0].value}
          </p>
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className={`absolute ${className} left-0 z-10 mt-2 w-[136px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-zinc-200`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div role="none">
              {options.map((elem) => (
                <button
                  key={elem.value}
                  className="text-neutral-400 block px-4 py-2 text-sm w-full text-left hover:bg-gray-50 hover:rounded-lg hover:text-stone-950"
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
