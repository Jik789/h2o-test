import MainPage from '../../page/MainPage/MainPage';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Navigation from '../Navigation/Navigation';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <div className={styles.mainContainer}>
        <HeaderMenu />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
