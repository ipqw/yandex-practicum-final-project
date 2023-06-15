import { makeAutoObservable } from "mobx";

class Storage {
    constructor(){
        makeAutoObservable(this)
    }
    lang = true
    changeLang = () => {
        this.lang = !this.lang   
    }
}
export const store = new Storage()