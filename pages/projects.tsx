import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projectsData } from '../data';
import { Category } from '../type';

interface projectsProps {}

const Projects: React.FC<projectsProps> = ({}) => {
  const [projects, setProjects] = useState(projectsData);
  const [activeProjects, setActiveProjects] = useState('all');

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
    <div className='px-5 py-2 overflow-y-scroll' style={{ height: '80vh' }}>
      <ProjectsNavbar
        filterCategoryHandler={filterCategoryHandler}
        activeProjects={activeProjects}
      />
      <div className='relative grid grid-cols-12 gap-4 my-3'>
        {projects.map(project => (
          <div
            className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'
            key={project.name}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
