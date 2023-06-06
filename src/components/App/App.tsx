import { Route, Routes } from 'react-router';
import BasePage from '../../page/BasePage/BasePage';
import CalendarPage from '../../page/CalendarPage/CalendarPage';
import MainPage from '../../page/MainPage/MainPage';
import NotFoundPage from '../../page/NotFoundPage/NotFoundPage';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Navigation from '../Navigation/Navigation';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <div className={styles.mainContainer}>
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/base" element={<BasePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
