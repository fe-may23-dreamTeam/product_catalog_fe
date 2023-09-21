import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <main className="grid min-h-full place-items-center bg-white-light dark:bg-white-dark px-6 py-24 tablet:py-32 desktop:px-8">
      <div className="text-center">
        <img
          src={require('../assets/images/404-error.png')}
          alt="404-error-image"
          className="mx-auto w-[250px] mb-4 mt-[-100px]"
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-light dark:text-primary-dark tablet:text-5xl">
          {t('pageNotFound')}
        </h1>
        <p className="mt-6 text-base leading-7 text-secondary">
          {t('movedOrDeleted')}
          <br /> {t('addressMistake')}
          <br /> {t('checkAgain')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-accent-light dark:bg-accent-dark px-3.5 py-2.5 text-sm font-semibold text-white-light dark:text-white-dark shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t('takeMeHome')}
          </a>
          <a
            href="/"
            className="text-sm font-semibold text-primary-light dark:text-primary-dark"
          >
            {'contactSupport'} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
