import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative pr-4">
      <button
        type="button"
        className="text-sm font-semibold text-gray-900 dark:text-white-light"
        onClick={toggleMenu}
      >
        {t('language')}
      </button>
      {isMenuOpen && (
        <div className="absolute mt-3 tablet:mt-5 flex justify-center">
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
