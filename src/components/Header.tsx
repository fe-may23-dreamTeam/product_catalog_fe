/* eslint-disable max-len */
import logo from '../assets/images/logo.png';
import menu from '../assets/images/menu-icon.svg';
import cart from '../assets/images/cart-icon.svg';
import favourites from '../assets/images/favourites-icon.svg';
import { useState } from 'react';
import classNames from 'classnames';

const navLinks = ['Home', 'Phones', 'Tablets', 'Accessories'];

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="h-16 border-b border-gray-300 pl-4 lg:pl-6 flex justify-between items-center relative">
      <div className="flex justify-start gap-6">
        <a href="#">
          <img className="flex" src={logo} alt="" />
        </a>

        <nav className="hidden sm:flex">
          <ul className="flex sm:space-x-8 xl:space-x-16 sm:px-4 xl:px-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  className={classNames(
                    'uppercase text-gray-400 font-extrabold text-xs hover:text-gray-900 relative',
                    {
                      'text-gray-900 pb-6 border-b-4 border-gray-900':
                        activeLink === link,
                    },
                  )}
                  href="#"
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-end">
        <div className="border-l border-gray-300 box-border">
          <a className="px-4 py-6 xl:p-6 hidden sm:flex" href="#">
            <img className="h-4 w-4" src={favourites} alt="Favoritires" />
          </a>
        </div>
        <div className="border-l border-gray-300 box-border mx-0">
          <a className="px-4 py-6 xl:p-6 hidden sm:flex justify-end" href="#">
            <img className="h-4 w-4" src={cart} alt="Cart" />
          </a>
          <a className="px-4 py-6 flex sm:hidden" href="#">
            <img className="h-4 w-4 sm:hidden" src={menu} alt="Menu" />
          </a>
        </div>
      </div>
    </header>
  );
};
