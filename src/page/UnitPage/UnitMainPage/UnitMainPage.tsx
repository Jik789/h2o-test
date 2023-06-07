import DisplayInPage from '../../../components/DisplayPage/DisplayInPage';
import Pagination from '../../../components/Pagination/Pagination';
import Search from '../../../components/Search/Search';
import ShowResult from '../../../components/ShowResult/ShowResult';
import Table from '../../../components/Table/Table';
import { useAppSelector } from '../../../store/store';
import styles from './UnitMainPage.module.scss';

function UnitMainPage() {
  const userDataSelector = useAppSelector((state) => state.userData);
  const userData = userDataSelector.filteredData;
  const userInPage = userDataSelector.userInPage;

  return (
    <>
      <h2 className={styles.mainPageName}>Общая база сотрудников, страница 2</h2>
      <div className={styles.mainPahePanel}>
        <div className={styles.contactAndSearch}>
          <div className={styles.contact}>
            <h3 className={styles.contactTitle}>{userData.length}</h3>
            <p>Контактов</p>
          </div>
          <Search />
        </div>
        <button className={styles.editButton}>Режим редактирования</button>
      </div>
      <div className={styles.tableContainer}>
        <Table itemList={userData} />
      </div>
      <div className={styles.mainFooter}>
        <ShowResult />
        <Pagination totalItems={userData.length} />
        <DisplayInPage userInPage={userInPage} />
      </div>
    </>
  );
}

export default UnitMainPage;
