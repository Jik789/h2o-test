import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';
import UserMiniProfile from './UserMiniProfile/UserMiniProfile';
import stickRight from '../../image/stickRight.svg';
import stickLeft from '../../image/stickLeft.svg';
import { IHeaderMenu } from '../../utils/interfaces';

function HeaderMenu() {
  const pages: IHeaderMenu[] = [
    { page: '1', path: '/unit/base', label: 'База анкет сотрудников' },
    { page: '2', path: '/', label: 'Общая база сотрудников' },
    { page: '3', path: '/unit/calendar', label: 'Календарь сотрудников' },
  ];

  const [isActivePage, setIsActivePage] = useState<string>('2');
  const navigate = useNavigate();

  useEffect(() => {
    const storedActivePage = localStorage.getItem('isActivePage');
    if (storedActivePage && pages.some((page) => page.page === storedActivePage)) {
      setIsActivePage(storedActivePage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isActivePage', isActivePage);
  }, [isActivePage]);

  const handleChangePage = (page: string) => {
    setIsActivePage(page);
    const route = pages.find((route) => route.page === page);
    navigate(route?.path ?? '/');
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
            <li
              key={page.page}
              onClick={() => handleChangePage(page.page)}
              className={`${styles.menuListElement} ${
                isActivePage === page.page
                  ? styles.menuListElementActive
                  : styles.menuListElementInactive
              }`}
            >
              {page.label}
            </li>
          ))}
        </ul>
      </div>
      <UserMiniProfile />
    </div>
  );
}

export default HeaderMenu;
