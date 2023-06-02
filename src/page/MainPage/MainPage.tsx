import Search from '../../components/Search/Search';
import Table from '../../components/Table/Table';
import { MOCK_DATA } from '../../utils/const';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <>
      <h2 className={styles.mainPageName}>Общая база сотрудников</h2>
      <div className={styles.mainPahePanel}>
        <div className={styles.contactAndSearch}>
          <div className={styles.contact}>
            <h3>2133</h3>
            <p>Контактов</p>
          </div>
          <Search />
        </div>
        <button className={styles.editButton}>Режим редактирования</button>
      </div>
      <div className={styles.tableContainer}>
        <Table itemList={MOCK_DATA} />
      </div>
    </>
  );
}

export default MainPage;
