import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />
      <Outlet />  {/* yaha kuch bhi aa skta h HOME or STARRED */}
    </div>
  );
};

export default MainLayout;
