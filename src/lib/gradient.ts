import {
  Gradient,
  LinearGradientAttributes,
  RadialGradientAttributes,
} from "@/state/types";
import chroma from "chroma-js";
import { nanoid } from "nanoid";

export const createEmptyGradientObject = (): Gradient => ({
  id: nanoid(16),
  type: "linear",
  colors: [
    {
      id: nanoid(16),
      color: chroma.random().rgba(),
    },
    {
      id: nanoid(16),
      color: chroma.random().rgba(),
    },
  ],
  output: [],
  attributes: getDefaultLinearGradientAttributes(),
  blendMode: {
    id: nanoid(16),
    mode: "normal",
  },
  colorSpace: "rgba",
});

export const getDefaultLinearGradientAttributes =
  (): LinearGradientAttributes => ({
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
  });

export const getDefaultRadialGradientAttributes =
  (): RadialGradientAttributes => ({
    cx: 0.5,
    cy: 0.5,
    r: 1,
    fx: 0,
    fy: 0,
  });
