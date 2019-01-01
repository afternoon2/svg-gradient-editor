import { createAction } from 'typesafe-actions';
import { Gradient } from '../_gradientTypes';
import {
  AttributePayload, 
  TypePayload, 
  FocalPointsTogglePayload, 
  ChromaJsTogglePayload,
  AddColorPayload,
  DeleteColorPayload,
  InterpolationPayload,
  ColorModePayload,
  SamplesPayload,
} from './types';

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

export const addColor = createAction('@editor/settings/ADD_COLOR', (resolve) => {
  return (payload: AddColorPayload) => resolve(payload);
});

export const editColor = createAction('@editor/settings/EDIT_COLOR', (resolve) => {
  return (payload: AddColorPayload) => resolve(payload);
});

export const deleteColor = createAction('@editor/settings/DELETE_COLOR', (resolve) => {
  return (payload: DeleteColorPayload) => resolve(payload);
});

export const setGradientInterpolation = createAction(
  '@editor/settings/SET_INTERPOLATION',
  (resolve) => (payload: InterpolationPayload) => resolve(payload),
);

export const setGradientColorMode = createAction(
  '@editor/settings/SET_COLOR_MODE',
  (resolve) => (payload: ColorModePayload) => resolve(payload),
);

export const setLightnessCorrection = createAction(
  '@editor/settings/SET_LIGHTNESS_CORRECTION',
  (resolve) => (gradientId: string) => resolve(gradientId),
);

export const setGradientSamples = createAction(
  '@editor/settings/SET_SAMPLES',
  (resolve) => (payload: SamplesPayload) => resolve(payload),
)
