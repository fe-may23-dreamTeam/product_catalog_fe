/* eslint-disable max-len */
import logo from '../assets/images/logo.png';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { FiShoppingBag, FiMenu, FiHeart } from 'react-icons/fi';

type Props = {
  links: NavLinkType[];
};

export const Header: React.FC = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(
      'uppercase text-secondary font-extrabold text-xs hover:text-primary relative active:text-primary focus:text-primary font-Mont',
      { 'text-primary pb-6 border-b-4 border-primary': isActive },
    );

  return (
    <header className="h-16 border-b border-elements pl-4 desktop:pl-6 flex justify-between items-center relative">
      <div className="flex justify-start gap-6">
        <a href="/">
          <img className="flex" src={logo} alt="" />
        </a>

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
            {/* <img className="h-4 w-4" src={favourites} alt="Favoritires" /> */}
          </a>
        </div>
        <div className="border-l border-elements box-border mx-0">
          <a
            className="px-4 py-6 desktop:p-6 hidden tablet:flex justify-end"
            href="/#"
          >
            <FiShoppingBag />
            {/* <img className="h-4 w-4" src={FiShoppingBag} alt="Cart" /> */}
          </a>
          <a className="px-4 py-6 flex tablet:hidden" href="/#">
            <FiMenu />
            {/* <img className="h-4 w-4 tablet:hidden" src={FiMenu} alt="Menu" /> */}
          </a>
        </div>
      </div>
    </header>
  );
};
