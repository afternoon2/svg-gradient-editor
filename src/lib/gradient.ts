import { Gradient } from "@/state/types";
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
  attributes: {
    x1: 0,
    y1: 0,
    x2: 100,
    y2: 100,
  },
  blendMode: {
    id: nanoid(16),
    mode: "normal",
  },
  colorSpace: "rgba",
});
