/* eslint-disable no-console */
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    console.log(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname, page]);

  return null;
}
