import { IconType } from 'react-icons';

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}
export interface ISKill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  tech_stack: string[];
}

export type Category = 'react' | 'sass' | 'javascript' | 'typescript' | 'java';
