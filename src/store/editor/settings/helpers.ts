import update from 'immutability-helper';
import * as payloads from './types';
import { gradient } from '../../../utils/gradient';
import {
  Gradient,
  LinearGradientAttributes,
  RadialGradientAttributes,
  InputColor,
  ColorMode,
  ColorInterpolation,
} from '../_gradientTypes';

export const getGradientIndex = (gradients: Gradient[], targetId: string) => gradients.findIndex(
  (gradient: Gradient) => gradient.id === targetId
);

export const getGradient = (gradients: Gradient[], targetId: string) =>
  gradients.find((gradient: Gradient) => gradient.id === targetId);

export const updateAttributeInGradient = (
  payload: payloads.AttributePayload,
  gradients: Gradient[]
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        attributes: {
          [payload.attribute]: {
            $set: payload.value,
          },
        },
      },
    },
  );
  return newData;
}

export const updateTypeInGradient = (
  payload: payloads.TypePayload,
  gradients: Gradient[]
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const defaultAttributes: (LinearGradientAttributes | RadialGradientAttributes) =
    payload.gradientType === 'linear' ?
    {
      x1: 0,
      y1: 0,
      x2: 1,
      y2: 1,
    } :
    {
      cx: 0.5,
      cy: 0.5,
      r: 1,
      fx: 0,
      fy: 0,
    };
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        type: {
          $set: payload.gradientType,
        },
        attributes: {
          $set: defaultAttributes,
        }
      }
    }
  );
  return newData;
};

export const toggleFocalPoints = (
  payload: payloads.FocalPointsTogglePayload,
  gradients: Gradient[]
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        focalPoints: {
          $set: payload.focalPoints,
        },
      },
    },
  );
  return newData;
};

export const toggleChromaJs = (
  payload: payloads.ChromaJsTogglePayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        useChroma: {
          $set: payload.useChroma,
        },
      },
    },
  );
  return newData;
};

export const addColorToGradient = (
  payload: payloads.AddColorPayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        colors: {
          $push: [payload.color],
        }
      },
    },
  );
  return newData;
};

export const editColorInGradient = (
  payload: payloads.AddColorPayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const colorIndex: number = gradients[targetIndex].colors
    .findIndex((color: InputColor) => color.id === payload.color.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        colors: {
          [colorIndex]: {
            color: {
              $set: payload.color.color,
            }
          }
        }
      },
    },
  );
  return newData;
};

export const deleteColorFromGradient = (
  payload: payloads.DeleteColorPayload,
  gradients: Gradient[]
): Gradient[] => {
  const gradientIndex: number = getGradientIndex(gradients, payload.gradientId);
  const colorIndex: number = gradients[gradientIndex].colors
    .findIndex((color: InputColor) => color.id === payload.colorId);
  const newData: Gradient[] = update(
    gradients,
    {
      [gradientIndex]: {
        colors: {
          $splice: [[colorIndex, 1]]
        },
      },
    },
  );
  return newData;
};

export const setGradientInterpolation = (
  payload: payloads.InterpolationPayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        chroma: {
          interpolation: {
            $set: payload.interpolation as (ColorInterpolation),
          },
        }
      }
    }
  );
  return newData;
};

export const setGradientMode = (
  payload: payloads.ColorModePayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        chroma: {
          mode: {
            $set: payload.mode as ColorMode
          },
        },
      },
    },
  );
  return newData;
};

export const setLightnessCorrection = (
  payload: string,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        chroma: {
          lightnessCorrection: {
            $set: !gradients[targetIndex].chroma.lightnessCorrection,
          },
        },
      },
    },
  );
  return newData;
};

export const setGradientSamples = (
  payload: payloads.SamplesPayload,
  gradients: Gradient[]
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        chroma: {
          samples: {
            $set: payload.samples,
          },
        },
      },
    },
  );
  return newData;
};

export const deleteAllColorsFromGradient = (
  payload: string,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        colors: {
          $set: [],
        },
      },
    },
  );
  return newData;
};

export const computeChromaColors = (
  payload: string,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = getGradientIndex(gradients, payload);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        output: {
          $set: gradient(gradients[targetIndex]),
        },
      },
    },
  );
  return newData;
};
