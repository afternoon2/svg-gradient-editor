import { createAction } from 'typesafe-actions';
import { Gradient } from '../_gradientTypes';
import * as payloads from './types';
import * as actionTypes from './actionTypes';

export const addGradient = createAction(actionTypes.ADD_GRADIENT, (resolve) => {
  return (gradient: Gradient) => resolve(gradient);
});

export const deleteGradient = createAction(actionTypes.DELETE_GRADIENT, (resolve) => {
  return (gradientId: string) => resolve(gradientId);
});

export const updateGradientType = createAction(actionTypes.UPDATE_GRADIENT_TYPE, (resolve) => {
  return (payload: payloads.TypePayload) => resolve(payload);
});

export const updateAttribute = createAction(actionTypes.UPDATE_ATTRIBUTE, (resolve) => {
  return (payload: payloads.AttributePayload) => resolve(payload);
});

export const toggleFocalPoints = createAction(actionTypes.TOGGLE_FOCAL_POINTS, (resolve) => {
  return (payload: payloads.FocalPointsTogglePayload) => resolve(payload);
});

export const toggleChromaJs = createAction(actionTypes.TOGGLE_CHROMA_USAGE, (resolve) => {
  return (payload: payloads.ChromaJsTogglePayload) => resolve(payload);
});

export const addColor = createAction(actionTypes.ADD_COLOR, (resolve) => {
  return (payload: payloads.AddColorPayload) => resolve(payload);
});

export const editColor = createAction(actionTypes.EDIT_COLOR, (resolve) => {
  return (payload: payloads.AddColorPayload) => resolve(payload);
});

export const deleteColor = createAction(actionTypes.DELETE_COLOR, (resolve) => {
  return (payload: payloads.DeleteColorPayload) => resolve(payload);
});

export const setGradientInterpolation = createAction(
  actionTypes.SET_INTERPOLATION,
  (resolve) => (payload: payloads.InterpolationPayload) => resolve(payload),
);

export const setGradientColorMode = createAction(
  actionTypes.SET_COLOR_MODE,
  (resolve) => (payload: payloads.ColorModePayload) => resolve(payload),
);

export const setLightnessCorrection = createAction(
  actionTypes.SET_LIGHTNESS_CORRECTION,
  (resolve) => (gradientId: string) => resolve(gradientId),
);

export const setGradientSamples = createAction(
  actionTypes.SET_SAMPLES,
  (resolve) => (payload: payloads.SamplesPayload) => resolve(payload),
);
