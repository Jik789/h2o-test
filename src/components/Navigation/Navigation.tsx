import styles from './Navigation.module.scss';
import logo from '../../image/logo.svg';
import graph from '../../image/graph.svg';
import calendar from '../../image/calendar.svg';
import money from '../../image/money.svg';
import people from '../../image/people.svg';
import setting from '../../image/setting.svg';
import tasks from '../../image/tasks.svg';
import urn from '../../image/urn.svg';

function Navigation() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navList}>
        <a className={styles.logoLink}>
          <img src={logo} alt="logo" />
        </a>
        <a>
          <img src={calendar} alt="calendar" />
        </a>
        <a>
          <img src={tasks} alt="tasks" />
        </a>
        <a>
          <img src={urn} alt="urn" />
        </a>
        <a className={styles.activeLink}>
          <img src={people} alt="people" />
        </a>
        <a>
          <img src={money} alt="money" />
        </a>
        <a>
          <img src={graph} alt="graph" />
        </a>
        <a>
          <img src={setting} alt="setting" />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
