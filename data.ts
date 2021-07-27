import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
import { IProject, IService, ISKill } from './type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I love to build beautiful and scalable SPA using modern front-end technologies like <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about:
      'Handle database, server, api using <b>Express </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop robust REST API using <b>Node API</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about: 'A fast-learner and daily problem solver.',
  },
];

export const technologies: ISKill[] = [
  {
    name: 'HTML5',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'Scss/CSS3',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'Javascript/Typescript',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'React.js',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Tailwind CSS',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Node.js',
    level: '40%',
    Icon: BsCircleFill,
  },
  {
    name: 'Git',
    level: '80%',
    Icon: BsCircleFill,
  },
];

export const tools: ISKill[] = [
  {
    name: 'Photoshop',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'Figma',
    level: '50%',
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: 'Zomify Colors',
    description: 'A Color Palette React App, inspired by Flat UI Colors.',
    image_path: '/images/zomify-colors.png',
    deployed_url: 'https://zomify-colors.netlify.app/',
    github_url: 'https://github.com/zomeru/zoms-color-palette',
    category: ['react', 'javascript'],
    tech_stack: ['Javascript', 'React.js', 'Material UI'],
  },
  {
    name: 'Portfolio',
    description: 'My portfolio website',
    image_path: '/images/portfolio-v2.png',
    deployed_url: 'https://zomergregorio.live',
    github_url: 'https://github.com/zomeru/zoms',
    category: ['react', 'javascript'],
    tech_stack: ['Javascript', 'React.js', 'Gatsby.js', 'Styled Components'],
  },
  {
    name: 'Anime Quiz',
    description: 'A simple anime quiz app made with React and Typescript',
    image_path: '/images/anime-quiz.png',
    deployed_url: 'https://zomeru.github.io/anime-quiz/',
    github_url: 'https://github.com/zomeru/anime-quiz',
    category: ['react', 'typescript'],
    tech_stack: ['Typescript', 'React.js', 'Styled Components'],
  },
  {
    name: 'Forkify',
    description: 'Recipe application with custom recipe uploads.',
    image_path: '/images/forkify.png',
    deployed_url: 'https://zomeru-forkify.netlify.app/',
    github_url: 'https://github.com/zomeru/recipe-app',
    category: ['javascript', 'sass'],
    tech_stack: ['Javascript', 'Sass'],
  },
  {
    name: 'Pig Dice Game',
    description: 'A simple Pig (Dice Game) that I wrote in Javacript',
    image_path: '/images/pig-dice-game.png',
    deployed_url: 'https://zomeru.github.io/pig-dice-game/',
    github_url: 'https://github.com/zomeru/pig-dice-game',
    category: ['javascript'],
    tech_stack: ['Javascript'],
  },
  {
    name: 'Trillo',
    description: 'An All-In-One booking app',
    image_path: '/images/trillo.png',
    deployed_url: 'https://zoms-trillo.netlify.app/',
    github_url: 'https://github.com/zomeru/Trillo',
    category: ['sass'],
    tech_stack: ['HTML', 'Sass'],
  },
  {
    name: 'Nexter',
    description: 'Nexter Landing Page',
    image_path: '/images/nexter.png',
    deployed_url: 'https://zoms-nexter.netlify.app/',
    github_url: 'https://github.com/zomeru/Nexter',
    category: ['sass'],
    tech_stack: ['HTML', 'Sass'],
  },
  {
    name: 'Snake',
    description: 'A snake game written in Java.',
    image_path: '/images/snake.png',
    deployed_url: '#',
    github_url: 'https://github.com/zomeru/Snake',
    category: ['java'],
    tech_stack: ['Java', 'Java Swing'],
  },
];
