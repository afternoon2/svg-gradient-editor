import { createAction } from 'typesafe-actions';
import { Gradient } from '../_gradientTypes';
import { AttributePayload } from './types';

export const addGradient = createAction('@editor/settings/list/ADD_GRADIENT', (resolve) => {
  return (gradient: Gradient) => resolve(gradient);
});

export const deleteGradient = createAction('@editor/settings/list/DELETE_GRADIENT', (resolve) => {
  return (gradientId: string) => resolve(gradientId);
});

export const updateAttribute = createAction('@editor/settings/list/UPDATE_ATTRIBUTE', (resolve) => {
  return (payload: AttributePayload) => resolve(payload);
});
