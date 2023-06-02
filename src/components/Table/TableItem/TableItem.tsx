import styles from './TableItem.module.scss';
import { ITable } from '../../../utils/interfaces';

interface ITableItemProps {
  item: ITable;
  index: number;
}

function TableItem({ item, index }: ITableItemProps) {
  return (
    <tr className={styles.mainContainer}>
      <td>{index}</td>
      <td>{item.mainInfo.userName}</td>
      <td>{item.mainInfo.userID}</td>
      <td>{item.mainInfo.userTelephone}</td>
      <td>{item.mainInfo.userSex}</td>
      <td>{item.mainInfo.userBirthday}</td>
      <td>{item.mainInfo.userMetro}</td>
      <td className={styles.elementBorder}>{item.mainInfo.userAddress}</td>
      <td>{item.bankInfo.userBank}</td>
      <td className={styles.elementBorder}>{item.bankInfo.userCardNumber}</td>
      <td>{item.HrInfo.userPost}</td>
      <td>{item.HrInfo.userDivision}</td>
      <td>{item.HrInfo.userSolution}</td>
      <td>{item.HrInfo.userSource}</td>
      <td>{item.HrInfo.userSolutionDate}</td>
      <td className={styles.elementBorder}>{item.HrInfo.userNote}</td>
    </tr>
  );
}

export default TableItem;
