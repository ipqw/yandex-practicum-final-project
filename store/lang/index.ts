import { ru } from './ru';
import { en } from './en';
import { store } from 'store';

const langs = { ru, en };

export const useLang = () => {
  //@ts-ignore
  return langs[store.lang];
};
