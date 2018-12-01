import { createAction, ActionType } from 'typesafe-actions';

export const setTheme = createAction('@application/SET_THEME', (resolve) => {
  return (theme: 'light' | 'dark') => resolve(theme);
});

export const SET_THEME = '@application/SET_THEME';
