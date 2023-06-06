import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ITable } from '../../utils/interfaces';
import styles from './Table.module.scss';
import TableItem from './TableItem/TableItem';
import stickBottom from '../../image/stickBottom.svg';
import stickTop from '../../image/stickTop.svg';
import { sortUserDataByName } from '../../store/features/dataSlice';

interface ITableProps {
  itemList: ITable[];
}

function Table({ itemList }: ITableProps) {
  const userDataSelector = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const userInPage = userDataSelector.userInPage;
  const paginationPage = userDataSelector.paginationPage;
  const currentSort = userDataSelector.currentSort;

  const startIndex = (paginationPage - 1) * userInPage;
  const endIndex = startIndex + userInPage;
  const displayedItems = itemList.slice(startIndex, endIndex);

  const handleSortByName = () => {
    dispatch(sortUserDataByName());
  };

  return (
    <table className={styles.table}>
      {itemList.length > 0 && (
        <thead>
          <tr>
            <th></th>
            <th className={styles.elementBorder} colSpan={7}>
              Основная информация
            </th>
            <th className={styles.elementBorder} colSpan={3}>
              Банковская информация
            </th>
            <th className={styles.elementBorder} colSpan={6}>
              Информация от HR
            </th>
          </tr>
          <tr>
            <th>№</th>
            <th className={styles.elementTh}>
              <p>Имя</p>
              <span onClick={handleSortByName}>
                <img src={currentSort === 'top' ? stickTop : stickBottom} alt={stickBottom}></img>
              </span>
            </th>
            <th>ID</th>
            <th>Телефон</th>
            <th>Пол</th>
            <th>Дата рождения</th>
            <th>Метро</th>
            <th className={styles.elementBorder}>Адрес</th>
            <th>Банк</th>
            <th>Номер карты</th>
            <th className={styles.elementBorder}>Срок действия</th>
            <th>Должность</th>
            <th>Отдел</th>
            <th>Решение</th>
            <th>Источник</th>
            <th>Дата решения</th>
            <th className={styles.elementBorder}>Примечание</th>
          </tr>
        </thead>
      )}
      <tbody>
        {displayedItems.map((item, index) => {
          const originalIndex = startIndex + index;
          return <TableItem item={item} index={originalIndex + 1} key={item.mainInfo.userID} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
