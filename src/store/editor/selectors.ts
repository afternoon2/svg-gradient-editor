import { Gradient, InputColor, LinearGradientAttributes, RadialGradientAttributes, ChromaAttributes, BlendMode } from '../_types';

export const gradients = (state: any): Gradient[] =>
  state.editor.gradients;

export const gradientsAmount = (state: any): number =>
  gradients(state).length;

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

export const hasFocalPoints = (state: any, id: string): boolean =>
  fromGradients(state, id).focalPoints;

export const attributesOf = (state: any, id: string): LinearGradientAttributes | RadialGradientAttributes =>
  fromGradients(state, id).attributes;

export const chromaAttributesOf = (state: any, id: string): ChromaAttributes =>
  fromGradients(state, id).chroma;

export const blendMode = (state: any): BlendMode =>
  state.editor.blendMode;