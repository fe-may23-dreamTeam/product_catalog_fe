/* eslint-disable max-len */
import logo from '../assets/images/logo.png';
import defaultSliderUp from '../assets/images/default-slider-up-icon.svg';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 h-48 sm:h-16 xl:px-38">
      <div className="flex flex-col px-4 py-8 sm:flex-row sm:px-6 lg:px-32 sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:space-x-28 xl:space-x-72 sm:justify-between">
          <a href="">
            <img className="flex" src={logo} alt="Nice Gadgets Logo" />
          </a>

          <div className="flex flex-col gap-4 sm:gap-0 mt-4 sm:flex-row sm:space-x-4 lg:space-x-32 sm:items-center">
            <a
              className="uppercase text-gray-400 font-extrabold text-xs hover:text-gray-900"
              href="#"
            >
              Github
            </a>

            <a
              className="uppercase text-gray-400 font-extrabold text-xs hover:text-gray-900"
              href="#"
            >
              Contacts
            </a>

            <a
              className="uppercase text-gray-400 font-extrabold text-xs hover:text-gray-900"
              href="#"
            >
              Rights
            </a>
          </div>
        </div>

        <div className="flex justify-center sm:justify-center items-center space-x-4 mt-4 sm:mt-0">
          <p className=" text-gray-400 font-bold text-xs whitespace-nowrap  hover:text-gray-900">
            Back to top
          </p>
          <div className="border rounded-full border-gray-400 border-solid hover:border-gray-900 h-8 w-8">
            <img className="p-2" src={defaultSliderUp} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
