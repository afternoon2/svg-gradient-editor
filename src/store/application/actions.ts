import { createAction } from 'typesafe-actions';
import { AppModal } from './_types';

export const setTheme = createAction('@application/SET_THEME', (resolve) => {
  return (theme: 'light' | 'dark') => resolve(theme);
});

export const setModal = createAction('@application/SET_MODAL', (resolve) => {
  return (modal: AppModal) => resolve(modal);
});

export const clearModal = createAction('@application/CLEAR_MODAL', (resolve) => {
  return () => resolve();
});
