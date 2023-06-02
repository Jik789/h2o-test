import React from 'react';
import { ITable } from '../../utils/interfaces';
import styles from './Table.module.scss';
import TableItem from './TableItem/TableItem';

interface ITableProps {
  itemList: ITable[];
}

function Table({ itemList }: ITableProps) {
  return (
    <table className={styles.table}>
      {itemList.length > 0 && (
        <thead>
          <tr>
            <th></th>
            <th className={styles.elementBorder} colSpan={7}>
              Основная информация
            </th>
            <th className={styles.elementBorder} colSpan={2}>
              Банковская информация
            </th>
            <th className={styles.elementBorder} colSpan={6}>
              Информация от HR
            </th>
          </tr>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>ID</th>
            <th>Телефон</th>
            <th>Пол</th>
            <th>Дата рождения</th>
            <th>Метро</th>
            <th className={styles.elementBorder}>Адрес</th>
            <th>Банк</th>
            <th className={styles.elementBorder}>Номер карты</th>
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
        {itemList.map((item, index) => (
          <TableItem item={item} index={index + 1} key={item.mainInfo.userID} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
