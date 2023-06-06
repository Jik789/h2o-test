import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';
import UserMiniProfile from './UserMiniProfile/UserMiniProfile';
import stickRight from '../../image/stickRight.svg';
import stickLeft from '../../image/stickLeft.svg';
import { IHeaderMenu } from '../../utils/interfaces';

function HeaderMenu() {
  const [isActivePage, setIsActivePage] = useState<string>('2');

  const handleChangePage = (page: string) => {
    setIsActivePage(page);
  };

  const handlePrevPage = () => {
    const currentPageIndex = parseInt(isActivePage) - 1;
    if (currentPageIndex > 0) {
      handleChangePage(currentPageIndex.toString());
    }
  };

  const handleNextPage = () => {
    const currentPageIndex = parseInt(isActivePage) + 1;
    if (currentPageIndex <= pages.length) {
      handleChangePage(currentPageIndex.toString());
    }
  };

  const pages: IHeaderMenu[] = [
    { page: '1', path: '/base', label: 'База анкет сотрудников' },
    { page: '2', path: '/', label: 'Общая база сотрудников' },
    { page: '3', path: '/calendar', label: 'Календарь сотрудников' },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.menuContainer}>
        <div className={styles.menuStick}>
          <a onClick={handlePrevPage}>
            <img src={stickLeft} alt="left" />
          </a>
          <a onClick={handleNextPage}>
            <img src={stickRight} alt="right" />
          </a>
        </div>
        <ul className={styles.menuList}>
          {pages.map((page) => (
            <Link
              key={page.page}
              to={page.path}
              onClick={() => handleChangePage(page.page)}
              className={`${styles.menuListElement} ${
                isActivePage === page.page
                  ? styles.menuListElementActive
                  : styles.menuListElementInactive
              }`}
            >
              <li>{page.label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <UserMiniProfile />
    </div>
  );
}

export default HeaderMenu;
