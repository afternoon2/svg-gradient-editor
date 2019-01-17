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

export const deleteAllColors = createAction(
  '@editor/DELETE_ALL_COLORS', (resolve) =>
    (id: string) => resolve(id),
);

export const toggleChroma = createAction(
  '@editor/TOGGLE_CHROMA', (resolve) =>
    (id: string) => resolve(id)
);