import styles from './Search.module.scss';
import searchIcon from '../../image/searchIcon.svg';

function Search() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Поиск" />
        <img className={styles.icon} src={searchIcon} alt="searchIcon" />
      </div>
      <button>Искать</button>
    </div>
  );
}

export default Search;
