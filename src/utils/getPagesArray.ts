export function getPagesArray(totalPages: number, currentPage: number) {
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

  return pagesArray;
}
