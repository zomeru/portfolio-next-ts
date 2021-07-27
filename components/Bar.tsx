import React from 'react';
import { ISKill } from '../configs/type';
import { motion } from 'framer-motion';
import { horizontalBounce } from '../configs/animations';
interface BarProps {
  data: ISKill;
}

const Bar: React.FC<BarProps> = ({ data: { Icon, level, name } }) => {
  return (
    <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300'>
      <motion.div
        className='flex items-center px-4 py-1 rounded-full bg-blue'
        style={{ width: level }}
        variants={horizontalBounce(level)}
        initial='initial'
        animate='animate'
      >
        <Icon className='mr-3' />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
