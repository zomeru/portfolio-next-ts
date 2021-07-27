import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Image
        src='https://raw.githubusercontent.com/zomeru/zomeru/main/me.png'
        alt='user avatar'
        className='mx-auto rounded-full'
        height='120px'
        width='120px'
        layout='intrinsic'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-opensans dark:text-gray-400'>
        <span className='text-blue'>Zomer</span>
        Gregorio
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:text-gray-400 text-blue'>
        Full Stack Developer
      </p>
      <a
        href=''
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full text-blue dark:bg-dark-200 dark:text-gray-400'
        download='name'
      >
        Download Resume
      </a>
      {/* {Social Icons} */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-blue md:w-full'>
        <a href='https://github.com/zomeru' target='_blank' rel='noreferrer'>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a
          href='https://www.linkedin.com/in/zomergregorio'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a
          href='https://www.instagram.com/zomerusama'
          target='_blank'
          rel='noreferrer'
        >
          <AiOutlineInstagram className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:text-gray-400 text-blue'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Muntinlupa City, Philippines</span>
        </div>
        <p className='my-2'>zomergregorio@gmail.com</p>
        <p className='my-2'>09303320282</p>
      </div>
      <button
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full dark:text-gray-300 bg-blue focus:outline-none'
        onClick={() => window.open('mailto:zomergregorio@gmail.com')}
      >
        Email
      </button>
      <button
        onClick={changeTheme}
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full dark:text-gray-300 bg-blue'
      >
        Toggle theme
      </button>
    </div>
  );
};

export default Sidebar;
