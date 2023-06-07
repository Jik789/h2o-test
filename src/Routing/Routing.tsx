import { Route, Routes } from 'react-router';
import UnitBasePage from '../page/UnitPage/UnitBasePage/UnitBasePage';
import UnitCalendarPage from '../page/UnitPage/UnitCalendarPage/UnitCalendarPage';
import UnitMainPage from '../page/UnitPage/UnitMainPage/UnitMainPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';
import UnitLayout from '../Layout/UnitLayout/UnitLayout';
import CalendarLayout from '../Layout/CalendarLayout/CalendarLayout';
import CalendarPage from '../page/CalendarPage/CalendarPage';
import GraphLayout from '../Layout/GraphLayout/GraphLayout';
import GraphPage from '../page/GraphPage/GraphPage';
import MoneyLayout from '../Layout/MoneyLayout/MoneyLayout';
import MoneyPage from '../page/MoneyPage/MoneyPage';
import SettingLayout from '../Layout/SettingLayout/SettingLayout';
import SettingPage from '../page/SettingPage/SettingPage';
import TasksLayout from '../Layout/TasksLayout/TasksLayout';
import TasksPage from '../page/TasksPage/TasksPage';
import UrnLayout from '../Layout/UrnLayout/UrnLayout';
import UrnPage from '../page/UrnPage/UrnPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<UnitLayout />}>
        <Route index path="/" element={<UnitMainPage />} />
        <Route path="/unit/calendar" element={<UnitCalendarPage />} />
        <Route path="/unit/base" element={<UnitBasePage />} />
      </Route>
      <Route path="/calendar" element={<CalendarLayout />}>
        <Route index path="/calendar" element={<CalendarPage />} />
      </Route>
      <Route path="/graph" element={<GraphLayout />}>
        <Route index path="/graph" element={<GraphPage />} />
      </Route>
      <Route path="/money" element={<MoneyLayout />}>
        <Route index path="/money" element={<MoneyPage />} />
      </Route>
      <Route path="/setting" element={<SettingLayout />}>
        <Route index path="/setting" element={<SettingPage />} />
      </Route>
      <Route path="/tasks" element={<TasksLayout />}>
        <Route index path="/tasks" element={<TasksPage />} />
      </Route>
      <Route path="/urn" element={<UrnLayout />}>
        <Route index path="/urn" element={<UrnPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routing;
