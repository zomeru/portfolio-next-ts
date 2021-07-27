import React, { useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../type';
import Image from 'next/image';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    tech_stack,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(true)}
        width='300'
        height='150'
        layout='responsive'
      />
      {/* <img
        src={image_path}
        alt={name}
        className='cursor-pointer'
        style={{ width: '1366', height: 'auto' }}
        onClick={() => setShowDetail(true)}
      /> */}
      <p className='my-2 text-center dark:text-gray-400'>{name}</p>

      {showDetail && (
        <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 text-b dark:bg-dark-100 dark:text-gray-400'>
          <div>
            {/* <img src={image_path} alt={name} /> */}
            <Image
              src={image_path}
              alt={name}
              width='300'
              height='150'
              layout='responsive'
            />
            <div className='flex justify-center my-4 space-x-3'>
              <a
                href={github_url}
                className='flex items-center px-4 py-2 text-lg bg-gray-200 space-x3 dark:bg-dark-200'
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className='flex items-center px-4 py-2 text-lg bg-gray-200 space-x3 dark:bg-dark-200'
              >
                <AiFillProject /> <span>Project Demo</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className='mb-3 text-lg font-medium md:text-2xl'>{name}</h2>
            <h3 className='mb-3 font-medium'>{description}</h3>
            <div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
              {tech_stack.map(tech => (
                <span
                  key={tech}
                  className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowDetail(false)}
            className='absolute bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
