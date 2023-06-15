import { makeAutoObservable, toJS } from 'mobx';
import { IMember, IProject } from 'types';

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

  getProjectCategories = () => {
    let categories = new Array<Array<string>>;
    this.projects.forEach(project => {
      categories.push(toJS(project.stack))
    });
    //@ts-ignore
    return [...new Set(categories.map(category => JSON.stringify(category)))].map(s => JSON.parse(s));
  }

  isDark = true;
  changeTheme = () => {
    this.isDark = !this.isDark;
  };
}

export const store = new Storage();
