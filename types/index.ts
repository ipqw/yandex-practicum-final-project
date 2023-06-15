const languages = ['React','JavaScript','HTML','CSS','NextJS','NodeJS']; // ...

type Stack = typeof languages[number];

type Link<T extends string> = `https://${T}/`
type GithubLink = `${Link<"github.com">}${string}`
type TelegramLink = `${Link<"t.me">}${string}`

export interface IMember {
  id:number;
  firstName:string;
  lastName:string;
  description:string;
  addresses:string[];
  github?:GithubLink;
  telegram?:TelegramLink;
  stack:Stack[];
}

type ProjectType = 'Личный проект' | 'Групповой проект' | 'Академия Яндекса' // ...

export interface IProject {
  id:number;
  name:string;
  authors:(IMember['id'])[];
  stack:Stack[];
  type:ProjectType;
  description:string;
  dateCreated:Date;
}
