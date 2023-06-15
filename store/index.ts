import { makeAutoObservable } from "mobx";
import { members, projects, projectCreatedAt } from "../mock/mock";

class Storage {
    constructor(){
        makeAutoObservable(this)
    }
    lang = true
    changeLang = () => {
        this.lang = !this.lang   
    }

    members = {members}
    projects = {projects}
    createTime = projectCreatedAt

    theme = true
    changeTheme = () => {
        this.theme = !this.theme
        console.log(this.theme);
        
    }
}
export const store = new Storage()