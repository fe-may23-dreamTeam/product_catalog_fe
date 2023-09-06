import React from 'react';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="flex items-center justify-self-start mb-6 col-span-4 tablet:col-span-12 desktop:col-span-24 mt-6">
      <NavLink to="/">
        <FiHome />
      </NavLink>
      {breadcrumbs.splice(1).map(({ match, breadcrumb }) => (
        <React.Fragment key={match.pathname}>
          <FiChevronRight className="ml-2" />
          <NavLink to={match.pathname} className="ml-2 text-xs">
            {breadcrumb}
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumb;
