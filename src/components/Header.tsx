import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { FiHeart, FiMenu, FiShoppingBag, FiX } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import BurgerMenu from '../pages/BurgerMenu';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Phones', path: 'phones' },
  { name: 'Tablets', path: 'tablets' },
  { name: 'Accessories', path: 'accessories' },
];

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen((prev) => !prev);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(
      'uppercase text-secondary duration-150 hover:border-b-4 hover:border-primary pb-6 font-extrabold text-xs hover:text-primary relative active:text-primary focus:text-primary font-Mont',
      { 'text-primary border-b-4 border-primary': isActive },
    );

  useEffect(() => {
    setMenuIsOpen(false);
  }, [pathname]);

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
          <NavLink
            className="hover:shadow-lg duration-200 px-4 py-6 desktop:p-6 hidden tablet:flex"
            to="/favourites"
          >
            <FiHeart />
          </NavLink>
        </div>
        <div className="border-l border-elements box-border mx-0">
          <a
            className="hover:shadow-lg duration-200 px-4 py-6 desktop:p-6 hidden tablet:flex justify-end"
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
              checked={menuIsOpen}
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
