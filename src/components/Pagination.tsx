import classNames from 'classnames';
import { FC } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
              'text-primary',
              'border',
              'border-icons',
              'rounded-full',
              'text-sm',
              'h-8',
              'w-8',
              'hover:border-primary',
              'focus:border-primary',
            ],
            {
              '!text-icons': currentPage === 1,
              '!border-icons': currentPage === 1,
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
              return <li key={`pageNo-${pageNo}-${i}`}>{pageNo}</li>;
            }

            return (
              <li key={`pageNo-${pageNo}-${i}`}>
                <SearchLink
                  className={classNames(
                    [
                      'flex',
                      'items-center',
                      'justify-center',
                      'text-primary',
                      'border',
                      'border-elements',
                      'rounded-full',
                      'text-sm',
                      'h-8',
                      'w-8',
                      'hover:border-primary',
                      'focus:text-white',
                      'focus:bg-primary',
                    ],
                    {
                      'bg-primary': currentPage === pageNo,
                      '!text-white': currentPage === pageNo,
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
              'text-primary',
              'border',
              'border-icons',
              'rounded-full',
              'text-sm',
              'h-8',
              'w-8',
              'hover:border-primary',
              'focus:border-primary',
            ],
            {
              '!text-icons': currentPage === totalPages,
              '!border-icons': currentPage === totalPages,
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
