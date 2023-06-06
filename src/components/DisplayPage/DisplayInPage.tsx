import { ChangeEvent } from 'react';
import { changePaginationPage, changeUserInPage } from '../../store/features/dataSlice';
import { useAppDispatch } from '../../store/store';
import styles from './DisplayInPage.module.scss';

interface IDisplayInPageProps {
  userInPage: number;
}

function DisplayInPage({ userInPage }: IDisplayInPageProps) {
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeUserInPage(e.target.value));
    dispatch(changePaginationPage(1));
  };

  return (
    <div className={styles.mainContainer}>
      <label>отображать на странице</label>
      <select
        className={styles.visibleSelect}
        value={userInPage}
        onChange={onChange}
        name="countPage"
      >
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

export default DisplayInPage;
