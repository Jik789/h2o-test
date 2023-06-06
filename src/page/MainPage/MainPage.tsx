import DisplayPage from '../../components/DisplayPage/DisplayPage';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import Table from '../../components/Table/Table';
import { useAppSelector } from '../../store/store';
import styles from './MainPage.module.scss';

function MainPage() {
  const userDataSelector = useAppSelector((state) => state.userData.filteredData);

  return (
    <>
      <h2 className={styles.mainPageName}>Общая база сотрудников, страница 2</h2>
      <div className={styles.mainPahePanel}>
        <div className={styles.contactAndSearch}>
          <div className={styles.contact}>
            <h3 className={styles.contactTitle}>{userDataSelector.length}</h3>
            <p>Контактов</p>
          </div>
          <Search />
        </div>
        <button className={styles.editButton}>Режим редактирования</button>
      </div>
      <div className={styles.tableContainer}>
        <Table itemList={userDataSelector} />
      </div>
      <div className={styles.mainFooter}>
        <p>показано 21-30 из 89 результатов</p>
        <Pagination totalItems={340} />
        <DisplayPage />
      </div>
    </>
  );
}

export default MainPage;
