import { FiArrowRight, FiHome } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const { pathname } = useLocation();

  const routes = pathname.split('/').splice(1);

  return (
    <div className="flex items-center justify-self-start mb-6 col-span-4 tablet:col-span-12 desktop:col-span-24 mt-6">
      <NavLink to="/">
        <FiHome />
      </NavLink>
      {routes.map((route, i) => (
        <>
          <FiArrowRight className="ml-2" />
          <NavLink to={`/${route}`} className="ml-2 text-xs">
            {route}
          </NavLink>
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;
