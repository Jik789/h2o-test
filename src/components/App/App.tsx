import { Route, Routes } from 'react-router';
import BasePage from '../../page/BasePage/BasePage';
import CalendarPage from '../../page/CalendarPage/CalendarPage';
import MainPage from '../../page/MainPage/MainPage';
import NotFoundPage from '../../page/NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/base" element={<BasePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
