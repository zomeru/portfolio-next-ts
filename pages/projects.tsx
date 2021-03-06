import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { fadeInUp, routeAnimation, stagger } from '../configs/animations';
import { projects as projectsData } from '../configs/data';
import { Category } from '../configs/type';

interface projectsProps {}

const Projects: React.FC<projectsProps> = ({}) => {
  const [projects, setProjects] = useState(projectsData);
  const [activeProjects, setActiveProjects] = useState('all');

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const filterCategoryHandler = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActiveProjects(category);
      return;
    }

    const newProjectArray = projectsData.filter(project =>
      project.category.includes(category)
    );

    setProjects(newProjectArray);
    setActiveProjects(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-5 py-2 overflow-y-scroll'
      style={{ height: '80vh' }}
    >
      <ProjectsNavbar
        filterCategoryHandler={filterCategoryHandler}
        activeProjects={activeProjects}
      />
      <motion.div
        className='relative grid grid-cols-12 gap-4 my-3'
        variants={stagger}
        initial='initial'
        animate='animate'
      >
        {projects.map(project => (
          <motion.div
            variants={fadeInUp}
            className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
