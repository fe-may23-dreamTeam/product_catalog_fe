import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { FiChevronUp } from 'react-icons/fi';

export const Footer = () => {
  const handleClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-elements h-48 tablet:h-16 desktop:px-38 box-border">
      <div className="flex flex-col px-4 py-8 tablet:flex-row tablet:px-6 tablet:justify-around">
        <div className="flex flex-col tablet:flex-row tablet:space-x-32 tablet:justify-between tablet:items-center">
          <NavLink to="/">
            <img
              className="flex min-w-fit"
              src={logo}
              alt="Nice Gadgets Logo"
            />
          </NavLink>

          <nav>
            <ul className="flex flex-col gap-4 mt-4 tablet:mt-0 tablet:gap-0 tablet:ml-12 tablet:flex-row tablet:space-x-4 desktop:space-x-32 tablet:justify-between desktop:ml-52">
              <li>
                <a
                  className="duration-150 select-none uppercase text-secondary font-extrabold text-xs hover:text-primary active:text-primary focus:text-primary font-Mont"
                  href="#"
                >
                  Github
                </a>
              </li>

              <li>
                <a
                  className="duration-150 select-none uppercase text-secondary font-extrabold text-xs hover:text-primary active:text-primary focus:text-primary font-Mont"
                  href="#"
                >
                  Contacts
                </a>
              </li>

              <li>
                <a
                  className="duration-150 select-none uppercase text-secondary font-extrabold text-xs hover:text-primary active:text-primary focus:text-primary font-Mont"
                  href="#"
                >
                  Rights
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center tablet:justify-center items-center space-x-4 mt-4 tablet:mt-0">
          <p className="select-none text-secondary font-bold text-xs whitespace-nowrap tablet:pl-24">
            Back to top
          </p>
          <div
            onClick={handleClickToTop}
            className="cursor-pointer border rounded-full border-icons border-solid hover:border-primary active:text-primary focus:text-primary h-8 w-8 flex items-center justify-center"
          >
            <FiChevronUp className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};
