import MainPage from '../../page/MainPage';
import Navigation from '../Navigation/Navigation';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <MainPage />
    </div>
  );
}

export default App;
