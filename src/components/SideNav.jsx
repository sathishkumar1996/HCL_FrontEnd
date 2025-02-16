import { useNavigate } from 'react-router-dom';
import { SIDE_NAV_ROUTES } from '../utils/constants';

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 bg-black">
      {SIDE_NAV_ROUTES.map((route) => {
        return (
          <div
            key={route.name}
            onClick={() => navigate(route.route)}
            className="text-white"
          >
            {route.name}
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
