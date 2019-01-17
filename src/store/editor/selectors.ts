import { Gradient, InputColor } from '../_types';
import { ColorPayload } from './_payloads';

export const idList = (state: any): string[] =>
  state.editor.gradients.map((gradient: Gradient): string => gradient.id);

export const fromGradients = (state: any, id: string): Gradient =>
  state.editor.gradients.find((gradient: Gradient) => gradient.id === id);

export const colorsFromGradient = (state: any, id: string): InputColor[] =>
  fromGradients(state, id).colors;

export const colorIdsFromGradient = (state: any, id: string): string[] =>
  colorsFromGradient(state, id)
    .map((color: InputColor): string => color.id); 

export const colorsAmountInGradient = (state: any, id: string): number =>
  colorsFromGradient(state, id).length;

export const isUsingChroma = (state: any, id: string): boolean =>
  fromGradients(state, id).useChroma;

export const colorById = (state: any, gradientId: string) =>
  (colorId: string): InputColor => <InputColor>colorsFromGradient(state, gradientId)
    .find((color: InputColor) => color.id === colorId);

export const typeofGradient = (state: any, gradientId: string): 'linear' | 'radial' =>
  fromGradients(state, gradientId).type;

export const attributeFromGradient = (state: any, id: string) =>
  (attribute: string): number =>
    // @ts-ignore
    fromGradients(state, id).attributes[attribute];
