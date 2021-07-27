import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavItemProps = {
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
};

const NavItem: FC<NavItemProps> = ({
  activeItem,
  setActiveItem,
  name,
  route,
}) => {
  return (
    activeItem !== name && (
      <Link href={route}>
        <a>
          <span className='hover:text-blue' onClick={() => setActiveItem(name)}>
            {name}
          </span>
        </a>
      </Link>
    )
  );
};

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, []);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold border-b-4 text-blue border-blue md:text-2xl'>
        {activeItem}
      </span>
      <div className='flex space-x-5 text-lg text-gray-400'>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='About'
          route='/'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Projects'
          route='/projects'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Resume'
          route='/resume'
        />
      </div>
    </div>
  );
};

export default Navbar;
