import update from 'immutability-helper';
import { EditorReducer } from './reducer';
import * as helpers from './helpers';
import * as payloads from './_payloads';

export const addGradient = (state: EditorReducer, payload: string): EditorReducer =>
  update(
    state,
    {
      gradients: {
        $push: [helpers.createGradient(payload)],
      },
    },
  );

export const deleteGradient = (state: EditorReducer, payload: string): EditorReducer =>
  update(
    state,
    {
      gradients: {
        $splice: [
          [ helpers.getGradientIndex(state, payload), 1 ]
        ],
      },
    },
  );

export const addColor = (state: EditorReducer, payload: payloads.ColorPayload): EditorReducer => {
  const targetIndex: number =  helpers.getGradientIndex(state, payload.gradientId);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          colors: {
            $push: [ helpers.createColor(payload.colorId) ],
          },
        },
      },
    },
  );
};

export const deleteColor = (state: EditorReducer, payload: payloads.ColorPayload): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload.gradientId);
  const colorIndex: number = helpers.getColorIndex(state, targetIndex, payload.colorId);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          colors: {
            $splice: [
              [colorIndex, 1],
            ],
          },
        },
      },
    },
  );
};

export const editColor = (state: EditorReducer, payload: payloads.ColorEditionPayload): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload.gradientId);
  const colorIndex: number = helpers.getColorIndex(state, targetIndex, payload.colorId);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          colors: {
            [colorIndex]: {
              color: {
                $set: payload.color,
              },
            },
          },
        },
      },
    },
  );
};

export const deleteAllColors = (state: EditorReducer, payload: string): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          colors: {
            $set: [],
          },
        },
      },
    },
  );
};

export const toggleChroma = (state: EditorReducer, payload: string): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          $toggle: [ 'useChroma' ],
        }
      },
    },
  );
};

export const setGradientType = (state: EditorReducer, payload: payloads.GradientTypePayload): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload.id);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          type: {
            $set: payload.type,
          },
        },
      },
    },
  );
};

export const setAttribute = (state: EditorReducer, payload: payloads.AttributeEditionPayload): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload.id);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          attributes: {
            [payload.attribute]: {
              $set: payload.value,
            },
          },
        },
      },
    },
  );
};

export const toggleFocalPoints = (state: EditorReducer, payload: string): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          focalPoints: {
            $set: !state.gradients[targetIndex].focalPoints,
          },
        },
      },
    },
  );
};

export const replaceGradientAttributes = (
  state: EditorReducer,
  payload: payloads.AttributesReplacementPayload
): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload.id);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          attributes: {
            $set: payload.attributes,
          },
        },
      },
    },
  );
};
