import { makeAutoObservable, toJS } from 'mobx';
import { IMember, IProject } from 'types';
import { projectCreatedAt } from '../mock/mock';

class Storage {
  constructor() {
    makeAutoObservable(this);
  }

  lang: 'ru' | 'en' = 'ru';
  changeLang = () => {
    switch (this.lang) {
      case 'ru':
        this.lang = 'en';
        break;
      case 'en':
        this.lang = 'ru';
        break;
    }
  };

  members: Array<IMember> = [];
  projects: Array<IProject> = [];
  createTime = projectCreatedAt;

  setMembers = (a: any) => {
    this.members = a;
  };

  getMemberById(id: number): IMember | undefined {
    let res: undefined | IMember;
    this.members.forEach(member => {
      if (member.id == id) res = toJS(member);
    });
    return res;
  }

  setProjects = (a: any) => {
    this.projects = a;
  };

  isDark = true;
  changeTheme = () => {
    this.isDark = !this.isDark;
  };
}

export const store = new Storage();
