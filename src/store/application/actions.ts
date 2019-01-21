import { createAction } from 'typesafe-actions';

export const setTheme = createAction('@application/SET_THEME', (resolve) => {
  return (theme: 'dark' | 'light') => resolve(theme);
});

export const selectPreset = createAction(
  '@application/SELECT_PRESET', (resolve) =>
    (selectedPreset: number) => resolve(selectedPreset)
);

export const openModal = createAction(
  '@application/OPEN_MODAL', (resolve) =>
    () => resolve()
);

export const closeModal = createAction(
  '@application/CLOSE_MODAL', (resolve) =>
    () => resolve()
);
