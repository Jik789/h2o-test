import { Outlet } from 'react-router';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

function UnitLayout() {
  return (
    <>
      <HeaderMenu />
      <Outlet />
    </>
  );
}

export default UnitLayout;
