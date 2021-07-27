import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import React from 'react';
import { services } from '../configs/data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../configs/animations';

interface indexProps {}

const About: React.FC<indexProps> = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex flex-col flex-grow px-6 pt-1 dark:text-gray-400'
    >
      <h5 className='my-3 font-medium'>
        I am currently pursuing a bachelors degree in Information Technology
        (3rd Year) from STI College Alabang. I love to build full stack
        applications that live on the web.
      </h5>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <motion.div
          className='grid gap-6 lg:grid-cols-2'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {services.map(service => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch('https://localhost:3000/api/services');
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch('https://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
