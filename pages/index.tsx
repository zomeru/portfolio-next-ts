import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import React from 'react';
import { services } from '../data';
import ServiceCard from '../components/ServiceCard';

interface indexProps {}

const index: React.FC<indexProps> = () => {
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>
        I am currently pursuing a bachelors degree in Information Technology
        (3rd Year) from STI College Alabang. I love to build full stack
        applications that live on the web.
      </h5>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <div className='grid gab-6 lg:grid-cols-2'>
          {services.map(service => (
            <div
              key={service.title}
              className='bg-gray-200 rounded-lg lg:col-span-1'
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

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
