import styles from './HeaderMenu.module.scss';
import UserMiniProfile from './UserMiniProfile/UserMiniProfile';
import stickRight from '../../image/stickRight.svg';
import stickLeft from '../../image/stickLeft.svg';

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
          <li className={`${styles.menuListElement} ${styles.menuListElementInactive}`}>
            База анкет сотрудников
          </li>
          <li className={`${styles.menuListElement} ${styles.menuListElementActive}`}>
            Общая база сотрудников
          </li>
          <li className={`${styles.menuListElement} ${styles.menuListElementInactive}`}>
            Календарь сотрудников
          </li>
        </ul>
      </div>
      <UserMiniProfile />
    </div>
  );
}

export default HeaderMenu;
