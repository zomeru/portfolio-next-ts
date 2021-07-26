import React from 'react';
import { ISKill } from '../type';

interface BarProps {
  data: ISKill;
}

const Bar: React.FC<BarProps> = ({ data: { Icon, level, name } }) => {
  return (
    <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300'>
      <div
        className='flex items-center px-4 py-1 rounded-full bg-blue'
        style={{ width: level }}
      >
        <Icon className='mr-3' />
        {name}
      </div>
    </div>
  );
};

export default Bar;
