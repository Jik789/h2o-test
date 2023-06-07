import styles from './Navigation.module.scss';
import logo from '../../image/logo.svg';
import graph from '../../image/graph.svg';
import calendar from '../../image/calendar.svg';
import money from '../../image/money.svg';
import unit from '../../image/people.svg';
import setting from '../../image/setting.svg';
import tasks from '../../image/tasks.svg';
import urn from '../../image/urn.svg';
import { Link, useLocation } from 'react-router-dom';
import { isUnitPath } from '../../utils/utls';

function Navigation() {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className={styles.mainContainer}>
      <nav className={styles.navList}>
        <a className={styles.logoLink}>
          <img src={logo} alt="logo" />
        </a>
        <Link to={'/calendar'} className={activePath === '/calendar' ? styles.activeLink : ''}>
          <img src={calendar} alt="calendar" />
        </Link>
        <Link to={'/tasks'} className={activePath === '/tasks' ? styles.activeLink : ''}>
          <img src={tasks} alt="tasks" />
        </Link>
        <Link to={'/urn'} className={activePath === '/urn' ? styles.activeLink : ''}>
          <img src={urn} alt="urn" />
        </Link>
        <Link
          to={'/'}
          className={activePath === '/' || isUnitPath(activePath) ? styles.activeLink : ''}
        >
          <img src={unit} alt="unit" />
        </Link>
        <Link to={'/money'} className={activePath === '/money' ? styles.activeLink : ''}>
          <img src={money} alt="money" />
        </Link>
        <Link to={'/graph'} className={activePath === '/graph' ? styles.activeLink : ''}>
          <img src={graph} alt="graph" />
        </Link>
        <Link to={'/setting'} className={activePath === '/setting' ? styles.activeLink : ''}>
          <img src={setting} alt="setting" />
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
