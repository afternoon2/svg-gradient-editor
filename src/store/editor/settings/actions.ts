import { createAction } from 'typesafe-actions';
import { Gradient } from '../_gradientTypes';

export const addGradient = createAction('@editor/settings/list/ADD_GRADIENT', (resolve) => {
  return (gradient: Gradient) => resolve(gradient);
});

export const deleteGradient = createAction('@editor/settings/list/DELETE_GRADIENT', (resolve) => {
  return (gradientId: string) => resolve(gradientId);
});
