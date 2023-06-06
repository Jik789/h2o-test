import React from 'react';
import { useAppSelector } from '../../store/store';

function ShowResult() {
  const userDataSelector = useAppSelector((state) => state.userData);
  const currentPage = userDataSelector.paginationPage;
  const userInPage = userDataSelector.userInPage;
  const totalItems = userDataSelector.filteredData.length;

  const startIndex = (currentPage - 1) * userInPage + 1;
  const endIndex = Math.min(currentPage * userInPage, totalItems);

  return (
    <p>
      Показано {startIndex}-{endIndex} из {totalItems} результатов
    </p>
  );
}

export default ShowResult;
