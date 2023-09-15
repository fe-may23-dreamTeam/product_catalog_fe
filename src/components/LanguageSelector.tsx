import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative hover:shadow-lg dark:hover:shadow-custom-dark duration-200 p-4 tablet:py-6 flex border-x border-elements-light dark:border-elements-dark">
      <button
        type="button"
        className="text-sm font-semibold text-gray-900 dark:text-white-light items-center justify-center h-4 w-4"
        onClick={toggleMenu}
      >
        <FiGlobe className="h-4 w-4" />
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 mt-9 tablet:mt-11 flex justify-center mb-2">
          <div className="flex border rounded-lg shadow-md desktop:flex-col flex-row">
            <button
              onClick={() => changeLanguage('en')}
              className="px-3 py-1 tablet:px-4 tablet:py-2 desktop:px-7 text-sm text-gray-900 text-center dark:text-white-light"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('uk')}
              className="px-3 py-1 tablet:px-4 tablet:py-2 desktop:px-7  text-sm text-gray-900 text-center dark:text-white-light"
            >
              UA
            </button>
            <button
              onClick={() => changeLanguage('ja')}
              className="px-3 py-1 tablet:px-4 tablet:py-2 desktop:px-7  text-sm text-gray-900 text-center dark:text-white-light"
            >
              JA
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
