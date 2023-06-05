import React, { useState } from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems }) => {
  const itemsPerPage = 10; // Количество элементов на странице
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Общее количество страниц
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница

  // Обработчик клика на номер страницы
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Обработчик клика на стрелку влево
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Обработчик клика на стрелку вправо
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
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
    if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
      startPage = 1;
    } else if (currentPage + Math.floor(maxVisiblePages / 2) > totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
    } else {
      startPage = currentPage - Math.floor(maxVisiblePages / 2);
    }

    for (let i = 0; i < maxVisiblePages; i++) {
      pageNumbers.push(startPage + i);
    }
  }

  return (
    <div className={styles.pagination}>
      <button className={styles.arrowButton} disabled={currentPage === 1} onClick={handlePrevClick}>
        &lt;
      </button>

      <ul className={styles.pageNumbers}>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? styles.active : ''}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>

      <button
        className={styles.arrowButton}
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
