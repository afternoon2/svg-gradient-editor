import update from 'immutability-helper';
import { AttributePayload, TypePayload } from './types';
import { Gradient, LinearGradientAttributes, RadialGradientAttributes } from '../_gradientTypes';

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
