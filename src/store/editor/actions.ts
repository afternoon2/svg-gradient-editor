import { createAction } from 'typesafe-actions';
import * as payloads from './_payloads';

export const addGradient = createAction(
  '@editor/ADD_GRADIENT', (resolve) =>
    (id: string) => resolve(id)
  );

export const deleteGradient = createAction(
  '@editor/DELETE_GRADIENT', (resolve) =>
    (id: string) => resolve(id)
);

export const addColor = createAction(
  '@editor/ADD_COLOR', (resolve) =>
    (payload: payloads.ColorPayload) => resolve(payload)
);

export const deleteColor = createAction(
  '@editor/DELETE_COLOR', (resolve) =>
    (payload: payloads.ColorPayload) => resolve(payload)
);

export const editColor = createAction(
  '@editor/EDIT_COLOR', (resolve) =>
    (payload: payloads.ColorEditionPayload) => resolve(payload)
);

export const deleteAllColors = createAction(
  '@editor/DELETE_ALL_COLORS', (resolve) =>
    (id: string) => resolve(id),
);

export const toggleChroma = createAction(
  '@editor/TOGGLE_CHROMA', (resolve) =>
    (id: string) => resolve(id)
);

export const setGradientType = createAction(
  '@editor/SET_GRADIENT_TYPE', (resolve) =>
    (payload: payloads.GradientTypePayload) => resolve(payload),
);

export const setAttribute = createAction(
  '@editor/SET_ATTRIBUTE', (resolve) =>
    (payload: payloads.AttributeEditionPayload) => resolve(payload)
);

export const toggleFocalPoints = createAction(
  '@editor/TOGGLE_FOCAL_POINTS', (resolve) =>
    (id: string) => resolve(id)
);

export const replaceGradientAttributes = createAction(
  '@editor/REPLACE_GRADIENT_ATTRIBUTES', (resolve) =>
    (payload: payloads.AttributesReplacementPayload) => resolve(payload)
);
