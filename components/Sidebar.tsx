import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div>
      <img
        src={'https://raw.githubusercontent.com/zomeru/zomeru/main/me.png'}
        alt={'user avatar'}
        className='w-32 h-32 mx-auto rounded-full'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-blue'>Zomer</span>
        Gregorio
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>
        Full Stack Developer
      </p>
      <a
        href=''
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
        download='name'
      >
        <GiTie className='w-6 h-6' />
        Download Resume
      </a>
      {/* {Social Icons} */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-blue md:w-full'>
        <a href=''>
          <AiFillGithub className='w-8 h-6 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillLinkedin className='w-8 h-6 cursor-pointer' />
        </a>
        <a href=''>
          <AiOutlineInstagram className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/* {Address} */}
      <div
        className='py-4 my-5 bg-gray-200'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Muntinlupa City, Philippines</span>
        </div>
        <p className='my-2'>zomergregorio@gmail.com</p>
        <p className='my-2'>09303320282</p>
      </div>
      {/* Email button */}
      <button
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-600 focus:outline-none'
        onClick={() => window.open('mailto:zomergregorio@gmail.com')}
      >
        Email
      </button>
      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue to-blue-600'>
        Toggle theme
      </button>
    </div>
  );
};

export default Sidebar;
