import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
import { IService, ISKill } from './type';

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
