import update from 'immutability-helper';
import {
  AttributePayload,
  TypePayload,
  FocalPointsTogglePayload,
  ChromaJsTogglePayload,
  AddColorPayload,
  DeleteColorPayload,
  InterpolationPayload,
  ColorModePayload,
  SamplesPayload
} from './types';
import {
  Gradient,
  LinearGradientAttributes,
  RadialGradientAttributes,
  InputColor,
  ColorMode,
} from '../_gradientTypes';

export const updateAttributeInGradient = (
  payload: AttributePayload,
  gradients: Gradient[]
): Gradient[] => {
  const targetIndex: number = gradients.findIndex(gradient => gradient.id === payload.id);
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
  payload: TypePayload,
  gradients: Gradient[]
): Gradient[] => {
  const targetIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload.id);
  const defaultAttributes: (LinearGradientAttributes | RadialGradientAttributes) =
    payload.gradientType === 'linear' ?
    {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
    } :
    {
      cx: 0,
      cy: 0,
      r: 10,
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
  payload: FocalPointsTogglePayload,
  gradients: Gradient[]
): Gradient[] => {
  const targetIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload.id);
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
  payload: ChromaJsTogglePayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload.id);
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
  payload: AddColorPayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload.id);
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

export const deleteColorFromGradient = (
  payload: DeleteColorPayload,
  gradients: Gradient[]
): Gradient[] => {
  const gradientIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload.gradientId);
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
  payload: InterpolationPayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload.id);
  const newData: Gradient[] = update(
    gradients,
    {
      [targetIndex]: {
        chroma: {
          interpolation: {
            $set: payload.interpolation as ('linear' | 'bezier'),
          },
        }
      }
    }
  );
  return newData;
};

export const setGradientMode = (
  payload: ColorModePayload,
  gradients: Gradient[],
): Gradient[] => {
  const targetIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload.id);
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
  const targetIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload);
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
  payload: SamplesPayload,
  gradients: Gradient[]
): Gradient[] => {
  const targetIndex: number = gradients.findIndex((gradient: Gradient) => gradient.id === payload.id);
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
