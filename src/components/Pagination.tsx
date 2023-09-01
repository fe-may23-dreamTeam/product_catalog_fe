/* eslint-disable max-len */
import classNames from 'classnames';
import { FC } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
  currentPage,
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
          href="#prev"
          aria-disabled={currentPage === 1}
          onClick={moveToPreviousPage}
        >
          <FiChevronLeft />
        </a>

        <ul className="flex gap-x-2">
          {pagesArray.map((pageNo: number) => (
            <li key={pageNo}>
              <a
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
          href="#next"
          aria-disabled={currentPage === totalPages}
          onClick={moveToNextPage}
        >
          <FiChevronRight />
        </a>
      </div>
    </div>
  );
};

export default Pagination;
