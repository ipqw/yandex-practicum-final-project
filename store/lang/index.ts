import { ru } from './ru';
import { en } from './en';
import { store } from 'store';

const langs = { ru, en };

export const useLang = () => {
  return langs[store.lang];
};
