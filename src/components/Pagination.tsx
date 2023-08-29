/* eslint-disable max-len */
import { FC } from 'react';
import classNames from 'classnames';

type Callback = (page: number) => number;

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number | Callback) => void;
};

const Pagination: FC<Props> = ({
  total,
  perPage,
  currentPage = 1,
  onPageChange,
}) => {
  const totalPages: number = Math.ceil(total / perPage);
  const pagesArray = Array.from(
    { length: totalPages },
    (_value, index) => index + 1,
  );

  function moveToPreviousPage() {
    if (currentPage === 1) {
      return;
    }

    onPageChange((prevPage) => prevPage - 1);
  }

  function moveToNextPage() {
    if (currentPage === totalPages) {
      return;
    }

    onPageChange((prevPage) => prevPage + 1);
  }

  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex gap-x-4">
        <a
          className={classNames(
            [
              'flex items-center',
              'justify-center',
              'text-grey_primary',
              'border',
              'border-grey_icons',
              'rounded-full',
              'text-sm',
              'h-8',
              'w-8',
              'hover:border-grey_primary',
              'focus:border-grey_primary',
            ],
            {
              'text-grey_icons': currentPage === 1,
              '!border-grey_icons': currentPage === 1,
              'cursor-not-allowed': currentPage === 1,
            },
          )}
          href="#prev"
          aria-disabled={currentPage === 1}
          onClick={moveToPreviousPage}
        >
          {'<'}
        </a>

        <ul className="flex gap-x-2">
          {pagesArray.map((pageNo: number) => (
            <li key={pageNo}>
              <a
                className={classNames(
                  [
                    'flex items-center',
                    'justify-center',
                    'text-grey_primary',
                    'border',
                    'border-grey',
                    'rounded-full',
                    'text-sm',
                    'h-8',
                    'w-8',
                    'hover:border-grey_primary',
                    'focus:text-white',
                    'focus:bg-grey_primary',
                  ],
                  {
                    'bg-grey_primary': currentPage === pageNo,
                    '!text-white': currentPage === pageNo,
                  },
                )}
                href={`#${pageNo}`}
                onClick={() => onPageChange(pageNo)}
              >
                {pageNo}
              </a>
            </li>
          ))}
        </ul>

        <a
          className={classNames(
            [
              'flex items-center',
              'justify-center',
              'text-grey_primary',
              'border',
              'border-grey_icons',
              'rounded-full',
              'text-sm',
              'h-8',
              'w-8',
              'hover:border-grey_primary',
              'focus:border-grey_primary',
            ],
            {
              'text-grey_icons': currentPage === totalPages,
              '!border-grey_icons': currentPage === totalPages,
              'cursor-not-allowed': currentPage === totalPages,
            },
          )}
          href="#next"
          aria-disabled={currentPage === totalPages}
          onClick={moveToNextPage}
        >
          {'>'}
        </a>
      </div>
    </div>
  );
};

export default Pagination;
