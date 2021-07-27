import React from 'react';
import Bar from '../components/Bar';
import { technologies, tools } from '../configs/data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../configs/animations';

interface resumeProps {}

const Resume: React.FC<resumeProps> = ({}) => {
  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-6 py-2'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div className='dark:text-gray-400'>
            <h5 className='my-2 text-xl font-bold'>Information Technology</h5>
            <p className='font-semibold'>STI College Alabang (2019 - 2023)</p>
            <p className='my-3'>
              I am currently pursuing a bachelors degree in Information
              Technology (3rd Year) from STI College Alabang.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div className='dark:text-gray-400'>
            <h5 className='my-2 text-xl font-bold'>Front-end Developer</h5>
            <p className='font-semibold'>Freelance (2021 - present)</p>
            <p className='my-3'>
              Develop functional and appealing web and mobile-based applications
              based on usability. Provide website maintenance and enhancements.
            </p>
          </div>
        </motion.div>
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <div className='my-2 dark:text-gray-300'>
            {technologies.map(tech => (
              <Bar data={tech} key={tech.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {tools.map(tool => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
