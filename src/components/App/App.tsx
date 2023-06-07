import Navigation from '../Navigation/Navigation';
import styles from './App.module.scss';
import Routing from '../../Routing/Routing';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <div className={styles.mainContainer}>
        <Routing />
      </div>
    </div>
  );
}

export default App;
