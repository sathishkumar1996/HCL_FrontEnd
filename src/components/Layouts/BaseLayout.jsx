import { Outlet } from 'react-router-dom';
import SideNav from '../SideNav';
const BaseLayout = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-[200px_1fr] bg-slate-200">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
