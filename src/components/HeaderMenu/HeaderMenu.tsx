import styles from './HeaderMenu.module.scss';
import UserMiniProfile from './UserMiniProfile/UserMiniProfile';
import stickRight from '../../image/stickRight.svg';
import stickLeft from '../../image/stickLeft.svg';
import { Link } from 'react-router-dom';

function HeaderMenu() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.menuContainer}>
        <div className={styles.menuStick}>
          <a>
            <img src={stickLeft} alt="left" />
          </a>
          <a>
            <img src={stickRight} alt="right" />
          </a>
        </div>
        <ul className={styles.menuList}>
          <Link
            to="/base"
            className={`${styles.menuListElement} ${styles.menuListElementInactive}`}
          >
            <li>База анкет сотрудников</li>
          </Link>
          <Link to="/" className={`${styles.menuListElement} ${styles.menuListElementActive}`}>
            <li>Общая база сотрудников</li>
          </Link>
          <Link
            to="/calendar"
            className={`${styles.menuListElement} ${styles.menuListElementInactive}`}
          >
            <li>Календарь сотрудников</li>
          </Link>
        </ul>
      </div>
      <UserMiniProfile />
    </div>
  );
}

export default HeaderMenu;
