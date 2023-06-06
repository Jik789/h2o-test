import React from 'react';
import { changePaginationPage } from '../../store/features/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import styles from './Pagination.module.scss';

interface PaginationProps {
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems }) => {
  const dispatch = useAppDispatch();

  const userDataSelector = useAppSelector((state) => state.userData);
  const userInPage = userDataSelector.userInPage;
  const paginationPage = userDataSelector.paginationPage;

  const totalPages = Math.ceil(totalItems / userInPage); // Общее количество страниц

  // Обработчик клика на номер страницы
  const handlePageClick = (pageNumber: number) => {
    dispatch(changePaginationPage(pageNumber));
  };

  // Обработчик клика на стрелку влево
  const handlePrevClick = () => {
    if (paginationPage > 1) {
      dispatch(changePaginationPage(paginationPage - 1));
    }
  };

  // Обработчик клика на стрелку вправо
  const handleNextClick = () => {
    if (paginationPage < totalPages) {
      dispatch(changePaginationPage(paginationPage + 1));
    }
  };

  // Формирование массива номеров страниц для отображения
  const pageNumbers = [];
  const maxVisiblePages = 10;

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    let startPage;
    if (paginationPage <= Math.ceil(maxVisiblePages / 2)) {
      startPage = 1;
    } else if (paginationPage + Math.floor(maxVisiblePages / 2) > totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
    } else {
      startPage = paginationPage - Math.floor(maxVisiblePages / 2);
    }

    for (let i = 0; i < maxVisiblePages; i++) {
      pageNumbers.push(startPage + i);
    }
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrowButton}
        disabled={paginationPage === 1}
        onClick={handlePrevClick}
      >
        &lt;
      </button>

      <ul className={styles.pageNumbers}>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === paginationPage ? styles.active : ''}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>

      <button
        className={styles.arrowButton}
        disabled={paginationPage === totalPages}
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
