export interface IMember {
  id: number;
  name: string;
  position: string;
  description: string;
  github?: string;
  telegram?: string;
  location: string[];
  stack: string[];
}

export interface IProject {
  id: number;
  name: string;
  authors: IMember['id'][];
  stack: string[];
  description: string;
  createdAt: Date;
}
