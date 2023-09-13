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
    <footer className="border-t border-elements-light dark:border-elements-dark bg-white-light dark:bg-hover-bg-dark h-48 tablet:h-16 desktop:px-38 box-border">
      <div className="flex flex-col px-4 py-8 tablet:flex-row tablet:px-6 tablet:justify-around dark:bg-hover-bg-dark">
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
                  className="duration-150 select-none uppercase text-secondary-light dark:text-secondary-dark font-extrabold text-xs hover:text-primary-light dark:hover:text-primary-dark active:text-primary-light dark:active:text-primary-dark focus:text-primary-light dark:focus:text-primary-dark font-Mont"
                  href="#"
                >
                  Github
                </a>
              </li>

              <li>
                <NavLink
                  className="duration-150 select-none uppercase text-secondary-light dark:text-secondary-dark font-extrabold text-xs hover:text-primary-light dark:hover:text-primary-dark active:text-primary-light dark:active:text-primary-dark focus:text-primary-light dark:focus:text-primary-dark font-Mont"
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              </li>

              <li>
                <a
                  className="duration-150 select-none uppercase text-secondary-light dark:text-secondary-dark font-extrabold text-xs hover:text-primary-light dark:hover:text-primary-dark active:text-primary-light dark:active:text-primary-dark focus:text-primary-light dark:focus:text-primary-dark font-Mont"
                  href="#"
                >
                  Rights
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center tablet:justify-center items-center space-x-4 mt-4 tablet:mt-0 ">
          <p className="select-none text-secondary-light dark:text-secondary-dark font-bold text-xs whitespace-nowrap tablet:pl-24">
            Back to top
          </p>
          <div
            onClick={handleClickToTop}
            className="cursor-pointer border rounded-full border-icons-light dark:bg-white-dark dark:border-icons-dark border-solid hover:border-primary-light dark:hover:border-primary-dark active:text-primary-light dark:active:text-primary-dark focus:text-primary-light dark:focus:text-primary-dark h-8 w-8 flex items-center justify-center"
          >
            <FiChevronUp className="w-4 h-4 dark:text-primary-dark" />
          </div>
        </div>
      </div>
    </footer>
  );
};
