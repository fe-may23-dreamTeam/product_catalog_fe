import classNames from 'classnames';
import { FC } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Navigate } from 'react-router-dom';
import { SearchLink } from './SearchLink';
import { getPagesArray } from '../utils/getPagesArray';

type Callback = (page: number) => number;

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number | Callback) => void;
  className?: string;
};

const Pagination: FC<Props> = ({
  total,
  perPage,
  currentPage,
  className,
  onPageChange,
}) => {
  const totalPages: number = Math.ceil(total / perPage);

  if (currentPage > totalPages) {
    return <Navigate to="/404" replace />;
  }

  const pagesArray = getPagesArray(totalPages, currentPage);
  const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
  const prevPage = currentPage === 1 ? currentPage : currentPage - 1;

  function moveToPreviousPage() {
    if (currentPage === 1) {
      return;
    }

    onPageChange((prev) => prev - 1);
  }

  function moveToNextPage() {
    if (currentPage === totalPages) {
      return;
    }

    onPageChange((prev) => prev + 1);
  }

  return (
    <div
      className={classNames(className, 'container flex justify-center mx-auto')}
    >
      <div className="flex gap-x-4">
        <SearchLink
          className={classNames(
            [
              'flex',
              'items-center',
              'justify-center',
              'text-primary-light',
              'dark:text-primary-dark',
              'border',
              'border-icons-light',
              'dark:border-white-dark',
              'rounded-full',
              'text-sm',
              'h-8',
              'w-8',
              'hover:border-primary-light',
              'dark:hover:border-primary-dark',
              'focus:border-primary-light',
              'dark:focus:border-primary-dark',
            ],
            {
              'dark:!text-icons-dark !text-icons-light': currentPage === 1,
              'dark:!border-icons-dark !border-icons-light': currentPage === 1,
            },
          )}
          params={{
            page: prevPage.toString(),
            perPage: perPage.toString(),
          }}
          aria-disabled={currentPage === 1}
          onClick={moveToPreviousPage}
        >
          <FiChevronLeft />
        </SearchLink>

        <ul className="flex gap-x-2">
          {pagesArray.map((pageNo: number | string, i) => {
            if (typeof pageNo === 'string') {
              return (
                <li
                  className="dark:text-primary-dark"
                  key={`pageNo-${pageNo}-${i}`}
                >
                  {pageNo}
                </li>
              );
            }

            return (
              <li key={`pageNo-${pageNo}-${i}`}>
                <SearchLink
                  className={classNames(
                    [
                      'flex',
                      'items-center',
                      'justify-center',
                      'text-primary-light',
                      'dark:text-primary-dark',
                      'border',
                      'dark:border-gray-surface',
                      'dark:bg-gray-surface',
                      'dark:hover:bg-elements-dark',
                      'rounded-full',
                      'text-sm',
                      'h-8',
                      'w-8',
                      'hover:border-primary-light',
                      'dark:hover:border-elements-dark',
                      'focus:text-white-light',
                      'dark:focus:text-white-dark',
                      'focus:bg-primary-light',
                      'dark:focus:bg-primary-dark',
                    ],
                    {
                      '!bg-primary-light dark:!bg-accent-dark':
                        currentPage === pageNo,
                      '!text-white-light dark:!text-white-light':
                        currentPage === pageNo,
                      'dark:!border-accent-dark dark:hover:scale-105':
                        currentPage === pageNo,
                    },
                  )}
                  params={{
                    page: pageNo.toString(),
                    perPage: perPage.toString(),
                  }}
                  onClick={() => onPageChange(pageNo)}
                >
                  {pageNo}
                </SearchLink>
              </li>
            );
          })}
        </ul>

        <SearchLink
          className={classNames(
            [
              'flex',
              'items-center',
              'justify-center',
              'text-primary-light',
              'dark:text-primary-dark',
              'border',
              'border-icons-light',
              'dark:border-white-dark',
              'rounded-full',
              'text-sm',
              'h-8',
              'w-8',
              'hover:border-primary-light',
              'dark:hover:border-primary-dark',
              'focus:border-primary-light',
              'dark:focus:border-primary-dark',
            ],
            {
              'dark:!text-icons-dark !text-icons-light':
                currentPage === totalPages,
              'dark:!border-icons-dark !border-icons-light':
                currentPage === totalPages,
            },
          )}
          params={{ page: nextPage.toString(), perPage: perPage.toString() }}
          aria-disabled={currentPage === totalPages}
          onClick={moveToNextPage}
        >
          <FiChevronRight />
        </SearchLink>
      </div>
    </div>
  );
};

export default Pagination;
