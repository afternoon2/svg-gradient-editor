import { createAction } from 'typesafe-actions';
import { Gradient } from '../_gradientTypes';
import { AttributePayload, TypePayload, FocalPointsTogglePayload, ChromaJsTogglePayload } from './types';

export const addGradient = createAction('@editor/settings/ADD_GRADIENT', (resolve) => {
  return (gradient: Gradient) => resolve(gradient);
});

export const deleteGradient = createAction('@editor/settings/DELETE_GRADIENT', (resolve) => {
  return (gradientId: string) => resolve(gradientId);
});

export const updateGradientType = createAction('@editor/settings/UPDATE_GRADIENT_TYPE', (resolve) => {
  return (payload: TypePayload) => resolve(payload);
});

export const updateAttribute = createAction('@editor/settings/UPDATE_ATTRIBUTE', (resolve) => {
  return (payload: AttributePayload) => resolve(payload);
});

export const toggleFocalPoints = createAction('@editor/settings/TOGGLE_FOCAL_POINTS', (resolve) => {
  return (payload: FocalPointsTogglePayload) => resolve(payload);
});

export const toggleChromaJs = createAction('@editor/settings/TOGGLE_CHROMA_USAGE', (resolve) => {
  return (payload: ChromaJsTogglePayload) => resolve(payload);
});
