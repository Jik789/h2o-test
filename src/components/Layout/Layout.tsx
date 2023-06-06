import { Outlet } from 'react-router';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <div className={styles.mainContainer}>
        <HeaderMenu />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
