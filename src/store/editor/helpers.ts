import { Gradient, InputColor } from "../_types";
import { EditorReducer } from "./reducer";

export const createGradient = (id: string): Gradient => ({
  id,
  type: 'linear',
  focalPoints: false,
  useChroma: false,
  attributes: {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
  },
  chroma: {
    interpolation: 'linear',
    mode: 'rgb',
    lightnessCorrection: false,
    samples: 10,
  },
  colors: [],
  output: [],
});

export const createColor = (id: string): InputColor => ({
  id,
  color: [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    0.5,
  ],
});

export const getGradientIndex = (state: EditorReducer, id: string): number =>
  state.gradients.findIndex((gradient: Gradient) => gradient.id === id);

export const getColorIndex = (state: EditorReducer, gradientIndex: number, colorId: string): number => {
  return state.gradients[gradientIndex].colors
    .findIndex((color: InputColor) => color.id === colorId);
}