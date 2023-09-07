import classNames from 'classnames';
import { FC } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import { SearchLink } from './SearchLink';

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

  let pagesArray: (number | string)[] = [];

  if (totalPages > 5) {
    switch (currentPage) {
      case 1:
        pagesArray = [1, 2, 3, '...', totalPages];
        break;

      case totalPages:
        pagesArray = [1, '...', totalPages - 2, totalPages - 1, totalPages];
        break;

      default:
        pagesArray = [1, '...', currentPage, '...', totalPages];
    }
  } else {
    pagesArray = Array.from(
      { length: totalPages },
      (_value, index) => index + 1,
    );
  }

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
          {pagesArray.map((pageNo: number | string) => {
            if (typeof pageNo === 'string') {
              return <li key={uuidv4()}>{pageNo}</li>;
            }

            return (
              <li key={uuidv4()}>
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
