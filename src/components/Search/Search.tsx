import styles from './Search.module.scss';
import searchIcon from '../../image/searchIcon.svg';
import { useAppDispatch } from '../../store/store';
import { useState } from 'react';
import { changePaginationPage, searchForName } from '../../store/features/dataSlice';

function Search() {
  const [inputName, setInputName] = useState('');
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchForName(inputName));
    dispatch(changePaginationPage(1));
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Поиск" onChange={handleInputChange} />
        <img className={styles.icon} src={searchIcon} alt="searchIcon" />
      </div>
      <button onClick={handleSearch}>Искать</button>
    </div>
  );
}

export default Search;
