import { makeAutoObservable } from 'mobx';
import { IMember, IProject } from 'types';
import { projectCreatedAt } from '../mock/mock';

class Storage {
  constructor() {
    makeAutoObservable(this);
  }

  isRu = true;
  changeLang = () => {
    this.isRu = !this.isRu;
  };

  members: Array<IMember> = [];
  projects: Array<IProject> = [];
  createTime = projectCreatedAt;

  setMembers = (a: any) => {
    this.members = a;
  };

  setProjects = (a: any) => {
    this.projects = a;
  };

  isDark = true;
  changeTheme = () => {
    this.isDark = !this.isDark;
  };
}

export const store = new Storage();
