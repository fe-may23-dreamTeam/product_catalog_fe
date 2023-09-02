/* eslint-disable no-console */
/* eslint-disable max-len */
import classNames from 'classnames';
import React, { useState } from 'react';
import { FiHeart, FiMenu, FiShoppingBag, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import BurgerMenu from '../pages/BurgerMenu';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Phones', path: 'phones' },
  { name: 'Tablets', path: 'tablets' },
  { name: 'Accessories', path: 'accessories' },
];

export const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen((prev) => !prev);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(
      'uppercase text-secondary font-extrabold text-xs hover:text-primary relative active:text-primary focus:text-primary font-Mont',
      { 'text-primary pb-6 border-b-4 border-primary': isActive },
    );

  return (
    <header className="sticky bg-white z-50 top-0 h-12 tablet:h-16 border-b border-elements pl-4 desktop:pl-6 flex justify-between items-center">
      <div className="flex justify-start gap-6">
        <NavLink to="/" className="flex">
          <img src={logo} className="object-cover" alt="Nice gadgets" />
        </NavLink>

        <nav className="hidden tablet:flex">
          <ul className="flex tablet:space-x-8 desktop:space-x-16 tablet:px-4 desktop:px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink className={getLinkClass} to={`${link.path}`}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-end">
        <div className="border-l border-elements box-border">
          <a className="px-4 py-6 desktop:p-6 hidden tablet:flex" href="/#">
            <FiHeart />
          </a>
        </div>
        <div className="border-l border-elements box-border mx-0">
          <a
            className="px-4 py-6 desktop:p-6 hidden tablet:flex justify-end"
            href="/#"
          >
            <FiShoppingBag />
          </a>
          <span className="flex p-4 tablet:hidden">
            <input
              type="checkbox"
              id="nav__toggle"
              className="hidden peer/nav z-50"
              onChange={handleOpenMenu}
            />
            <label htmlFor="nav__toggle">
              {menuIsOpen ? <FiX /> : <FiMenu />}
            </label>
            <BurgerMenu />
          </span>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};
