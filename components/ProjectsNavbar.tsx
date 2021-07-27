import React from 'react';
import { Category } from '../type';

interface ProjectsNavbarProps {
  filterCategoryHandler: Function;
  activeProjects: string;
}

interface INavItem {
  value: Category | 'all';
  filterCategoryHandler: Function;
  activeProjects: string;
}

export const NavItem: React.FC<INavItem> = ({
  value,
  filterCategoryHandler,
  activeProjects,
}) => {
  let className = 'text-gray-400 cursor-pointer hover:text-blue';

  if (activeProjects === value) {
    className += 'text-blue';
  }

  return (
    <li className={className} onClick={() => filterCategoryHandler(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: React.FC<ProjectsNavbarProps> = props => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
      <NavItem value={'all'} {...props} />
      <NavItem value={'javascript'} {...props} />
      <NavItem value={'typescript'} {...props} />
      <NavItem value={'react'} {...props} />
      <NavItem value={'java'} {...props} />
      <NavItem value={'sass'} {...props} />
    </div>
  );
};

export default ProjectsNavbar;
