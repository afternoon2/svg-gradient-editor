import { createAction } from 'typesafe-actions';

export const setTheme = createAction('@application/SET_THEME', (resolve) => {
  return (theme: 'light' | 'dark') => resolve(theme);
});
