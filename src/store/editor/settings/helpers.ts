import update from 'immutability-helper';
import { AttributePayload } from './types';
import { Gradient } from '../_gradientTypes';

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
